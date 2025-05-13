import React, { useState } from 'react';
import Section from '../Guide/Section';
import { useNavigate } from 'react-router-dom';
import { Home, Info, Download, ArrowLeftCircle, ArrowBigLeft, ArrowLeft } from "lucide-react";

const EmpathCardBook = () => {
  const [page, setPage] = useState('intro');
  const navigate = useNavigate();
  const handleDownload = async () => {
    const cardElement = document.getElementById("result-card");
    if (!cardElement) return;
    const canvas = await html2canvas(cardElement);
    const link = document.createElement("a");
    link.download = `${nickname}_결과카드.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleBack = () => {
    if (page === 'intro') {
      navigate('/result'); // 결과 페이지 경로로 이동
    } else {
      setPage('intro'); // intro로 돌아감
    }
  };

  const Wrapper = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-center p-6 font-body text-[#5c3d1c]">
      <div className="w-full max-w-lg bg-white border border-amber-200 rounded-xl shadow-md p-6 text-sm leading-relaxed">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-6 py-6 text-sm leading-relaxed text-amber-900 shadow" id="result-card">
          {children}
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => setPage('intro')}
            className="w-full py-3 bg-amber-100 hover:bg-amber-200 rounded-xl text-sm font-semibold"
          >
            💡 엠패스 사용 설명서 보기
          </button>
          <button className="w-full py-3 bg-amber-100 hover:bg-amber-200 rounded-xl text-sm font-semibold" onClick={() => setPage('selfcare')}>
            🌿 자기돌봄 가이드 보기
          </button>
          <button className="w-full py-3 bg-amber-100 hover:bg-amber-200 rounded-xl text-sm font-semibold" onClick={() => setPage('match')}>
            🤝 어울리는 사람 알아보기
          </button>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/result')}
            className="bg-white p-3 rounded-full shadow hover:bg-amber-100 transition"
            aria-label="가이드 선택으로 돌아가기"
          >
            <ArrowLeft className="w-5 h-5 text-amber-800" />
          </button>
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
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setPage('intro')} className="text-sm text-amber-700 hover:underline">← 가이드 선택으로 돌아가기</button>
        </div>
      </div>
    </div>
  );

  if (page === 'intro') {
    return (
      <Wrapper>
        <h3 className="text-base sm:text-lg font-bold mb-4 text-center">💡 엠패스 사용 설명서</h3>
        <p className="mb-4">
          엠패스는 감정에 쉽게 휘둘리는 사람일 수 있지만, 동시에 세상을 깊이 느끼는 섬세한 감각의 소유자입니다.
          타인이 보지 못하는 고통, 미묘한 변화, 감정의 결을 감지하는 능력은 세상을 탐구하고 인간을 이해하는 데 탁월한 자산이 됩니다.
        </p>
        <h4 className="font-semibold mb-2">🧪 엠패스는 실험가입니다</h4>
        <p className="mb-4">
          끊임없이 감정을 관찰하고, “나는 왜 이런 감정을 느끼는 걸까?”,
          “지금 이 감정은 내 것일까 타인의 것일까?”라고 질문하며 자신을 알아가는 실험을 계속합니다.
          이 실험은 당신을 더욱 단단하게 성장시킵니다.
        </p>
        <h4 className="font-semibold mb-2">❓질문하는 용기를 가지세요</h4>
        <ul className="list-disc list-inside mb-4">
          <li>나에게: “지금 이 감정은 어디서 왔지?”</li>
          <li>타인에게: “당신은 지금 어떤 감정을 느끼고 있나요?”</li>
          <li>세상에게: “나는 이 세상에서 어떻게 연결되어 있지?”</li>
        </ul>
        <p className="mb-4">
          이 질문은 당신의 내면을 확장시키고, 세상을 새롭게 바라보게 해줄 거예요.
        </p>
        <h4 className="font-semibold mb-4">🚪 엠패스가 마주할 두 갈래 길</h4>
        <p>
          삶의 어느 순간, 엠패스는 다음과 같은 선택 앞에 서게 됩니다:
          <br />닫힌 감정 안에 갇혀 혼자 남을 것인가?
          <br />질문을 던지고 새로운 세상으로 나아갈 것인가?
          <br /><br />당신은 세상을 더 풍요롭고 다정하게 해줄 수 있는 사람입니다. 그 시작은 한 번의 질문, 그리고 한 걸음의 용기입니다.
        </p>




      </Wrapper>
    );
  }

  if (page === 'selfcare') {
    return (
      <Wrapper>
        <h1 className="text-lg font-semibold mb-6 text-center">🌿 자기돌봄 가이드</h1>
        <div className="space-y-8">
          <Section title="1. 감정적 보호와 경계 설정" items={[
            { subtitle: "🛡 에너지 경계 설정", content: "엠패스는 외부 감정에 쉽게 압도되기 때문에 '이건 내 감정이 아니야'라고 스스로 분리하는 연습이 필요합니다." },
            { subtitle: "🤝 사회적 관계 관리", content: "정신적으로 힘든 사람과는 거리두기, 긍정적 에너지를 주는 사람들과 시간을 보내는 것이 중요합니다." }
          ]} />

          <Section title="2. 환경적 자극 관리" items={[
            { subtitle: "🏡 조용하고 평화로운 공간 만들기", content: "밝은 빛, 소음에서 벗어나 힐링할 수 있는 개인만의 공간을 구성하세요." },
            { subtitle: "🌳 자연과의 접촉", content: "정원 가꾸기, 산책, 나무 아래 앉기처럼 자연 속에서 감각을 회복하세요." }
          ]} />

          <Section title="3. 정신적, 신체적 회복" items={[
            { subtitle: "🧘 명상과 마음챙김", content: "매일 10~20분간 호흡과 감정에 집중하며 나를 정리해보세요." },
            { subtitle: "🧍 요가와 스트레칭", content: "긴장을 풀고 몸과 마음을 함께 회복시킬 수 있습니다." },
            { subtitle: "💬 자기 친절 훈련", content: "스스로에게 따뜻한 말을 건네고, 작더라도 성취를 인정하세요." }
          ]} />

          <Section title="4. 신체적 건강 관리" items={[
            { subtitle: "😴 충분한 수면", content: "자극에 민감한 만큼, 안정된 수면 루틴이 필수입니다." },
            { subtitle: "🥗 건강한 식습관", content: "혈당 안정, 자극적 음식 제한, 영양 균형이 중요해요." }
          ]} />

          <Section title="5. 에너지 리셋" items={[
            { subtitle: "🎨 자기만의 힐링 시간", content: "취미, 운동, 혼자만의 시간으로 감정을 재정비하세요." },
            { subtitle: "🚿 정신적 정화", content: "샤워, 자연 산책, 정적인 음악으로 감정의 찌꺼기를 씻어내세요." }
          ]} />

          <Section title="6. 필요할 때 전문가 도움 받기" items={[
            { subtitle: "📞 심리 상담", content: "자신의 감정을 감당하기 어렵다면 전문가와의 대화를 통해 정리하고 돌봄을 받을 수 있어요." }
          ]} />
        </div>
      </Wrapper>
    );
  }

  if (page === 'match') {
    return (
      <Wrapper>
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center">엠패스와 어울리는 사람</h1>
        <div className="space-y-4 text-sm">
          <p><strong>정서적으로 안정적인 사람:</strong> 감정을 조절하고 감정적으로 의존하지 않으며, 서로를 지지할 수 있는 사람입니다.</p>
          <p><strong>타인의 감정을 이해하고 존중하는 사람:</strong> 엠패스의 민감함을 이해하고 경청하며, 감정의 뉘앙스를 포착해 따뜻하게 반응합니다.</p>
          <p><strong>경계와 자율성을 존중하는 사람:</strong> 독립성을 유지하며 감정적으로 밀착되더라도 서로의 시간을 침범하지 않습니다.</p>
          <p><strong>긍정적이고 에너지가 좋은 사람:</strong> 낙관적인 태도로 안정감을 주고, 정돈된 에너지를 전달할 수 있는 사람입니다.</p>
          <p><strong>자기 돌봄과 자아 존중감이 강한 사람:</strong> 감정의 책임을 지고, 자신을 잘 돌보며 상호 돌봄의 관계를 추구합니다.</p>
          <p><strong>소통이 원활하고 이해심이 깊은 사람:</strong> 감정을 차분히 표현하고, 상대의 감정을 이해하려는 노력을 기울이는 사람입니다.</p>
          <p><strong>신뢰할 수 있는 사람:</strong> 약속을 지키고, 예측 가능한 일관된 관계를 제공할 수 있는 사람입니다.</p>
          <p className="mt-4 text-amber-800 italic">
            엠패스는 감정적 안정과 에너지를 주고받을 수 있는 사람과 함께할 때 가장 편안하고 깊은 관계를 형성할 수 있습니다.
          </p>
        </div>
      </Wrapper>
    );
  }

  return null;
};

export default EmpathCardBook;
