import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="project" className="mx-auto max-w-container py-24 lgl:px-20">
      <SectionTitle title="My projects" titleNo="03" />

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-28">
        <ProjectCard
          projectType="Web"
          title="Qwangu"
          description={
            <p>
              A full-stack Real-estate application for finding and discovering rental spaces within Nairobi .Owners list their properties and house hunters are
              able to view , book and reserve spots on the properties .
            </p>
          }
          imageRelativePath="/projects/qwangu.png"
          technonogies={["Next Js", "Typescript", "Postgres", "Prisma", "tRPC"]}
          url="https://qwangu.vercel.app/"
          github="https://github.com/amwatah/qwangu"
        />
        <ProjectCard
          projectType="Web"
          title="Safariswap"
          description={<p>A blockchain on-ramp and off-ramp application that intergrates with M-Pesa for payments</p>}
          imageRelativePath="/projects/safariswap.png"
          technonogies={["Next Js", "Typescript", "M-Pesa", "Web3Js", "Solidity"]}
          url="https://www.safariswap.io/"
          github="https://github.com/amwatah"
        />
        <ProjectCard
          projectType="Web"
          title="E-tree"
          description={<p>A reforestation management application for Earthlungs Reforestation ,an NGO based in Kenya and Tanzania .</p>}
          imageRelativePath="/projects/etree.png"
          technonogies={["Next Js", "Typescript", "Mantine", "React Query"]}
          url="https://www.etree.app/admin/planting-sessions"
          github="https://github.com/amwatah"
        />
        <ProjectCard
          projectType="Web"
          title="Teksade"
          description={
            <p>
              An open-source project that enables developers discover tech communities around them.Members can join , like and register to communites and share
              their developer profiles with other developers.
            </p>
          }
          imageRelativePath="/projects/teksade.png"
          technonogies={["Next", "Typescript", "Postgres", "tRPC"]}
          url="https://teksade.vercel.app"
          github="https://github.com/amwatah/teksade"
        />
        <ProjectCard
          projectType="Web"
          title="Elimu-hub"
          description={
            <p>
              An online learning platform that allows Students and tutors watch video courses .Tutors are able to create courses , get payments while students
              can buy courses and track their progress .Also features an analytics dashboard for tutors.
            </p>
          }
          imageRelativePath="/projects/elimu.png"
          technonogies={["Next Js", "Typescript", "Koa", "Postgres", "ShadcnUI"]}
          url="https://elimu-hub.vercel.app"
          github="https://github.com/amwatah/elimu-hub"
        />
      </div>
    </section>
  );
};

export default Projects;
