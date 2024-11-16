"use client";
import { Section } from "@/components/Section";
import {
  FacebookIcon,
  GithubIcon,
  GraduationCap,
  LinkedinIcon,
  Mail,
  Phone,
  SquareCode,
} from "lucide-react";

const Portfolio = () => {
  return (
    <Section>
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-3xl animate-pulse" />

      <div className="relative flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {/* <NameAnimation /> */}
              BM Monjur Morshed
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            A passionate software engineer focused on building scalable backend
            solutions.
          </p>
          <div className="flex text-xl text-gray-400 gap-1 mb-4">
            <div className="flex items-center gap-1">
              <SquareCode />
              <span className="text-nowrap">Software Engineer @</span>
            </div>
            <span className="text-blue-400">
              <a
                target="_blank"
                href="https://fringecore.sh"
                className="hover:underline"
                rel="noopener noreferrer"
              >
                FringeCore_
              </a>
            </span>
          </div>

          <div className="flex text-xl text-gray-400 gap-1 mb-8">
            <div className="flex items-center gap-1">
              <GraduationCap />
              <span className="flex gap-1">
                BS in
                <span className="lg:block hidden">
                  Computer Science & Engineering
                </span>
                <span className="lg:hidden block">CSE</span>
                from
              </span>
            </div>
            <span className="text-blue-400">
              <a
                target="_blank"
                href="https://northsouth.edu"
                className="hover:underline"
                rel="noopener noreferrer"
              >
                <span className="lg:block hidden">North South University</span>
                <span className="lg:hidden block">NSU</span>
              </a>
            </span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/bmqube"
              className="hover:text-blue-400 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bmqube"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://facebook.com/bmqube"
              className="hover:text-blue-400 transition-colors"
            >
              <FacebookIcon size={24} />
            </a>
            <a
              href="mailto:bmqube1@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+8801746414730"
              className="hover:text-blue-400 transition-colors"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        {/* <div className="hidden md:block w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 opacity-20 blur-3xl animate-pulse" /> */}
      </div>
    </Section>
  );
};

export default Portfolio;
