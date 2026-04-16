"use client";

import { useCreateProject } from "@/store/hooks/project.hook";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { uploadMultipleImages, uploadSingleImage } from "./ImageUpload";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { FormValuesCreateProject } from "@/types/FormTypeValue";
import { FormField } from "@/components/form/FormField";
import { Section } from "@/components/form/Section";
import { TechSelect } from "@/components/form/TechSelect";
import { categoryOptions } from "@/constant/categoryOptions";

const ProjectForm = ({ onClose }: { onClose: () => void }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { create, isLoading } = useCreateProject();

  const { register, handleSubmit, control, watch, setValue } =
    useForm<FormValuesCreateProject>({
      defaultValues: {
        images: [{}], // ✅ no undefined needed
        features: [{ value: "" }],
        technologies: [],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const {
    fields: featureFields,
    append: addFeature,
    remove: removeFeature,
  } = useFieldArray({ control, name: "features" });

  const thumbnail = watch("thumbnail");
  const images = watch("images");

  const isProcessing = isUploading || isLoading;

  const onSubmit = async (data: FormValuesCreateProject) => {
    try {
      // 🔹 Upload Thumbnail
      setIsUploading(true);
      let thumbnailUrl = "";
      if (data.thumbnail?.[0]) {
        thumbnailUrl = await uploadSingleImage(data.thumbnail[0]);
      }

      // 🔹 Upload Gallery Images
      const galleryFiles = data.images
        ?.map((img) => img.file?.[0])
        .filter((file): file is File => file instanceof File);

      const galleryUrls = galleryFiles.length
        ? await uploadMultipleImages(galleryFiles)
        : [];

      // 🔹 Convert Arrays
      const features = data.features?.map((f) => f.value).filter(Boolean);

      // 🔹 Convert Technologies

      setIsUploading(false);
      // 🔹 Final Payload
      const payload: any = {
        // ✅ Required
        title: data.title,
        slug: data.slug,
        category: data.category,
        description: data.description,
        thumbnail: thumbnailUrl,
        technologies: data.technologies,
        status: data.status || "completed",

        // ✅ Optional (only if exists)
        ...(galleryUrls.length && { images: galleryUrls }),
        ...(features?.length && { features }),

        ...(data.liveLink && { liveLink: data.liveLink }),

        ...(data.stackType && { stackType: data.stackType }),

        ...(data.priority && { priority: Number(data.priority) }),

        ...(data.githubClient && { githubClient: data.githubClient }),
        ...(data.githubServer && { githubServer: data.githubServer }),

        ...(data.metaTitle && { metaTitle: data.metaTitle }),
        ...(data.metaDescription && {
          metaDescription: data.metaDescription,
        }),

        ...(data.client && { client: data.client }),
        ...(data.duration && { duration: data.duration }),
        ...(data.teamSize && { teamSize: Number(data.teamSize) }),

        ...(data.featured && { featured: data.featured }),
      };

      console.log("FINAL PAYLOAD:", payload);

      // 🔹 API Call
      // await create(payload);

      // onClose();
    } catch (err) {
      console.error(err);
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-[#1e293b] border border-gray-700 rounded-2xl shadow-xl p-6 md:p-10 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">🚀 Create Project</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-400 text-lg"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* 🔹 Basic Info */}

        <Section title="Basic Information ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Project Title *">
              <input {...register("title")} className={inputClass} />
            </FormField>

            <FormField label="Slug  *">
              <input {...register("slug")} className={inputClass} />
            </FormField>

            <FormField label="Category *">
              <select {...register("category")} className={inputClass}>
                <option value="">Select Category</option>

                {categoryOptions?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Stack Type *">
              <select {...register("stackType")} className={inputClass}>
                <option value="">Select Type</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
                <option value="mobile">Mobile</option>
              </select>
            </FormField>
          </div>

          <div className="mt-6">
            <FormField label="Description *">
              <textarea
                {...register("description")}
                className={`${inputClass} h-32`}
              />
            </FormField>
          </div>
        </Section>

        {/* project link  */}
        <Section title="Project Links">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Live Link */}
            <FormField label="Live URL *">
              <input
                {...register("liveLink")}
                placeholder="https://your-live-site.com"
                className={inputClass}
              />
            </FormField>

            {/* GitHub Client */}
            <FormField label="GitHub Client">
              <input
                {...register("githubClient")}
                placeholder="https://github.com/username/client-repo"
                className={inputClass}
              />
            </FormField>

            {/* GitHub Server */}
            <FormField label="GitHub Server">
              <input
                {...register("githubServer")}
                placeholder="https://github.com/username/server-repo"
                className={inputClass}
              />
            </FormField>
          </div>
        </Section>

        {/* 🔹 Thumbnail */}
        <Section title="Thumbnail">
          <div className="space-y-3">
            <input
              type="file"
              {...register("thumbnail")}
              className="w-full border border-dashed border-gray-600 rounded-lg px-3 py-2 text-sm bg-[#0f172a] text-gray-300 cursor-pointer"
            />

            {thumbnail?.[0] && (
              <img
                src={URL.createObjectURL(thumbnail[0])}
                className="h-40 rounded-xl object-cover border border-gray-600"
              />
            )}
          </div>
        </Section>

        {/* 🔹 Gallery */}
        <Section title="Gallery Images">
          <div className="space-y-4">
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center gap-3"
              >
                <input
                  type="file"
                  {...register(`images.${index}.file`)}
                  className="w-full border border-dashed border-gray-600 rounded-lg px-3 py-2 text-sm bg-[#0f172a] text-gray-300"
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Remove
                </button>

                {images?.[index]?.file?.[0] && (
                  <img
                    src={URL.createObjectURL(images[index].file[0])}
                    className="h-16 w-16 rounded-lg object-cover border border-gray-600"
                  />
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({})} // ✅ clean
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              + Add Image
            </button>
          </div>
        </Section>

        <Section title="Technologies">
          <FormField label="Technologies *">
            <TechSelect
              value={watch("technologies") || []}
              onChange={(val: string[]) => setValue("technologies", val)}
            />
          </FormField>
        </Section>

        {/* 🔹 Technologies */}
        <Section title="Technologies">
          <FormField label="Technologies (comma separated)">
            <input {...register("technologies")} className={inputClass} />
          </FormField>
        </Section>

        {/* 🔹 Features */}
        <Section title="Features">
          <div className="space-y-3">
            {featureFields.map((item, index) => (
              <div key={item.id} className="flex gap-3">
                <input
                  {...register(`features.${index}.value`)}
                  className={`${inputClass} flex-1`}
                />

                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => addFeature({ value: "" })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm mt-3"
          >
            + Add Feature
          </button>
        </Section>

        <Section title="SEO & Status">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Meta Title */}
            <FormField label="Meta Title">
              <input
                {...register("metaTitle")}
                placeholder="SEO title for search engines"
                className={inputClass}
              />
            </FormField>
          </div>

          {/* Meta Description (full width) */}
          <div className="mt-6">
            <FormField label="Meta Description">
              <textarea
                {...register("metaDescription")}
                placeholder="Short description for SEO..."
                className={`${inputClass} h-28`}
              />
            </FormField>
          </div>
        </Section>

        <Section title="Client / Business Info">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Client Name */}
            <FormField label="Client Name">
              <input
                {...register("client")}
                placeholder="e.g. ABC Company"
                className={inputClass}
              />
            </FormField>

            {/* Duration */}
            <FormField label="Project Duration">
              <input
                {...register("duration")}
                placeholder="e.g. 2 months"
                className={inputClass}
              />
            </FormField>

            {/* Team Size */}
            <FormField label="Team Size">
              <input
                type="number"
                {...register("teamSize")}
                placeholder="e.g. 3"
                className={inputClass}
              />
            </FormField>
          </div>
        </Section>

        {/* others  */}
        <Section title="Others">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Project Status *">
              <select {...register("status")} className={inputClass}>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
                <option value="planned">Planned</option>
              </select>
            </FormField>

            <FormField label="Priority (Sorting Order) *">
              <input
                type="number"
                min={0}
                {...register("priority")}
                placeholder="e.g. 1 (top project)"
                className={inputClass}
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured */}
            <div className="flex flex-col gap-2 mt-6">
              <label className="text-sm font-medium text-gray-300">
                Featured Project *
              </label>

              <label className="flex items-center gap-3 bg-[#0f172a] border border-gray-600 rounded-xl px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("featured")}
                  className="w-4 h-4 accent-green-500"
                />
                <span className="text-sm text-gray-300">Mark as Featured</span>
              </label>
            </div>
          </div>
        </Section>

        {/* 🔹 Submit */}
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2
    ${
      isProcessing
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700"
    }`}
        >
          {/* Spinner */}
          {isProcessing && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}

          {/* Dynamic Text */}
          {isUploading
            ? "Uploading Images..."
            : isLoading
              ? "Saving Project..."
              : "Submit Project"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;

/// 🔹 Reusable UI

const inputClass =
  "w-full bg-[#0f172a] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition";
