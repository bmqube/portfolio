import { BookOpen } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: {
    first: "BM Monjur",
    last: "Morshed",
    full: "BM Monjur Morshed",
  },

  description: "Portfolio of BM Monjur Morshed",
  about: "I am a passionate software engineer with a strong foundation in data structures and algorithms. I love to solve problems and learn new technologies. I am a quick learner and a team player.",
  designation: "Software Engineer (Backend)",
  company: {
    name: "FringeCore_",
    url: "https://fringecore.sh",
  },
  experiences: [
    {
      company: "FringeCore_",
      location: "Gulshan 2, Dhaka",
      role: "Software Engineer",
      duration: "February 2024 - Present",
      image: "/fringecore.jpg",
      description: "Make beautiful websites regardless of your design experience.Make beautiful websites regardless of your design experience.Make beautiful websites regardless of your design experience.",
      tags: ["TypeScript", "tRPC", "PostgreSQL", "Docker"],
    },
    {
      company: "ShodaiMama",
      location: "Banasree, Dhaka",
      role: "Jr. Software Engineer",
      duration: "June 2021 - January 2022",
      image: "/shodaimama.png",
      description: "Make beautiful websites regardless of your design experience.",
      tags: ["Node.js", "MongoDB"],
    },
  ],
  achievements: [
    "ICPC Asia West Continent Finalist 2023",
    "2nd Runner Up, CoU IUPC 2023",
    "2nd Runner Up, NSU Intra University Programming Contest 2023",
    "Honorable Mention in ICPC Regional Dhaka Site 2021 and 2022",
    "Specialist in Codeforces (Solved 350+ problems)",
  ],
  navItems: [
    {
      icon: BookOpen,
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/bmqube",
    linkedin: "https://www.linkedin.com/in/bmqube/",
    facebook: "https://www.facebook.com/bmqube",
    mail: "mailto:bmqube1@gmail.com",
    resume: "/",
  },
};
