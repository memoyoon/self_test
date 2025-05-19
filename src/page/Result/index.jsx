import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from "html2canvas";
import { Home, Download, Info } from "lucide-react";
import CircularProgress from './CircularProgress';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultData = {}, percentage = 0 } = location.state || {};
  const { imageSrc,
    nickname,
    resultText,
    detailText,
    selfCareTips,
    strengths,
  } = resultData;

  console.log('location.state ', location.state)
  const handleDownload = async () => {
    const cardElement = document.getElementById("result-card");
    if (!cardElement) return;
    const canvas = await html2canvas(cardElement);
    const link = document.createElement("a");
    link.download = `${nickname}_결과카드.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleKakaoShare = () => {
    if (!window.Kakao) return;
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: "엠패스 테스트 결과",
        description: `${nickname} (${score}/${total}점)`,
        imageUrl: window.location.origin + imageSrc,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "나도 테스트하기",
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });
  };

  return (
    <div
      className="flex-col flex w-full bg-cover bg-center text-center font-body p-12"
    >
      <div className="bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-amber-200 p-6 sm:p-8 text-[#5c3d1c] font-body">

          {/* 닉네임 + 요약 결과 */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">{nickname}</h2>
              <p className="text-sm leading-relaxed">{resultText}</p>
            </div>
          </div>

          {/* 공감 지수 */}
          <div className="flex justify-center mb-6">
            <CircularProgress percentage={percentage} />
          </div>

          {/* 분석 텍스트 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-4 text-sm leading-relaxed text-amber-900 mb-6">
            <p className="whitespace-pre-line">{detailText}</p>
          </div>

          {/* 자기 돌봄 조언 */}
          <div className="bg-amber-100 border border-amber-300 rounded-lg px-4 py-4 text-sm leading-relaxed text-amber-900 mb-6">
            <h3 className="font-semibold mb-2">🌿 이렇게 해보세요</h3>
            <ul className="list-disc list-inside space-y-1">
              {selfCareTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* 잘할 수 있는 일 */}
          <div className="bg-white border border-amber-200 rounded-lg px-4 py-4 text-sm leading-relaxed text-amber-900 mb-6">
            <h3 className="font-semibold mb-2">🌟 이런 활동에서 빛나요</h3>
            <ul className="list-disc list-inside space-y-1">
              {strengths.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 명언 */}
          <p className="mt-6 text-xs italic text-right text-amber-700">
            "진정한 공감은 내가 무너지지 않고도 함께할 수 있는 능력이다." — Brené Brown
          </p>

          {/* 하단 버튼 */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              className="bg-white p-3 rounded-full shadow hover:bg-amber-100 transition"
              onClick={() => navigate("/")}
            >
              <Home className="w-5 h-5 text-amber-800" />
            </button>
            <button
              className="bg-white p-3 rounded-full shadow hover:bg-amber-100 transition"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 text-amber-800" />
            </button>
            <button
              className="bg-white p-3 rounded-full shadow hover:bg-yellow-100 transition"
              onClick={handleKakaoShare}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-yellow-400"
              >
                <path d="M12 2C6.48 2 2 6.03 2 10.66c0 2.61 1.53 4.93 3.91 6.41L5 22l4.24-2.32c.9.16 1.84.24 2.76.24 5.52 0 10-4.03 10-8.58S17.52 2 12 2z" />
              </svg>
            </button>
            <button
              className="bg-white p-3 rounded-full shadow hover:bg-amber-100 transition"
              onClick={() => navigate("/guide/empath")}
            >
              <Info className="w-5 h-5 text-amber-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;