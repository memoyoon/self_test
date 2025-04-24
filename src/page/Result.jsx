import React from 'react'
import { useNavigate } from 'react-router-dom';

const Result = ({ score, total }) => {
  const navigate = useNavigate();
  const shareUrl = window.location.href;

  let resultText = "";
  let advice = [];
  let imageSrc = "";

  if (score <= 3) {
    resultText = "공감형 인간이지만 감정에 쉽게 휘둘리진 않아요.";
    advice = ["자기 중심적인 감정 관리를 계속 유지하세요.", "때로는 공감보다 객관성이 도움이 될 수 있어요."];
    imageSrc = "/images/smile.png";
  } else if (score <= 7) {
    resultText = "감정에 민감한 편이에요. 엠패스 경향이 있어요.";
    advice = ["감정 경계를 설정하는 연습을 해보세요.", "혼자만의 휴식 시간을 자주 가지세요."];
    imageSrc = "/images/meditation";
  } else if (score <= 10) {
    resultText = "엠패스적 특성이 강하게 보여요. 감정 보호가 중요해요.";
    advice = ["감정을 글로 정리하거나 명상으로 정화해보세요.", "타인의 감정은 '정보'일 뿐임을 기억하세요."];
    imageSrc = "/images/write.png";
  } else {
    resultText = "고감도 엠패스! 감정 관리가 필수입니다.";
    advice = ["감정 디톡스 루틴을 만들고 일상화하세요.", "필요할 땐 감정적 거리두기를 훈련하세요."];
    imageSrc = "/images/jogging.png";
  }

  const shareText = encodeURIComponent(`나는 엠패스 테스트에서 ${score}/${total}점을 받았어요! 결과: ${resultText}`);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`;
  const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="max-w-screen mx-auto p-6 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 font-body text-center">
      <h2 className="">🎉 테스트 결과</h2>
      {/* <p className="text-xl font-semibold text-indigo-500 ">총점: {score} / {total}</p> */}

      <img src={imageSrc} alt="결과 이미지" className="w-full max-w-md mx-auto rounded-xl shadow-md my-6" />
      <div className="text-lg text-gray-700 mb-6 italic">{resultText}</div>

      <div className="grid gap-4 text-left max-w-md mx-auto">
        {advice.map((tip, idx) => (
          <div key={idx} className="p-4 bg-white border border-blue-200 shadow-sm rounded-2xl text-gray-700 leading-relaxed">
            🌿 {tip}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-indigo-500 hover:bg-blue-700 text-white rounded-full shadow-md transition hover:scale-105"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}

export default Result;