import type { Technology } from "../types";

type TechnologyCardProps = {
  technology: Technology;
    handleAddToStack: (technology: Technology) => void;
};

const TechnologyCard = ({ technology, handleAddToStack, }: TechnologyCardProps) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={technology.icon} alt={technology.name} />

      <h2>{technology.name}</h2>

      <p>{technology.category}</p>

      <p>{technology.rating}</p>

      <p>{technology.description}</p>

      <button className="mx-4 my-4 bg-amber-500" onClick={() => handleAddToStack(technology)}>Add to Stack</button>
    </div>
  );
};
export default TechnologyCard;