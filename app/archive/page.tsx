"use client";
import { AboutMe } from "@/components/archive/AboutMe";
import { ExperienceCard } from "@/components/archive/ExperienceCard";
import { siteConfig } from "@/config/site";
import { Card, CardBody } from "@nextui-org/card";
import { useRef } from "react";

export default function Home() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (experienceRef.current) {
      experienceRef.current.classList.remove("hidden");
    }
  }, 1000);

  setTimeout(() => {
    if (achievementsRef.current) {
      achievementsRef.current.classList.remove("hidden");
    }
  }, 2000);

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-4xl">
        <AboutMe />

        <div className="hidden fade-in" ref={experienceRef}>
          <div className="text-with-lines opacity-50 my-10">
            <p className="font-black">Experiences</p>
          </div>

          <div className="flex flex-col justify-between gap-5">
            {siteConfig.experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                index={index + 1}
                company={experience.company}
                role={experience.role}
                duration={experience.duration}
                image={experience.image}
                location={experience.location}
                description={experience.description}
                tags={experience.tags}
              />
            ))}
          </div>
        </div>

        <div ref={achievementsRef} className="hidden fade-in">
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
      </div>
    </section>
  );
}
