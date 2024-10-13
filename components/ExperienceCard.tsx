import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ExperienceCardProps = {
  index: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  image: string;
  description?: string;
  tags?: string[];
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (ref.current) {
      ref.current.classList.remove("hidden");
    }
  }, 1000 * props.index);

  return (
    <Card ref={ref} className="w-full hidden fade-in">
      <div>
        <CardBody className="hidden md:block">
          <div className="flex gap-5 items-center">
            <img
              alt={props.company}
              className="rounded-lg w-40 hidden sm:block"
              src={props.image}
            />
            <div className="flex flex-col gap-2 p-2 sm:p-0">
              <p className="text-bold text-2xl">{props.company}</p>
              <p className="text-small font-md">
                {props.role}{" "}
                <span className="text-default-400">{`(${props.duration})`}</span>
              </p>
              <p className="text-wrap">{props.description}</p>
              <div className="flex flex-wrap">
                {props.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-zinc-200 dark:bg-zinc-800 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
        <Divider />
      </div>
      <div className="md:hidden">
        <CardHeader className="flex gap-3">
          <img
            alt={props.company}
            width={120}
            className="rounded-lg"
            src={props.image}
          />
          <div className="flex flex-col">
            <p className="text-bold text-xl">{props.company}</p>
            <p className="text-default-500">{props.location}</p>
            <Divider className="my-2 w-full" />
            <p>
              {props.role}
              <span className="text-default-400 text-small">
                {" "}
                ({props.duration})
              </span>
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{props.description}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-wrap">
          {props.tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-zinc-200 dark:bg-zinc-800 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};

{
  // <div className="w-full md:w-1/2 rounded overflow-hidden shadow-lg">
  //   <img
  //     className="w-full rounded-lg max-w-36"
  //     src={props.image}
  //     alt={props.company}
  //   />
  //   <div className="px-6 py-4">
  //     <div className="font-bold text-xl mb-2">{props.company}</div>
  //     <p className="text-gray-700 text-base">
  //       {props.role} <span className="text-gray-400">({props.duration})</span>
  //     </p>
  //     <p className="text-gray-700 text-base">{props.description}</p>
  //     <div className="pt-4 pb-2">
  // <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  //   #photography
  // </span>
  // <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  //   #travel
  // </span>
  // <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  //   #winter
  // </span>
  //     </div>
  //   </div>
  // </div>;
  /* <Card ref={ref} className="mb-4 hidden fade-in-item">
      
    </Card> */
}
