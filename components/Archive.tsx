import { useState } from "react";
import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mx-auto max-w-contentContainer px-4 py-24">
      <div className="flex w-full flex-col items-center">
        <h2 className="font-titleFont text-3xl font-semibold">Other noteworthy projects</h2>
        <p className="font-titleFont text-sm text-textGreen">view some of my other craft</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lgl:px-10 xl:grid-cols-3">
        <ArchiveCard
          type="web"
          title="Portfolio project"
          description="My personal portfolio project where  I showcase my skills, built with Next JS , tailiwind and Framer motion."
          listItems={["Next js", "Tailwind CSS", "Framer motion"]}
          link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          type="article"
          title="Silicon Savannah -A candle in the wind"
          description="In this article I write about the worrying state of tech innovations in Kenya."
          listItems={["Startup-culture", "Kenyan tech"]}
          link="https://medium.com/@obuyaamwatah/silicon-savannah-a-candle-in-the-wind-b9d5a3588138"
        />
        <ArchiveCard
          type="mobile"
          title="Zofty"
          description="An adroid application  for ordering a service within kenya, from a nearby service provider, and enjoy professional service at affordable rates from the comfort of your home, office,hotel etc."
          listItems={["Daraja API", "Java"]}
          link="https://play.google.com/store/apps/details?id=com.zofty.user&hl=en&gl=US"
        />

        {showMore && <></>}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="h-12 w-36 rounded-md border border-textGreen text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="h-12 w-36 rounded-md border border-textGreen text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
