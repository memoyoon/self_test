import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TESTS } from '../data/TESTS';

const Test = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log('params', params)
  const data = TESTS.find((item) => item.info.urlName = 'EMPATH');
  const questions = data.questions;

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    const isEmpath = selectedIndex === 0 ? 1 : 0;
    const newScore = score + isEmpath;

    if (step + 1 >= questions.length) {
      navigate("/result", { state: { score: newScore, total: questions.length } });
    } else {
      setScore(newScore);
      setStep(step + 1);
    }
  };

  const q = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);

  return (
    <div className="max-w-screen mx-auto p-6 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 font-body">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setStep(Math.max(step - 1, 0))}
          disabled={step === 0}
          className="text-sm text-indigo-500 disabled:text-gray-400"
        >
          ← 이전 질문
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-indigo-500"
        >
          홈으로 가기
        </button>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">

        <div
          className="h-full bg-indigo-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-gray-600 mb-2">질문 {step + 1} / {questions.length}</div>
      <h2 className="text-xl font-semibold mb-6">📌 {q.question}</h2>
      <div className="flex flex-col gap-4">
        {q.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full p-5 border border-gray-300 rounded-2xl hover:bg-indigo-50 text-left transition-all shadow-sm"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Test;