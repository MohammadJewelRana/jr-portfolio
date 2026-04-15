"use client";

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useUpdateProject } from "@/store/hooks/project.hook";
import { useRouter } from "next/navigation";
import {
  uploadMultipleImages,
  uploadSingleImage,
} from "../../../_components/ImageUpload";
import {
  categoryOptions,
  FormField,
  Section,
  TechSelect,
} from "../../../_components/ProjectForm";

export type FormValues = {
  title: string;
  slug: string;
  category: string;
  stackType: string;
  description: string;
  thumbnail: FileList;
  images: { file: FileList }[];
  technologies: string[];
  status: string;
  features: { value: string }[];
  liveLink: string;
  githubClient: string;
  githubServer: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  duration: string;
  teamSize: number;
  priority: number;
  featured: boolean;
};

const UpdateProjectForm = ({ project, onClose }: any) => {
  const router = useRouter();
  const { update, isLoading } = useUpdateProject();

  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      images: [{ file: undefined }],
      features: [{ value: "" }],
      technologies: [],
    },
  });

  // field array (images)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  // field array (features)
  const {
    fields: featureFields,
    append: addFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });

  const thumbnail = watch("thumbnail");
  const images = watch("images");

  // ✅ set default values
  useEffect(() => {
    if (project) {
      reset({
        ...project,
        technologies: project?.technologies || [],
        features:
          project?.features?.map((f: string) => ({ value: f })) || [],
        images:
          project?.images?.map(() => ({ file: undefined })) || [
            { file: undefined },
          ],
      });
    }
  }, [project, reset]);

  // ✅ thumbnail preview
  useEffect(() => {
    if (thumbnail?.[0] instanceof File) {
      const url = URL.createObjectURL(thumbnail[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [thumbnail]);

  const isProcessing = isUploading || isLoading;

  // ✅ submit
  const onSubmit = async (data: FormValues) => {
    try {
      setIsUploading(true);

      // thumbnail upload
      let thumbnailUrl = project?.thumbnail;
      if (data.thumbnail?.[0] instanceof File) {
        thumbnailUrl = await uploadSingleImage(data.thumbnail[0]);
      }

      // gallery upload
      let imageUrls = project?.images || [];
      const files = data.images
        .map((img) => img.file?.[0])
        .filter(Boolean);

      if (files.length > 0) {
        imageUrls = await uploadMultipleImages(files);
      }

      const payload = {
        ...data,
        thumbnail: thumbnailUrl,
        images: imageUrls,
        features: data.features.map((f) => f.value),
      };

      await update(project._id, payload);
      router.push("/admin/project");
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-[#1e293b] border border-gray-700 rounded-2xl shadow-xl p-6 md:p-10 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          ✏️ Update Project
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-400 text-lg"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

        {/* Basic Info */}
        <Section title="Basic Information ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FormField label="Project Title *">
              <input {...register("title")} className={inputClass} />
            </FormField>

            <FormField label="Slug *">
              <input {...register("slug")} className={inputClass} />
            </FormField>

            <FormField label="Category *">
              <select {...register("category")} className={inputClass}>
                <option value="">Select Category</option>
                {categoryOptions.map((item) => (
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

        {/* Links */}
        <Section title="Project Links">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField label="Live URL *">
              <input {...register("liveLink")} className={inputClass} />
            </FormField>

            <FormField label="GitHub Client">
              <input {...register("githubClient")} className={inputClass} />
            </FormField>

            <FormField label="GitHub Server">
              <input {...register("githubServer")} className={inputClass} />
            </FormField>
          </div>
        </Section>

        {/* Thumbnail */}
        <Section title="Thumbnail">
          <input type="file" {...register("thumbnail")} className={inputClass} />

          {(preview || project?.thumbnail) && (
            <img
              src={preview || project?.thumbnail}
              className="h-40 rounded-xl mt-3 object-cover"
            />
          )}
        </Section>

        {/* Gallery */}
        <Section title="Gallery Images">
          {fields.map((item, index) => (
            <div key={item.id} className="flex gap-3 items-center mb-3">

              <input
                type="file"
                {...register(`images.${index}.file`)}
                className={inputClass}
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 px-3 py-2 rounded"
              >
                Remove
              </button>

              {/* preview */}
              {images?.[index]?.file?.[0] ? (
                <img
                  src={URL.createObjectURL(images[index].file[0])}
                  className="h-16 w-16 object-cover"
                />
              ) : (
                project?.images?.[index] && (
                  <img
                    src={project.images[index]}
                    className="h-16 w-16 object-cover"
                  />
                )
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ file: undefined })}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            + Add Image
          </button>
        </Section>

        {/* Technologies */}
        <Section title="Technologies">
          <TechSelect
            value={watch("technologies")}
            onChange={(val) => setValue("technologies", val)}
          />
        </Section>

        {/* Features */}
        <Section title="Features">
          {featureFields.map((item, index) => (
            <div key={item.id} className="flex gap-3 mb-2">
              <input
                {...register(`features.${index}.value`)}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="bg-red-500 px-3 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addFeature({ value: "" })}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            + Add Feature
          </button>
        </Section>

        {/* Status */}
        <Section title="Others">
          <select {...register("status")} className={inputClass}>
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
            <option value="planned">Planned</option>
          </select>

          <input
            type="number"
            {...register("priority")}
            className={`${inputClass} mt-3`}
          />
        </Section>

        {/* Submit */}
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-green-600 py-3 rounded-xl"
        >
          {isProcessing ? "Updating..." : "Update Project"}
        </button>

      </form>
    </div>
  );
};

export default UpdateProjectForm;

const inputClass =
  "w-full bg-[#0f172a] border border-gray-600 rounded-xl px-4 py-3 text-white";