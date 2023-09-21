import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";
import Link from "next/link";
const LeftSide = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <Link href="https://github.com/amwatah" target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <TbBrandGithub />
          </span>
        </Link>
        <Link href="https://twitter.com/_Amwatah_" target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <FaXTwitter />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/amwatah-obuya-37049626b" target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <SlSocialLinkedin />
          </span>
        </Link>
        <Link href="mailto:obuyaamwatah@gmail.com" target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <SiGmail />
          </span>
        </Link>
        <Link href="tel:+254743886199">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <MdCall />
          </span>
        </Link>
      </div>
      <div className="h-32 w-[2px] bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
