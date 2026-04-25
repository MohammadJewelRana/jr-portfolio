const envConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_API as string,
  imageUploadToken: process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN as string,
};

export default envConfig;
