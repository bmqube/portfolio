"use client";
import { TrophyIcon } from "@/components/icons";
import { ListboxWrapper } from "@/components/ListboxWrapper";
import { siteConfig } from "@/config/site";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-4xl">
        <Card>
          <CardBody>
            <div className="flex flex-col justify-center items-center lg:flex-row">
              <div className="w-full lg:w-1/3 p-6 flex justify-center">
                <img
                  className="rounded-full border-primary-600 border-2 max-w-[250px] w-full"
                  src="/dp.jpg"
                  alt={`${siteConfig.name.full}'s profile picture`}
                />
              </div>
              <div className="w-full lg:w-2/3 flex flex-col gap-3 p-6">
                <h4>Hello There, </h4>
                <h1 className="text-4xl font-medium">
                  I'm {siteConfig.name.first}{" "}
                  <span className="font-black">{siteConfig.name.last}</span>
                </h1>
                <h3 className="text-2xl font-medium">
                  {siteConfig.designation} @{" "}
                  <a href={siteConfig.company.url} target="_blank">
                    <span className="font-black">
                      {siteConfig.company.name}
                    </span>
                  </a>
                </h3>
                <p className="text-lg">{siteConfig.about}</p>
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
          <CardBody className="p-6 flex flex-col gap-5">
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
