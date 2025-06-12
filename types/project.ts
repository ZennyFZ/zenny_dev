export interface Project {
  name: string;
  length?: string;
  type: "personal" | "school" | "freelance" | "work";
  position: string[];
  tech: string[];
  description: string;
  link?: string;
  teamsize?: number;
}
