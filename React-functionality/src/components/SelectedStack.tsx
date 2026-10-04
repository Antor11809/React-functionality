import type { Technology } from "../types";

type SelectedStackProps = {
  selectedTech: Technology[];
  handleRemoveFromStack: (id: number) => void;
  handleRemoveAll: () => void;
};

const SelectedStack = ({
  selectedTech,
  handleRemoveFromStack,
  handleRemoveAll,
}: SelectedStackProps) => {
  return (
    <div className="mt-10 border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">Your Stack</h2>
          <p className="text-sm text-gray-500">
            Selected Technologies: {selectedTech.length}
          </p>
        </div>

        <button
          onClick={handleRemoveAll}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          Remove All
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {selectedTech.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-2 border rounded-full px-4 py-2"
          >
            <span>{tech.name}</span>

            <button
              onClick={() => handleRemoveFromStack(tech.id)}
              className="font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedStack;