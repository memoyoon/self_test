import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import Main from './page/Main'
import Test from './page/Test'
import Guide from './page/Guide';
import Result from './page/Result';
import EmpathInteractiveCards from './page/EmpathInteractiveCards';

export const base_url = "http://localhost:5173";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<Main />} />
          {/* Test Page */}
          <Route path='/test/:type' element={<Test />} />
          {/* Test Result Page */}
          <Route path="/result/:type" element={<Result />} />
          {/* Test Guide Page */}
          <Route path='/guide/:type' element={<Guide />} />
          {/* Interactive Test Guide Page */}
          <Route path='/guide/:type/more' element={<EmpathInteractiveCards />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

