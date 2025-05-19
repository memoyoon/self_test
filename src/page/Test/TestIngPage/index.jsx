import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestIngPage = ({ state = {}, dispatch = () => { }, questions = [] }) => {
  const navigate = useNavigate();
  const { step = 0 } = state;

  const handleAnswer = (selectedIndex) => {
    if (step + 1 > questions.length) return;
    dispatch({ type: 'ANSWER', payload: selectedIndex });
  };

  const handleBack = () => {
    dispatch({ type: 'BACK' });
  };

  const questionData = questions[step];

  return (
    <div className="relative h-full py-4 bg-gradient-to-b from-amber-50 to-white font-body text-[#5c3d1c] overflow-hidden">

      {/* 상단 네비 + 프로그레스 */}
      <div className="h-12">
        <div className="pb-2 h-10 flex justify-between items-center text-sm sm:text-base ">
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

        {/* 프로그레스 바 */}
        <div className="grid grid-cols-12 gap-1">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full ${idx < step ? 'bg-amber-500' : 'bg-amber-100'}`}
            />
          ))}
        </div>
      </div>

      {/* 질문 영역 - 남은 공간 채움 */}
      {/* 프로그레스바 영역 48px 버튼 영역 124px  */}
      <div className="h-[calc(100%-212px)] flex-1 flex items-center justify-center text-center">
        <h2 className="text-lg sm:text-2xl font-semibold leading-snug">
          {questionData.question}
        </h2>
      </div>

      {/* 답변 버튼들 - 하단 고정 */}
      <div className="absolute bottom-[16px] left-0 w-full flex flex-col gap-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full p-4 sm:p-5 bg-white border border-amber-200 rounded-2xl hover:bg-amber-100 text-left transition shadow-sm hover:shadow-md text-sm sm:text-base"
          >
            {option}
          </button>
        ))}
      </div>
    </div>

  );
};

export default TestIngPage;
