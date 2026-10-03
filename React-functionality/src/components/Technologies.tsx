import { use } from "react";
import type { Technology } from "../types";
  import TechnologyCard from "./TechnologyCard";
  
type TechnologiesProps = {
  techPromise: Promise<Technology[]>;
};

const Technologies = ({techPromise}:TechnologiesProps) => {
    const technologies = use(techPromise);

    return (
        <div className="grid grid-cols-3 gap-4" >
          {technologies.map((technology) => (
     <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
        </div>
     
    );
};

export default Technologies;