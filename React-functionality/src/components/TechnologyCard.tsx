import type { Technology } from "../types";

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
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between mb-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />

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