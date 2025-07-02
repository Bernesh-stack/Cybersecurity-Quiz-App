import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { levels } from "../data/questions";
import QuestionCard from "../Components/QuestionCard";

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [levelIndex, setLevelIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(5).fill(null));
  const [totalCorrect, setTotalCorrect] = useState(0); // Track total correct answers

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

    // Count correct answers for this level
    const correctThisLevel = currentLevel.questions.reduce((count, question, index) => {
      if (answers[index] === question.correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);

    const updatedCorrect = totalCorrect + correctThisLevel;

    if (levelIndex === levels.length - 1) {
      // Last level — calculate total score and redirect
      const totalQuestions = levels.reduce((sum, level) => sum + level.questions.length, 0);
      const score = Math.round((updatedCorrect / totalQuestions) * 100);

      navigate("/feedback", {
        state: {
          score,
          name: "User", // Replace with dynamic user name if available
        },
      });
    } else {
      // Go to next level
      setTotalCorrect(updatedCorrect);
      setLevelIndex(levelIndex + 1);
      setAnswers(Array(5).fill(null)); // Reset for next level
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
            onSelect={(option) => handleSelect(idx, option)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
        >
          {levelIndex === levels.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
