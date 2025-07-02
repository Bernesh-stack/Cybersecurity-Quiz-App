import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import cyberImage from "../assets/cyberSecurity.png";
import { Button } from "../Components/ui/button";

// Type for expected state
interface LocationState {
  score: number;
  name: string;
}

const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely extract the state from navigation
  const state = location.state as LocationState | undefined;

  // Redirect to home if accessed without completing the quiz
  if (!state) {
    return <Navigate to="/home" replace />;
  }

  const { score, name } = state;

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center py-16 px-4">
      <div className="bg-[#111827] max-w-4xl w-full rounded-xl shadow-lg p-8 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Training Feedback</h1>

        <div className="bg-[#1F2937] rounded-lg px-6 py-4 mb-8">
          <p className="text-sm text-gray-300 mb-1">Overall Score</p>
          <p className="text-3xl font-bold text-white">{score}%</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={cyberImage}
            alt="Cyber Warrior"
            className="w-full md:w-72 h-auto rounded-md object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Congratulations, {name}!</h2>
            <p className="text-gray-300 text-sm md:text-base">
              You've successfully completed the Social Engineering Awareness Training and earned the Cyber Warrior badge.
              Your dedication to learning and applying cybersecurity principles has paid off. Keep up the excellent work!
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={() => navigate("/home")}>Return to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
