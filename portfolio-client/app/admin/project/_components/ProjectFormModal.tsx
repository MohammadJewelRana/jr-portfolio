"use client";

import { useState } from "react";
import { Project } from "../types";

export default function ProjectFormModal({ open, setOpen, onSubmit }) {
  const [form, setForm] = useState<any>({
    title: "",
    slug: "",
    category: "",
    description: "",
    technologies: [],
    features: [],
    challenges: [],
    solutions: [],
    status: "completed",
    featured: false,
  });

  const [thumbPreview, setThumbPreview] = useState("");
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [thumbFile, setThumbFile] = useState<File | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleArrayInput = (key: string, value: string) => {
    setForm({ ...form, [key]: value.split(",") });
  };

  const handleSubmit = async () => {
    let thumbnail = form.thumbnail;
    let images: string[] = [];

    // upload thumbnail
    if (thumbFile) {
      thumbnail = await uploadImage(thumbFile);
    }

    // upload multiple images
    if (imageFiles.length > 0) {
      images = await Promise.all(imageFiles.map(uploadImage));
    }

    await onSubmit({
      ...form,
      thumbnail,
      images,
    });

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-[#111C2D] p-6 rounded-xl w-full max-w-2xl space-y-4">

        <input placeholder="Title"
          onChange={(e)=>setForm({...form,title:e.target.value})}
          className="input" />

        <input placeholder="Slug"
          onChange={(e)=>setForm({...form,slug:e.target.value})}
          className="input" />

        <textarea placeholder="Description"
          onChange={(e)=>setForm({...form,description:e.target.value})}
          className="input" />

        {/* technologies */}
        <input placeholder="React, Node, Mongo"
          onChange={(e)=>handleArrayInput("technologies", e.target.value)}
          className="input" />

        {/* thumbnail */}
        <input type="file"
          onChange={(e)=>{
            const file = e.target.files?.[0];
            if(file){
              setThumbFile(file);
              setThumbPreview(URL.createObjectURL(file));
            }
          }}
        />

        {thumbPreview && <img src={thumbPreview} className="h-20 rounded" />}

        {/* multiple images */}
        <input type="file" multiple
          onChange={(e)=>{
            const files = Array.from(e.target.files || []);
            setImageFiles(files);
            setImagesPreview(files.map(f=>URL.createObjectURL(f)));
          }}
        />

        <div className="flex gap-2">
          {imagesPreview.map((img,i)=>(
            <img key={i} src={img} className="h-16 rounded"/>
          ))}
        </div>

        {/* status */}
        <select onChange={(e)=>setForm({...form,status:e.target.value})}>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
          <option value="planned">Planned</option>
        </select>

        <button onClick={handleSubmit}
          className="bg-indigo-600 px-4 py-2 rounded">
          Save Project
        </button>
      </div>
    </div>
  );
}