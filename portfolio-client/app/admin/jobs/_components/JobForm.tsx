"use client";

import { useEffect, useState } from "react";
import { Job } from "../types";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  editJob: Job | null;
  onSubmit: (data: Partial<Job>) => Promise<void>;
}

const JOB_CATEGORIES = [
  "Design",
  "Sales",
  "Marketing",
  "Finance",
  "Technology",
  "Engineering",
  "Business",
  "Human Resource",
];

export default function JobFormModal({
  open,
  setOpen,
  editJob,
  onSubmit,
}: Props) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editJob) {
      setFormData(editJob);
    } else {
      resetForm();
    }
  }, [editJob, open]);

  const resetForm = () => {
    setFormData({
      title: "",
      company: "",
      location: "",
      category: "",
      description: "",
    });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.company || !formData.category) {
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit(formData);

      // Reset only if creating new job
      if (!editJob) {
        resetForm();
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50">
      <div className="bg-[#111C2D] w-full max-w-lg rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">
          {editJob ? "Edit Job" : "Add Job"}
        </h3>

        {/* Title */}
        <input
          placeholder="Job Title"
          value={formData.title}
          disabled={isSubmitting}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60"
        />

        {/* Company */}
        <input
          placeholder="Company Name"
          value={formData.company}
          disabled={isSubmitting}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60"
        />

        {/* Location */}
        <input
          placeholder="Location"
          value={formData.location}
          disabled={isSubmitting}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60"
        />

        {/* Category */}
        <select
          value={formData.category}
          disabled={isSubmitting}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none text-white disabled:opacity-60"
        >
          <option value="">Select Category</option>
          {JOB_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Description */}
        <textarea
          placeholder="Job Description"
          value={formData.description}
          disabled={isSubmitting}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none disabled:opacity-60"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => setOpen(false)}
            disabled={isSubmitting}
            className="px-4 py-2 bg-gray-600 rounded-lg disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-60"
          >
            {isSubmitting
              ? "Submitting..."
              : editJob
              ? "Update Job"
              : "Create Job"}
          </button>
        </div>
      </div>
    </div>
  );
}