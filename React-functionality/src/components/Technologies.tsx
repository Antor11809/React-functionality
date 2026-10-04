import { use, useState } from "react";
import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import SelectedStack from "./SelectedStack";


type TechnologiesProps = {
  techPromise: Promise<Technology[]>;
};

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

const handleAddToStack = (technology: Technology) => {
  setSelectedTech((prev) => {
    const alreadySelected = prev.some(
      (tech) => tech.id === technology.id
    );

    if (alreadySelected) {
      
      return prev;
    }

    return [...prev, technology];
  });
};
const handleRemoveFromStack = (id: number) => {
  setSelectedTech((prev) => prev.filter((tech) => tech.id !== id));

};

const handleRemoveAll = () => {
  setSelectedTech([]);
};
return (
  <div className="grid grid-cols-4 gap-6">

    <div className="col-span-3 grid grid-cols-3 gap-4 container mx-5">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          handleAddToStack={handleAddToStack}
          isSelected={selectedTech.some(
            (tech) => tech.id === technology.id
          )}
        />
      ))}
    </div>

    <div className="col-span-1">
      <SelectedStack
        selectedTech={selectedTech}
        handleRemoveFromStack={handleRemoveFromStack}
        handleRemoveAll={handleRemoveAll}
      />
    </div>

  </div>
);
}
export default Technologies;