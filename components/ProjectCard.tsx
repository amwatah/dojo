import { type ReactNode } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

interface ProjectCardProps {
  projectType: string;
  title: string;
  description: ReactNode;
  technonogies: string[];
  github?: string;
  url?: string;
  imageRelativePath: string;
}

export default function ProjectCard({ projectType, title, description, technonogies, github, url, imageRelativePath }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <a className="group relative h-auto w-full xl:w-1/2" href={url ?? github} target="_blank">
        <div>
          <img className="h-full w-full rounded object-contain" src={imageRelativePath} alt="amazonImg" />
        </div>
      </a>
      <div className="z-10 flex w-full flex-col items-end gap-6 lgl:justify-between xl:-ml-16 xl:w-1/2">
        <div className="text-right ">
          <div className="font-titleFont text-sm tracking-wide text-textGreen">{projectType}</div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base">{description}</div>
        <ul className="flex justify-between gap-2 font-titleFont text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
          {technonogies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4 text-2xl">
          <a className="duration-300 hover:text-textGreen" href={github} target="_blank">
            <TbBrandGithub />
          </a>
          {url && (
            <a className="duration-300 hover:text-textGreen" href={url} target="_blank">
              <RxOpenInNewWindow />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
