import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-amber-50 to-white text-center">
      <h1 className="text-3xl sm:text-4xl text-[#5c3d1c] font-bold mb-4 leading-snug">
        나는 엠패스일까?
      </h1>

      <p className="text-base sm:text-lg mb-8 text-amber-700 leading-relaxed">
        타인의 감정에 쉽게 휘둘리는 나,<br />
        혹시 '엠패스'일지도 몰라요.<br />
        아래 버튼을 눌러 지금 바로 테스트해보세요!
      </p>

      <button
        onClick={() => navigate("/test/empath")}
        className="w-full max-w-xs px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl shadow-md text-base sm:text-lg transition"
      >
        테스트 시작하기
      </button>
    </div>

  );
}

export default Main