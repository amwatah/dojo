import { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdCall, MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClick(e: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className="sticky -top-1 z-50 h-20 w-full bg-bodyColor px-4 shadow-navbarShadow lg:h-[12vh]">
      <div className="mx-auto flex h-full max-w-container items-center justify-between py-1 font-titleFont ">
        {/* ============ Logo Start here ============ */}
        <Link href="https://github.com/amwatah" target="_blank">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
            <img className="w-14" src="/logo.png" alt="logo" />
          </motion.div>
        </Link>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13px]">
            <Link
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>
                Home
              </motion.li>
            </Link>

            <Link
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-textGreen">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">02.</span>
                Experience
              </motion.li>
            </Link>
            <Link
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
              href="#project"
              onClick={handleScroll}
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                <span className="text-textGreen">03.</span>
                Projects
              </motion.li>
            </Link>
            <Link
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.4 }}>
                <span className="text-textGreen">04.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="https://drive.google.com/file/d/1V2SM16aphpeqwavcgfVXPCacaiYXPBO6/view?usp=sharing" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-md border border-textGreen px-4 py-2 text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textGreen mdl:hidden"
        >
          <span className="inline-flex h-[2px] w-full transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute top-0 right-0 flex h-screen w-full flex-col items-end bg-black bg-opacity-50 mdl:hidden"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="scrollbarHide relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-[#112240] px-4 py-10"
            >
              <MdOutlineClose onClick={() => setShow(false)} className="absolute top-4 right-4 cursor-pointer text-3xl text-textGreen hover:text-red-500" />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col gap-7 text-base">
                  <Link
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}>
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}>
                      <span className="text-textGreen">01.</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}>
                      <span className="text-textGreen">02.</span>
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}>
                      <span className="text-textGreen">03.</span>
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}>
                      <span className="text-textGreen">04.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/noor_resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="h-10 w-32 rounded-md border border-textGreen text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/amwatah"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:border-textGreen hover:text-textGreen">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85, ease: "easeIn" }}
                    href="https://twitter.com/_Amwatah_"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:border-textGreen hover:text-textGreen">
                      <FaXTwitter />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:border-textGreen hover:text-textGreen">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95, ease: "easeIn" }}
                    href="mailto:obuyaamwatah@gmail.com"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:border-textGreen hover:text-textGreen">
                      <SiGmail />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="tel:+254743886199"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:border-textGreen hover:text-textGreen">
                      <MdCall />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="mt-4 w-72 text-center text-sm tracking-widest text-textGreen"
                href="mailto:noor.jsdivs@gmail.com"
              >
                <p>obuyaamwatah@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
