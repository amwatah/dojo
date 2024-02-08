import SectionTitle from "./SectionTitle";
import Link from "next/link";
import TechStackItem from "./TechStackItem";

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32">
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col gap-16 lgl:flex-row">
        <div className="flex flex-col w-full gap-4 text-base font-medium text-textDark lgl:w-2/3">
          <p>
            Hello! My name is Amwatah Obuya .I&apos;m an ardent tech enthusiast from Nairobi Kenya, driven by an insatiable curiosity for all things digital.
            Technology, to me, is like a canvas of endless creativity waiting to be explored. I thrive on the challenges tech presents and am committed to
            pushing boundaries and crafting a future where innovation knows no bounds.
          </p>
          <p>
            I hold a Bachelor&apos;s degree in Computer Technology from{" "}
            <Link href="https://mmu.ac.ke/" className=" text-textGreen">
              {" "}
              Multimedia University of Kenya
            </Link>{" "}
            .
          </p>
          <p>I major in Web and Mobile app development with proficiency in the following technologies and tools.</p>
          <p>
            <span className="font-bold ">Programming Languages: </span> I have a firm grasp of <span className=" text-textGreen">Typescript</span> and{" "}
            <span className=" text-textGreen">Javascript</span> . Decent with <span className=" text-textGreen">Dart</span>,{" "}
            <span className=" text-textGreen">Java</span> and <span className=" text-textGreen">Kotlin</span>.
          </p>
          <p>
            <span className="font-bold ">Front-end frameworks: </span> I majorly work with <span className=" text-textGreen">Next Js</span> ,but also
            comfortable with <span className=" text-textGreen">Vue</span> and <span className=" text-textGreen">Sveltekit</span>.
          </p>
          <p>
            <span className="font-bold ">Backend-end frameworks: I have used </span> <span className=" text-textGreen">Express </span>
            <span className=" text-textGreen">, Nest </span> and <span className=" text-textGreen"> Koa</span>.
          </p>
          <p>
            <span className="font-bold ">Databases : </span> <span className=" text-textGreen">PostgreSQL </span>
            <span className=" text-textGreen">, MySQL</span> and <span className=" text-textGreen"> Mongodb</span>.
          </p>
          <section>
            <p>Also used...</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <TechStackItem label="GraphQL" />
              <TechStackItem label="React Native" />
              <TechStackItem label="Nest Js" />
              <TechStackItem label="Prisma" />
              <TechStackItem label="tRPC" />
              <TechStackItem label="Tailwind" />
              <TechStackItem label="MUI" />
              <TechStackItem label="Git & Github" />
              <TechStackItem label="Docker" />
              <TechStackItem label="Supabase" />
              <TechStackItem label="Jest" />
              <TechStackItem label="Strapi" />
              <TechStackItem label="React Query" />
            </div>
          </section>
        </div>
        <div className="relative w-full group h-80 lgl:w-1/3">
          <div className="absolute w-full rounded-lg -left-6 -top-6 h-80 ">
            <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0">
              <img className="object-cover h-full rounded-lg" src="/assets/images/me.jpg" alt="profileImg" />
              <div className="absolute top-0 left-0 hidden w-full duration-300 rounded-md h-80 bg-textGreen/20 group-hover:bg-transparent lgl:inline-block"></div>
            </div>
          </div>
          <div className="hidden w-full transition-transform duration-300 border-2 rounded-md h-80 border-textGreen group-hover:-translate-x-2 group-hover:-translate-y-2 lgl:inline-flex"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
