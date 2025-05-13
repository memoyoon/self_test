import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';


const TestIngPage = ({ state = {}, dispatch = () => { }, questions = [] }) => {
  const navigate = useNavigate();

  console.log('state', state)
  const { step = 0, score = 0, answers = []
  } = state;

  // 선택지 클릭 시 reducer에 'ANSWER' 액션 전달
  const handleAnswer = (selectedIndex) => {
    if (step + 1 > questions.length) return;
    dispatch({ type: 'ANSWER', payload: selectedIndex });
  };

  // 이전 질문 버튼 클릭 시 reducer에 'BACK' 액션 전달
  const handleBack = () => {
    dispatch({ type: 'BACK' });
  };


  const questionData = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);

  return (
    <div className="px-4 sm:px-6 py-10 min-h-screen bg-gradient-to-b from-amber-50 to-white font-body text-[#5c3d1c] transition-all">

      {/* 상단 네비 */}
      <div className="flex justify-between items-center mb-6 text-sm sm:text-base">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="text-amber-700 hover:text-amber-900 disabled:text-gray-400 transition"
        >
          ← 이전 질문
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-amber-700 hover:text-amber-900 transition"
        >
          홈으로 가기
        </button>
      </div>

      {/* 진행 바 */}
      <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden mb-6 shadow-inner">
        <div
          className="h-full bg-amber-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* 질문 번호 */}
      <div className="text-sm text-amber-600 mb-2">
        질문 {step + 1} / {questions.length}
      </div>

      {/* 질문 텍스트 */}
      <h2 className="text-lg sm:text-xl font-semibold mb-6 leading-snug">
        📌 {questionData.question}
      </h2>

      {/* 옵션 버튼들 */}
      <div className="flex flex-col gap-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full p-4 sm:p-5 border border-amber-200 rounded-2xl hover:bg-amber-100 text-left transition shadow-sm hover:shadow-md text-sm sm:text-base"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestIngPage;
