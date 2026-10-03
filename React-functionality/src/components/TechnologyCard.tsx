import type { Technology } from "../types";

type TechnologyCardProps = {
  technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={technology.icon} alt={technology.name} />

      <h2>{technology.name}</h2>

      <p>{technology.category}</p>

      <p>{technology.rating}</p>

      <p>{technology.description}</p>

      <button>Add to Stack</button>
    </div>
  );
};
export default TechnologyCard;