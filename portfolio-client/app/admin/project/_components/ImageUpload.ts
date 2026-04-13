export const uploadSingleImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Token}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.data.url;
};

export const uploadMultipleImages = async (files: File[]) => {
  const urls = await Promise.all(files.map((file) => uploadSingleImage(file)));
  return urls;
};