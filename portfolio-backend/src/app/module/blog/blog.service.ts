import { IBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

// 🔹 Create
const createBlogIntoDB = async (payload: IBlog) => {
  const slugExists = await BlogModel.findOne({ slug: payload.slug });
  if (slugExists) {
    throw new Error("Slug already exists");
  }

  const result = await BlogModel.create(payload);
  return result;
};

// 🔹 Get All (with query)
const getAllBlogs = async (query: any) => {
  const filter: any = { isDeleted: false };

  if (query.search) {
    filter.$text = { $search: query.search };
  }

  if (query.category) {
    filter.category = query.category;
  }

  if (query.status) {
    filter.status = query.status;
  }

  const result = await BlogModel.find(filter).sort({ createdAt: -1 });

  return result;
};

// 🔹 Get Single
const getSingleBlog = async (id: string) => {
  const blog = await BlogModel.findById(id);

  if (!blog || blog.isDeleted) {
    throw new Error("Blog not found");
  }

  return blog;
};

// 🔹 Update
const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const existing = await BlogModel.findById(id);

  if (!existing || existing.isDeleted) {
    throw new Error("Blog not found");
  }

  const result = await BlogModel.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true }
  );

  return result;
};

// 🔹 Delete (soft)
const deleteBlog = async (id: string) => {
  const result = await BlogModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

// 🔹 Like
const likeBlog = async (id: string) => {
  const result = await BlogModel.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
};