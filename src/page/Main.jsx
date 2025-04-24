import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-100 to-white">
      <h1 className="text-4xl font-bold mb-4">🧭 나는 엠패스일까?</h1>
      <p className="text-lg mb-8 text-gray-700">
        타인의 감정에 쉽게 휘둘리는 나, 혹시 '엠패스'일지도 몰라요.<br />
        아래 버튼을 눌러 지금 바로 테스트해보세요!
      </p>
      <button
        onClick={() => navigate("/EMPATH")}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg text-lg transition"
      >
        테스트 시작하기
      </button>
    </div>
  );
}

export default Main