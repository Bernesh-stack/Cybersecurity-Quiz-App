import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { levels } from "../data/questions";
import QuestionCard from "../Components/QuestionCard";

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [levelIndex, setLevelIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(5).fill(null)
  );

  const currentLevel = levels[levelIndex];

  const handleSelect = (questionIndex: number, option: string) => {
    const updated = [...answers];
    updated[questionIndex] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    const unanswered = answers.some((a) => a === null);
    if (unanswered) {
      alert("Please answer all questions before proceeding.");
      return;
    }

    if (levelIndex === levels.length - 1) {
      navigate("/feedback");
    } else {
      setLevelIndex(levelIndex + 1);
      setAnswers(Array(5).fill(null)); // reset answers
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-[#0B1120] text-white">
      <h2 className="text-2xl font-bold mb-6">Level {currentLevel.level}</h2>
      <div className="space-y-6">
        {currentLevel.questions.map((q, idx) => (
          <QuestionCard
            key={idx}
            question={q.question}
            options={q.options}
            selected={answers[idx]}
            onSelect={(opt) => handleSelect(idx, opt)}
          />
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          onClick={handleNext}
        >
          {levelIndex === levels.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
