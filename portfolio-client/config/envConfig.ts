const envConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_API as string,
  imageUploadToken: process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN as string,

  cloudinaryCloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,

  cloudinaryUploadPreset: process.env
    .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string,
};

export default envConfig;
