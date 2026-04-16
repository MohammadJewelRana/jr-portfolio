export const handleImageUpdate = async ({
  dataImages,
  uploadMultipleImages,
}: {
  dataImages: { file?: FileList; url?: string }[];
  uploadMultipleImages: (files: File[]) => Promise<string[]>;
}): Promise<string[]> => {
  // ✅ 1. old images (still present)
  const oldImages = dataImages
    .filter((img) => img.url)
    .map((img) => img.url as string);

  // ✅ 2. new files
  const newFiles = dataImages
    .map((img) => img.file?.[0])
    .filter((file): file is File => file instanceof File);

  // ✅ 3. upload new images only
  let uploadedUrls: string[] = [];
  if (newFiles.length > 0) {
    uploadedUrls = await uploadMultipleImages(newFiles);
  }

  // ✅ 4. final merge
  return [...oldImages, ...uploadedUrls];
};