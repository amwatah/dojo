import { motion } from "framer-motion";
import Link from "next/link";
const Banner = () => {
  return (
    <section id="home" className="mx-auto flex max-w-contentContainer flex-col gap-4 py-10 mdl:py-24 mdl:px-10 lgl:gap-8 xl:px-4">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-titleFont text-lg tracking-wide text-textGreen"
      >
        Jambo 👋🏿, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col font-titleFont text-4xl font-semibold lgl:text-6xl"
      >
        Amwatah Obuya.
        <span className="mt-2 text-textDark lgl:mt-4">I am a Software Engineer.</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base font-medium text-textDark md:max-w-[650px]"
      >
        I am a Software Engineer with 3+ years of experience and fervent tech enthusiast. My expertise lies in translating{" "}
        <span className="group relative inline-flex h-7 cursor-pointer overflow-x-hidden text-textGreen">
          Real-world
          <span className="absolute left-0 bottom-1 h-[1px] w-full -translate-x-[110%] bg-textGreen transition-transform duration-500 group-hover:translate-x-0"></span>
        </span>{" "}
        problems into elegant{" "}
        <span className="group relative inline-flex h-7 cursor-pointer overflow-x-hidden text-textGreen">
          tech solutions
          <span className="absolute left-0 bottom-1 h-[1px] w-full -translate-x-[110%] bg-textGreen transition-transform duration-500 group-hover:translate-x-0"></span>
        </span>{" "}
        , and I&apos;m passionate about harnessing the power of technology to make a positive impact.
      </motion.p>
      <Link href="/resume.pdf" download target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="h-14 w-52 rounded-md border border-textGreen font-titleFont text-sm tracking-wide text-textGreen duration-300 hover:bg-hoverColor"
        >
          Download Resume
        </motion.button>
      </Link>
    </section>
  );
};

export default Banner;
