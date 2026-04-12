import { IProject } from "./project.interface";
import { ProjectModel } from "./project.model";

// 🔹 Create Project
const createProjectIntoDB = async (payload: IProject) => {
  if (!payload) throw new Error("Project data missing");

  const {
    title,
    slug,
    category,
    description,
    thumbnail,
    technologies,
    status,
  } = payload;

  // ✅ Required validation
  if (!title || !slug || !category || !description || !thumbnail) {
    throw new Error("Required fields missing");
  }

  // ✅ technologies validation
  if (!technologies || technologies.length === 0) {
    throw new Error("At least one technology is required");
  }

  // ✅ slug uniqueness check
  const existing = await ProjectModel.findOne({ slug });
  if (existing) {
    throw new Error("Project already exists");
  }

  // ✅ status validation (extra safety)
  const validStatus = ["ongoing", "completed", "planned"];
  if (status && !validStatus.includes(status)) {
    throw new Error("Invalid project status");
  }

  const result = await ProjectModel.create(payload);
  return result;
};

// 🔹 Get All Projects
const getAllProjects = async (query: Record<string, unknown>) => {
  const { search, category, featured, status } = query;

  const filter: any = { isDeleted: false };

  // 🔍 Search
  if (search) {
    filter.$text = { $search: search as string };
  }

  // 🎯 Category filter
  if (category) {
    filter.category = category;
  }

  // ⭐ Featured filter
  if (featured !== undefined) {
    filter.featured = featured === "true";
  }

  // 📌 Status filter
  if (status) {
    filter.status = status;
  }

  const result = await ProjectModel.find(filter)
    .sort({ priority: -1, createdAt: -1 })
    .lean();

  return result;
};

// 🔹 Get Single Project (by ID or slug)
const getSingleProject = async (idOrSlug: string) => {
  if (!idOrSlug) throw new Error("Project identifier missing");
  console.log(idOrSlug);

  const result = await ProjectModel.findOne({
    slug: idOrSlug,
    isDeleted: false,
  }).lean();

  if (!result) {
    throw new Error("Project not found");
  }

  // 👁️ increment views
  await ProjectModel.findByIdAndUpdate(result._id, {
    $inc: { views: 1 },
  });

  return result;
};

// 🔹 Update Project
const updateProject = async (id: string, payload: Partial<IProject>) => {
  if (!id) throw new Error("Project ID missing");

  const existing = await ProjectModel.findById(id);
  if (!existing || existing.isDeleted) {
    throw new Error("Project not found");
  }

  // 🔒 slug unique check
  if (payload.slug) {
    const slugExists = await ProjectModel.findOne({
      slug: payload.slug,
      _id: { $ne: id },
    });

    if (slugExists) {
      throw new Error("Slug already in use");
    }
  }

  // 🔥 Dynamic update object
  const updateData: any = {};
  const pushData: any = {};

  Object.entries(payload).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // 👉 array replace (default)
      updateData[key] = value;

      // ⚡ OPTIONAL: push mode (if needed)
      // pushData[key] = { $each: value };
    } else if (value !== undefined) {
      updateData[key] = value;
    }
  });

  const result = await ProjectModel.findByIdAndUpdate(
    id,
    {
      ...(Object.keys(updateData).length && { $set: updateData }),
      ...(Object.keys(pushData).length && { $push: pushData }),
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

// 🔹 Soft Delete
const deleteProject = async (id: string) => {
  if (!id) throw new Error("Project ID missing");

  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

// 🔹 Like Project (future feature)
const likeProject = async (id: string) => {
  if (!id) throw new Error("Project ID missing");

  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
  likeProject,
};
