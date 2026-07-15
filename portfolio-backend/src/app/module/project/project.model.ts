import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    // 🔹 Basic Info
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        // 🌐 Web
        "web",
        "website",
        "landing",
        "portfolio",

        // 📱 Apps
        "mobile",
        "desktop",

        // 💼 Business
        "saas",
        "crm",
        "erp",
        "dashboard",

        // 🛒 Commerce
        "ecommerce",
        "marketplace",
        "booking",

        // 🎓 Education
        "education",
        "lms",

        // 📊 Tools
        "analytics",
        "ai",
        "api",

        // 🎮 Others
        "game",
        "iot",
        "blockchain",

        // 🧪 Misc
        "personal",
        "experimental",
        "other",
      ],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    // 🔹 Media
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
    images: {
      type: [String],
      default: [],
    },
    videoDemo: {
      type: String,
    },

    // 🔹 Tech Info
    technologies: {
      type: [String],
      required: true,
      default: [],
    },
    stackType: {
      type: String,
      enum: ["frontend", "backend", "fullstack", "mobile"],
    },

    // 🔹 Links
    liveLink: String,
    githubClient: String,
    githubServer: String,

    // 🔹 Project Details
    features: {
      type: [String],
      default: [],
    },
    challenges: {
      type: [String],
      default: [],
    },
    solutions: {
      type: [String],
      default: [],
    },

    // 🔹 SEO
    metaTitle: String,
    metaDescription: String,

    // 🔹 Status
    status: {
      type: String,
      enum: ["ongoing", "completed", "planned"],
      default: "completed",
    },

    // 🔹 Highlight
    featured: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: Number,
      default: 0,
    },

    // 🔹 Client Info
    client: String,
    duration: String,
    teamSize: Number,

    // 🔹 Analytics
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },

    // 🔹 System
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// 🔍 Indexing (IMPORTANT for search)
projectSchema.index({
  title: "text",
  description: "text",
  category: "text",
  technologies: "text",
});

// 🚀 Export Model
export const ProjectModel = model<IProject>("Project", projectSchema);
