import { motion } from "framer-motion";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";
interface ExperienceCardProps {
  role: string;
  at: string;
  from: string;
  to: string;
  accommplishments: string[];
  orginizationUrl?: string;
}
export default function ExperienceCard({ role, at, orginizationUrl, from, to, accommplishments }: ExperienceCardProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex flex-col gap-1 text-xl font-medium font-titleFont sm:whitespace-nowrap">
        {role}
        <br />
        <Link href={orginizationUrl ?? "/"} target="_blank" className="tracking-wide text-textGreen sm:whitespace-nowrap">
          @{at}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        {from} - {to}
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        {accommplishments.map((accommplishment, index) => (
          <li key={index} className="flex gap-2 text-base text-textDark">
            <span className="mt-1 text-textGreen">
              <TiArrowForward />
            </span>
            {accommplishment}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
