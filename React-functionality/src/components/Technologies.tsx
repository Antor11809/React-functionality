import { use } from "react";
import type { Technology } from "../types";
  import TechnologyCard from "./TechnologyCard";
  import { useState } from "react";
  
type TechnologiesProps = {
  techPromise: Promise<Technology[]>;
};

const Technologies = ({techPromise}:TechnologiesProps) => {
    const technologies = use(techPromise);

    const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

const handleAddToStack = (technology: Technology) => {
  setSelectedTech((prev) => prev.some((tech) => tech.id === technology.id) ? prev : [...prev, technology]);
};

const handleRemoveFromStack = (id: number) => {
  setSelectedTech((prev) => prev.filter((tech) => tech.id !== id));
};

return (
  <>
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          handleAddToStack={handleAddToStack}
        />
      ))}
    </div>

    <div>
      {selectedTech.map((tech) => (
        <div key={tech.id}>{tech.name}
        <button onClick={() => handleRemoveFromStack(tech.id)}>X</button>
        
        </div>
        
      ))}
    </div>
  </>
);
};
export default Technologies;