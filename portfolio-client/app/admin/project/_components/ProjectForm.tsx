"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  title: string;
  slug: string;
  category: string;
  description: string;

  thumbnail: FileList;
  images: { file: FileList }[];

  stackType: string;
  technologies: string;

  features: { value: string }[];
};

const ProjectForm = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      images: [{ file: undefined }],
      features: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const { fields: featureFields, append: addFeature, remove: removeFeature } =
    useFieldArray({ control, name: "features" });

  const thumbnail = watch("thumbnail");
  const images = watch("images");

  const onSubmit = (data: FormValues) => {
    console.log(data);
    onClose();
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
        <Section title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FormField label="Project Title">
              <input {...register("title")} className={inputClass} />
            </FormField>

            <FormField label="Slug">
              <input {...register("slug")} className={inputClass} />
            </FormField>

            <FormField label="Category">
              <input {...register("category")} className={inputClass} />
            </FormField>

            <FormField label="Stack Type">
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
            <FormField label="Description">
              <textarea
                {...register("description")}
                className={`${inputClass} h-32`}
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
              onClick={() => append({ file: undefined })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              + Add Image
            </button>
          </div>
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

        {/* 🔹 Submit */}
        <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold transition">
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;


/// 🔹 Reusable UI

const Section = ({ title, children }: any) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2 mb-5">
      {title}
    </h2>
    {children}
  </div>
);

const FormField = ({ label, children }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-300">
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  "w-full bg-[#0f172a] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition";