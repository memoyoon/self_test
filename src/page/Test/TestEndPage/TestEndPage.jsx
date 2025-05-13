import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TestEndPage = ({ score = 0, total = 12, results = [] }) => {
  const navigate = useNavigate();

  // 0~100% 기준으로 결과 타입을 구분하는 함수
  const getResultTypeByScore = (score, total) => {
    const percent = (score / total) * 100;

    if (percent <= 25) return "A";       // 감정 공감 낮음
    else if (percent <= 50) return "B";  // 중간
    else if (percent <= 75) return "C";  // 엠패스 경향 있음
    else return "D";                     // 강한 엠패스
  };

  // 퍼센트를 반환하는 함수
  const getPercentage = (score, total) => {
    return Math.round((score / total) * 100);
  };
  const resultType = getResultTypeByScore(score, total);
  const resultData = results.find((item) => item.type === resultType);
  const percentage = getPercentage(score, total);

  console.log('resultData', resultData)
  useEffect(() => {
    // 로딩 상태 유지 후 자동으로 결과 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/result/empath", {
        state: { resultData, percentage }
      });
    }, 3000); // 3초 로딩

    console.log('resultData', resultData)
    return () => clearTimeout(timer); // 메모리 누수 방지
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center text-center px-6">
      {/* 로딩 애니메이션 원 */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-amber-300 animate-ping opacity-50"></div>
        <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-white text-xl font-bold shadow-md">
          💛
        </div>
      </div>

      {/* 메세지 */}
      <p className="text-lg text-amber-800 font-semibold mb-2">
        결과 분석 중이에요
      </p>
      <p className="text-sm text-amber-600">당신의 공감 능력을 분석하고 있어요...</p>
    </div>
  );
};

export default TestEndPage;