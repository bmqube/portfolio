import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";
import { useRef } from "react";

type ExperienceCardProps = {
  index: number;
  company: string;
  role: string;
  duration: string;
  image: string;
  description?: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (ref.current) {
      ref.current.classList.remove("hidden");
    }
  }, 1000 * props.index);

  return (
    <Card ref={ref} className="mb-4 hidden fade-in-item">
      <CardBody>
        <div className="flex gap-5 items-center">
          <img
            alt={props.company}
            className="rounded-lg w-40"
            src={props.image}
          />
          <div className="flex flex-col gap-2">
            <p className="text-bold text-2xl">{props.company}</p>
            <p className="text-small font-md">
              {props.role}{" "}
              <span className="text-default-400">{`(${props.duration})`}</span>
            </p>
            <p className="text-wrap">{props.description}</p>
            <Link href="https://github.com/nextui-org/nextui">
              Visit source code on GitHub.
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
