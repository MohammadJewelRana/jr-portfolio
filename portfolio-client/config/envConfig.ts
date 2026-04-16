const envConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL as string,
  imageUploadToken: process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN as string,
};

export default envConfig;