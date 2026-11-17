export interface Capability {
  number: string;
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  brandColor: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: readonly string[];
}

export interface StackGroup {
  category: string;
  skills: readonly string[];
}
