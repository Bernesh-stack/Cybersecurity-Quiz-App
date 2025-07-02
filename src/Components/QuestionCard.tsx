import React from "react";

interface Props {
  question: string;
  options: string[];
  selected: string | null;
  onSelect: (option: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, options, selected, onSelect }) => {
  return (
    <div className="bg-[#0B1120] border border-slate-700 rounded-lg p-6 text-white">
      <h3 className="font-semibold mb-4">{question}</h3>
      <ul className="space-y-2">
        {options.map((opt) => (
          <li
            key={opt}
            onClick={() => onSelect(opt)}
            className={`p-3 border rounded-lg cursor-pointer transition ${
              selected === opt ? "bg-blue-500 text-white" : "hover:bg-slate-800"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
