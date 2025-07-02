import React from "react";
import { useNavigate } from "react-router-dom";

const Feedback: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B1120] text-white p-10">
      <h2 className="text-3xl font-bold mb-4">Thanks for Completing the Quiz!</h2>
      <p className="text-lg text-gray-300 mb-6">We value your feedback.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Feedback;
