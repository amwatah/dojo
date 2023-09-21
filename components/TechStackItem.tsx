import { AiFillThunderbolt } from "react-icons/ai";

interface TechStackItemProps {
  label: string;
}

export default function TechStackItem({ label }: TechStackItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-textGreen">
        <AiFillThunderbolt />
      </span>
      {label}
    </li>
  );
}
