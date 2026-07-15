
import envConfig from "@/config/envConfig";

export const uploadSingleImage = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    envConfig.cloudinaryUploadPreset
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${envConfig.cloudinaryCloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error(data);
    throw new Error(data.error?.message || "Image upload failed");
  }

  return data.secure_url;
};

export const uploadMultipleImages = async (files: File[]) => {
  return Promise.all(files.map(uploadSingleImage));
};
















// import envConfig from "@/config/envConfig";

// export const uploadSingleImage = async (file: File) => {
//   const formData = new FormData();
//   formData.append("image", file);

//   console.log(file);
//   console.log(file instanceof File);
//   console.log(file.name);
//   console.log(file.size);
//   console.log(file.type);
//   const res = await fetch(
//     `https://api.imgbb.com/1/upload?key=0fb99f7e86aaa7b2c91dd2abdaf1c603`,
//     // `https://api.imgbb.com/1/upload?key=${envConfig.imageUploadToken}`,
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: formData,
//     },
//   );

//   const data = await res.json();
//   console.log(res);
//   console.log(data);

//   return data?.data?.url;
// };

// export const uploadMultipleImages = async (files: File[]) => {
//   const urls = await Promise.all(files.map((file) => uploadSingleImage(file)));
//   return urls;
// };
