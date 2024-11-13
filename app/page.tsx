"use client";
import { NavItem } from "@/components/NavItem";
import { Section } from "@/components/Section";
import {
  BookOpen,
  Code,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Phone,
} from "lucide-react";
import NextLink from "next/link";
import { useState } from "react";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-80 bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-purple-900/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <NextLink
              className="flex justify-start items-center sm:p-4"
              href="/"
              //   onMouseEnter={() => setIsHovered(true)}
              //   onMouseLeave={() => setIsHovered(false)}
            >
              <div className="font-black text-lg sm:text-2xl flex gap-1">
                <p className="dark:text-gray-500 text-gray-400">{"{"}</p>
                {"BM³"}
                {/* <p className={`${isHovered ? "typewriter" : ""}`}> */}
                {/* {isHovered ? " Monjur Morshed" : "³"} */}
                {/* </p> */}
                <p className="dark:text-gray-500 text-gray-400">{"}"}</p>
              </div>
            </NextLink>
          </div>
          <div className="flex gap-4">
            <NavItem href="#" icon={BookOpen}>
              Blog
            </NavItem>
            <NavItem href="#" icon={Code}>
              Projects
            </NavItem>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <Section>
          <div className="min-h-[75vh] flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BM Monjur Morshed
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                A passionate software engineer focused on building scalable
                backend solutions.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/bmqube"
                  className="hover:text-purple-400 transition-colors"
                >
                  <GithubIcon size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/bmqube"
                  className="hover:text-purple-400 transition-colors"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a
                  href="https://facebook.com/bmqube"
                  className="hover:text-purple-400 transition-colors"
                >
                  <FacebookIcon size={24} />
                </a>
                <a
                  href="mailto:bmqube1@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:+8801746414730"
                  className="hover:text-purple-400 transition-colors"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:block w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse" />
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience">
          <div className="space-y-8">
            {[
              {
                title: "Software Engineer (Backend)",
                company: "FringeCore_",
                duration: "February 2024 - Present",
              },
              {
                title: "Jr. Software Engineer (Backend)",
                company: "ShodaiMama",
                duration: "June 2021 - January 2022",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-purple-400 mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.duration}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education">
          <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold mb-2">
              BS in Computer Science and Engineering
            </h3>
            <p className="text-purple-400 mb-2">North South University</p>
            <p className="text-gray-400">Class of 2024 • CGPA: 3.48</p>
          </div>
        </Section>

        {/* Achievements Section */}
        <Section title="Achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "ICPC Asia West Continent Finalist 2023",
              "2nd Runner Up, CoU IUPC 2023",
              "2nd Runner Up, NSU Intra University Programming Contest 2023",
              "Honorable Mention in ICPC Regional Dhaka Site 2021 and 2022",
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Portfolio;
