"use client";
import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Card, CardBody } from "@nextui-org/card";
import { LinkIcon } from "@nextui-org/link";

export const AboutMe = () => {
  return (
    <Card className="fade-in">
      <CardBody className="bg-white dark:bg-black">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="w-full lg:w-1/3 p-6 flex justify-center">
            <img
              className="rounded-full border-teal-600 border-2 max-w-[250px] w-full"
              src="/dp.jpg"
              alt={`${siteConfig.name.full}'s profile picture`}
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-3 p-6">
            <h3 className="font-bold">Hello There, I'm</h3>
            <h1 className="text-4xl font-medium">
              {siteConfig.name.first}{" "}
              <span className="font-black ">{siteConfig.name.last}</span>
            </h1>
            <h3 className="text-2xl font-medium">
              {siteConfig.designation} @{" "}
              <a href={siteConfig.company.url} target="_blank">
                <span className="font-black">{siteConfig.company.name}</span>
              </a>
            </h3>
            <p className="dark:text-gray-400 text-gray-600">
              {siteConfig.about}
            </p>
            <div className="flex mt-3 gap-3">
              <a
                href={siteConfig.links.github}
                className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
                target="_blank"
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.links.linkedin}
                className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
                target="_blank"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.links.mail}
                className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
              >
                <MailIcon />
                <span>Email</span>
              </a>
              <a
                href={siteConfig.links.resume}
                className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
                target="_blank"
              >
                <DownloadIcon />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
