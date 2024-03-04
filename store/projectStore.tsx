import { create } from "zustand";

interface ProjectStore {
  projects: {
    image: string;
    name: string;
    description: string;
    tags: string[];
    links: {
      github: string;
      live: string;
    };
  }[];
}

export const useProjectStore = create<ProjectStore>()((set) => ({
  projects: [
    {
      image: "https://github.com/burakkduran/kanban-app/raw/main/public/screenshots/screenshot1.png",
      name: "Kanban App",
      description:
        "Fully accessible Kanban Todo application with drag & drop actions.",
      tags: ["Next.js", "ReactAria", "TailwindCSS"],
      links: {
        github: "https://github.com/burakkduran/kanban-app",
        live: "https://kanban-trello.vercel.app/",
      },
    },
    {
      image: "https://github.com/burakkduran/quiz-app/raw/main/src/images/Screenshot.png",
      name: "Quiz App",
      description: "Quiz application with trivia API.",
      tags: ["React", "TailwindCSS", "Trivia API"],
      links: {
        github: "https://github.com/burakkduran/quiz-app",
        live: "https://quiz-app-burakkduran.vercel.app/",
      },
    },
  ],
}));
