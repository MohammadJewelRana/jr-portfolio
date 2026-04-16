export type FormValues = {
  title: string;
  slug: string;
  category: string;
  stackType: string;
  description: string;
  thumbnail: FileList;
  images: {
    file?: FileList;
    url?: string;
  }[];
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

 export type FormValuesCreateProject = {
  title: string;
  slug: string;
  category: string;
  description: string;

  thumbnail: FileList;
  images: { file?: FileList }[];

  liveLink: string;
  githubClient: string;
  githubServer: string;

  metaTitle: string;
  metaDescription: string;
  status: string;

  client: string;
  duration: string;
  teamSize: number;

  featured: boolean;
  priority: number;

  stackType: string;
  technologies: string[];

  features: { value: string }[];
};