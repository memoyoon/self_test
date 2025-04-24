import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './page/Main'
import Test from './page/Test'
import ResultWrapper from './page/ResultWrapper';

export const base_url = "http://localhost:5173";

function App() {

  // Web font import
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Noto+Sans+KR&family=Marcellus&display=swap";
  document.head.appendChild(fontLink);
  document.body.classList.add("font-body");

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Thumbnail List Page */}
        <Route path='/' element={<Main />} />
        {/* Test Intro-Quiz-Loading Page */}
        <Route path='/:testParam' element={<Test />} />
        {/* Test Result Page */}
        <Route path="/result" element={<ResultWrapper />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

//주소 체계 
//1. 메인 썸네일 리스트 페이지 : root 
//2. 테스트 페이지 - Intro / Quiz / Loading : root/testName
//3. 결과 페이지 : root/testName/result/resultName
