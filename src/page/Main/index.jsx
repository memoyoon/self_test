import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const handleViewGuide = () => navigate("/guide/empath/more");
  return (
    <div className="h-full bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-center px-4 py-12 font-body text-[#5c3d1c]">
      <div className="w-full max-w-xl bg-white border border-amber-200 rounded-2xl shadow-md p-8 text-center">

        <h1 className="text-2xl font-bold mb-4">엠패스 테스트</h1>
        <p className="text-xs mb-6 leading-relaxed text-[#6b4c1e]">
          이 테스트는 당신의 감정 민감성과 공감 능력을 기반으로<br />
          엠패스 성향을 파악하고 자기돌봄 방향을 안내해줍니다.
        </p>

        <button
          onClick={() => navigate("/test/empath")}
          className="w-full py-3 bg-amber-100 hover:bg-amber-200 rounded-xl text-sm font-semibold transition"
        >
          🚀 테스트 시작하기
        </button>


        <div className="mt-6 text-xs text-amber-700 leading-relaxed">
          감정이 자주 요동치고 사람들과의 관계가 힘들게 느껴지셨다면, <br />
          <button onClick={() => navigate("/guide/empath/more")} className=" hover:text-amber-900 font-semibold">
            엠패스를 위한 가이드를 만나보세요
          </button>
        </div>



      </div>
    </div>


  );
}

export default Main