import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { TESTS } from '../../data/TESTS';
import TestIngPage from './TestIngPage';
import TestEndPage from './TestEndPage/TestEndPage';

// 초기 상태 정의: 현재 질문 번호, 점수, 선택한 답변들을 관리
const initialState = {
  step: 0,
  score: 0,
  answers: []
};

/**
 * reducer 함수는 상태(state)를 업데이트하는 로직을 한 곳에 모아두는 역할을 한다.
 * 액션 객체의 type에 따라 상태를 어떻게 바꿀지를 정의하며,
 * 복잡한 상태 업데이트를 switch 문 하나로 깔끔하게 처리할 수 있다.
 */
function reducer(state, action) {
  switch (action.type) {
    // 사용자가 선택지를 클릭했을 때
    case 'ANSWER': {
      const isEmpath = action.payload === 0 ? 1 : 0;  // 선택지가 0번일 경우 공감 점수 +1
      return {
        ...state,
        step: state.step + 1, // 다음 질문으로 이동
        score: state.score + isEmpath, // 점수 증가
        answers: [...state.answers.slice(0, state.step), action.payload] // 현재 위치에 선택값 기록
      };
    }
    // 사용자가 이전 질문으로 돌아갈 때
    case 'BACK': {
      if (state.step === 0) return state; // 첫 질문이면 그대로 유지
      const prevAnswer = state.answers[state.step - 1]; // 이전 답변 확인
      const scoreDelta = prevAnswer === 1 ? -1 : 0; // 이전이 공감 답변이었다면 점수 -1
      return {
        ...state,
        step: state.step - 1, // 이전 질문으로 이동
        score: state.score + scoreDelta, // 점수 복구
        answers: state.answers.slice(0, state.step - 1) // 해당 답변 삭제
      };
    }
    default:
      return state;
  }
}

const Test = () => {
  const { type } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const testData = TESTS.find((item) => item.info.mainUrl = type);
  const { questions = [], results = [] } = testData;
  const { step = 0, score = 0 } = state;
  const isTextIng = step < questions.length;

  return (
    !isTextIng ? <TestIngPage state={state} dispatch={dispatch} questions={questions} /> : <TestEndPage score={score} total={questions.length} results={results} />
  )

}

export default Test;