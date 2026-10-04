import type { Technology } from "../types";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const iconMap = {
  React: FaReact,
  Vue: FaVuejs,
  Angular: FaAngular,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  TypeScript: SiTypescript,
  Python: FaPython,
  "Tailwind CSS": SiTailwindcss,
  Git: FaGitAlt,
};

type TechnologyCardProps = {
  technology: Technology;
  handleAddToStack: (technology: Technology) => void;
    isSelected: boolean;
};
const TechnologyCard = ({
  technology,
  handleAddToStack,
  isSelected,
}: TechnologyCardProps) => {
    const Icon = iconMap[technology.name as keyof typeof iconMap];
  return (
    <div className="border border-purple-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between mb-4">
      {Icon && <Icon className="text-4xl" />}
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">
          {technology.badge}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-2">
        {technology.name}
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        {technology.description}
      </p>
      <div className="flex items-center justify-between text-sm mb-4">
        <span className="bg-gray-100 px-3 py-1 rounded-md">
          {technology.category}
        </span>

        <span className="font-medium">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
       type="button"
        onClick={() => handleAddToStack(technology)}
         disabled={isSelected}
        className="px-4 py-3 bg-cyan-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
      >
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;