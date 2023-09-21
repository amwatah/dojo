import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  return (
    <section id="experience" className="mx-auto max-w-containerxs px-4 py-10 lgl:py-24">
      <SectionTitle title="Experience" titleNo="02" />
      <div className="mt-10 flex w-full flex-col gap-16 md:flex-row">
        <ul className="flex flex-col md:w-32">
          <li
            onClick={() => setActiveExperience(0)}
            className={`${
              activeExperience === 0 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent py-3 px-8  text-sm font-medium duration-300 hover:bg-[#112240]`}
          >
            Surestep
          </li>
          <li
            onClick={() => setActiveExperience(1)}
            className={`${
              activeExperience === 1 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent py-3 px-8  text-sm font-medium duration-300 hover:bg-[#112240]`}
          >
            CloudPesa
          </li>
          <li
            onClick={() => setActiveExperience(2)}
            className={`${
              activeExperience === 2 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent py-3 px-8  text-sm font-medium duration-300 hover:bg-[#112240]`}
          >
            Teksade
          </li>
          <li
            onClick={() => setActiveExperience(3)}
            className={`${
              activeExperience === 3 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent py-3 px-8  text-sm font-medium duration-300 hover:bg-[#112240]`}
          >
            Navix
          </li>
        </ul>
        {activeExperience === 0 && (
          <ExperienceCard
            at="Surestep Innovation Center"
            orginizationUrl="https://surestep.co.ke/"
            from="January 2023 "
            to=" Present"
            role="Software Developer"
            accommplishments={[
              "Responsible for developing and maintaining and Web applications  using Next Js",
              "Intergrated Web applications to payment gateways like M-pesa and bank APIs",
              "Worked on  developing web services in Microsoft Dyanmics Business Central applications on OData V4 and SOAP protocols",
              "Worked  on CloudPesa , a subsidiary Mobile Banking  solution, used  in  ERP systems majorly by Credit Unions in Kenya ",
            ]}
          />
        )}
        {activeExperience === 1 && (
          <ExperienceCard
            at="CloudPesa"
            orginizationUrl="https://surestep.co.ke/"
            from="January 2023"
            to=" Present"
            role="Software Developer"
            accommplishments={[
              "Worked on intergration on mobile banking applictions to web portals",
              "Developed  web portals for Credit Unions (SACCOs) like Bulsho Sacco , and KLB",
            ]}
          />
        )}
        {activeExperience === 2 && (
          <ExperienceCard
            at="Teksade"
            orginizationUrl="https://www.teksade.com/"
            from="January 2023 "
            to=" Present"
            role="Software Developer"
            accommplishments={[
              "Contributed to the developement of a  tech community discovery project",
              "Worked majorly on the back-end  with tRPC and Prisma to develop  the API endpoints",
            ]}
          />
        )}
        {activeExperience === 3 && (
          <ExperienceCard
            at="Navix Systems"
            orginizationUrl="https://www.linkedin.com/in/paul-okemwa-4b544b186/?originalSubdomain=ke"
            from="Dec 2020"
            to="2022"
            role="Android developer"
            accommplishments={[
              "Worked with other developers at the small startup to develop and mantain Zofty, android application for finding and orderding manpower services ",
              "Worked on intergrating the app with Safaricom's Daraja API for mobile  payments",
            ]}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;
