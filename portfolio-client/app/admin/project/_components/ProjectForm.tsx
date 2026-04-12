 "use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const IMG_API_KEY = 546546545516;
// const IMG_API_KEY = import.meta.env.VITE_Image_Upload_Token;

const ProjectForm = () => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      features: [{ value: "" }],
      challenges: [{ value: "" }],
      solutions: [{ value: "" }],
    },
  });

  // 🔹 Dynamic Fields
  const { fields: featureFields, append: addFeature, remove: removeFeature } =
    useFieldArray({ control, name: "features" });

  const { fields: challengeFields, append: addChallenge, remove: removeChallenge } =
    useFieldArray({ control, name: "challenges" });

  const { fields: solutionFields, append: addSolution, remove: removeSolution } =
    useFieldArray({ control, name: "solutions" });

  // 🔹 Upload Image using fetch
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.data.url;
  };

  // 🔹 Thumbnail Preview
  const handleThumbnail = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  // 🔹 Multiple Image Preview
  const handleImages = (e: any) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file: any) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previews]);
  };

  const removeImage = (index: number) => {
    const updated = [...imagePreviews];
    updated.splice(index, 1);
    setImagePreviews(updated);
  };

  // 🔥 Submit
  const onSubmit = async (data: any) => {
    try {
      // Upload Thumbnail
      const thumbnailFile = data.thumbnail[0];
      const thumbnailUrl = await uploadImage(thumbnailFile);

      // Upload Images
      let imageUrls: string[] = [];

      if (data.images?.length) {
        imageUrls = await Promise.all(
          Array.from(data.images).map((file: any) => uploadImage(file))
        );
      }

      const payload = {
        ...data,
        thumbnail: thumbnailUrl,
        images: imageUrls,
        features: data.features.map((f: any) => f.value),
        challenges: data.challenges.map((c: any) => c.value),
        solutions: data.solutions.map((s: any) => s.value),
      };

      console.log("FINAL DATA:", payload);

      alert("Project Added Successfully 🚀");

      reset();
      setImagePreviews([]);
      setThumbnailPreview(null);
    } catch (err) {
      console.error(err);
      alert("Upload Failed ❌");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-2xl  bg-black">
      <h2 className="text-2xl font-bold mb-6">Add Project</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <input {...register("title")} placeholder="Title" className="input" />

        {/* Slug */}
        <input {...register("slug")} placeholder="Slug" className="input" />

        {/* Category */}
        <input {...register("category")} placeholder="Category" className="input" />

        {/* Stack */}
        <select {...register("stackType")} className="input">
          <option value="">Select Stack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="mobile">Mobile</option>
        </select>

        {/* Description */}
        <textarea
          {...register("description")}
          placeholder="Description"
          className="input col-span-2"
        />

        {/* Technologies */}
        <input
          {...register("technologies")}
          placeholder="React, Node, MongoDB"
          className="input col-span-2"
        />

        {/* Thumbnail */}
        <div>
          <input type="file" {...register("thumbnail")} onChange={handleThumbnail} />
          {thumbnailPreview && (
            <img src={thumbnailPreview} className="h-24 mt-2 rounded" />
          )}
        </div>

        {/* Images */}
        <div>
          <input type="file" multiple {...register("images")} onChange={handleImages} />
          <div className="flex flex-wrap gap-2 mt-2">
            {imagePreviews.map((img, i) => (
              <div key={i} className="relative">
                <img src={img} className="h-20 w-20 rounded" />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-0 right-0 bg-red-500 text-white px-1"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <input {...register("liveLink")} placeholder="Live Link" className="input" />
        <input {...register("githubClient")} placeholder="GitHub Client" className="input" />
        <input {...register("githubServer")} placeholder="GitHub Server" className="input" />

        {/* Status */}
        <select {...register("status")} className="input">
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
          <option value="planned">Planned</option>
        </select>

        {/* Featured */}
        <select {...register("featured")} className="input">
          <option value="false">Not Featured</option>
          <option value="true">Featured</option>
        </select>

        {/* Features */}
        <div className="col-span-2">
          <h3 className="font-semibold">Features</h3>
          {featureFields.map((item, index) => (
            <div key={item.id} className="flex gap-2">
              <input {...register(`features.${index}.value`)} className="input flex-1" />
              <button type="button" onClick={() => removeFeature(index)}>❌</button>
            </div>
          ))}
          <button type="button" onClick={() => addFeature({ value: "" })}>
            + Add Feature
          </button>
        </div>

        {/* Submit */}
        <button className="col-span-2 bg-black text-white py-3 rounded-xl">
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;