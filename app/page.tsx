"use client";
import { GithubIcon, TrophyIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";
import { LinkIcon } from "@nextui-org/link";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-4xl">
        <Card>
          <CardBody className="dark:bg-zinc-950">
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
                    <span className="font-black">
                      {siteConfig.company.name}
                    </span>
                  </a>
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                  {siteConfig.about}
                </p>
                <div className="flex mt-3 gap-3">
                  <a
                    href={siteConfig.links.github}
                    className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    target="_blank"
                  >
                    <GithubIcon />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    target="_blank"
                  >
                    <LinkIcon />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.links.mail}
                    className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <LinkIcon />
                    <span>Email</span>
                  </a>
                  <a
                    href={siteConfig.links.mail}
                    className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    target="_blank"
                  >
                    <LinkIcon />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* <div className="text-with-lines opacity-50 my-10">
          <p className="font-black">Experiences</p>
        </div>

        <Card className="mb-4">
          <CardBody>
            <div className="flex gap-5 items-center">
              <img
                alt="FringeCore_"
                className="rounded-lg"
                height={150}
                src="/fringecore.jpg"
                width={150}
              />
              <div className="flex flex-col gap-2">
                <p className="text-md text-2xl">FringeCore_</p>
                <p className="text-small font-md">
                  Software Engineer{" "}
                  <span className="text-default-400">
                    (February 2024 - Present)
                  </span>
                </p>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
                <Link href="https://github.com/nextui-org/nextui">
                  Visit source code on GitHub.
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="">
          <CardBody>
            <div className="flex gap-5 items-center">
              <img
                alt="ShodaiMama"
                className="rounded-lg"
                height={150}
                src="/shodaimama.png"
                width={150}
              />
              <div className="flex flex-col gap-2">
                <p className="text-md text-2xl">ShodaiMama</p>
                <p className="text-small font-md">
                  Jr. Software Engineer{" "}
                  <span className="text-default-400">
                    (June 2021 - January 2022)
                  </span>
                </p>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
                <Link href="https://github.com/nextui-org/nextui">
                  Visit source code on GitHub.
                </Link>
              </div>
            </div>
          </CardBody>
        </Card> */}

        <div className="text-with-lines opacity-50 my-10">
          <p className="font-black">Achievements</p>
        </div>

        <Card>
          <CardBody className="p-6 flex flex-col gap-5 dark:bg-zinc-950">
            {siteConfig.achievements.map((achievement, index) => (
              <p className="border-b-1 border-b-default-300 pb-3" key={index}>
                {achievement}
              </p>
            ))}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
