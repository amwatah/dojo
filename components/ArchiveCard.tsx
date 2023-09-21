import { url } from "inspector";
import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

interface ArchiveCardProps {
  title: string;
  description: string;
  listItems: string[];
  link: string;
  github?: string;
  type: "web" | "mobile" | "article";
}

const ArchiveCard = ({ title, description, listItems, github, link, type }: ArchiveCardProps) => {
  return (
    <Link href={link} target="_blank">
      <div className="group flex h-80 w-full flex-col justify-center gap-6 rounded-lg bg-[#112240] p-7 transition-transform duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-between">
          {type === "web" && (
            <Link href={github ?? "https://github.com/amwatah"} target="_blank" className="text-2xl hover:text-textGreen">
              <TbBrandGithub />
            </Link>
          )}
          {type === "article" && (
            <Link href={link} target="_blank" className="text-2xl hover:text-textGreen">
              <AiOutlineRead />
            </Link>
          )}
          {type === "mobile" && (
            <Link href={link ?? "https://github.com/amwatah"} target="_blank" className="text-2xl hover:text-textGreen">
              <HiDevicePhoneMobile />
            </Link>
          )}
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" href={link} />
        </div>
        <div className=" grow">
          <h2 className="font-titleFont text-xl font-semibold tracking-wide group-hover:text-textGreen">{title}</h2>
          <p className="mt-3 text-sm">{description}</p>
        </div>
        <ul className="flex flex-wrap items-center justify-between gap-2 text-xs text-textDark mdl:text-sm">
          {listItems?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ArchiveCard;
