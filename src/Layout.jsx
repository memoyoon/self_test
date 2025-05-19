import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-col margin-0 overflow-y-auto">
      {/* Header */}
      <header className="w-full h-20 p-6 bg-white shadow">
        <h1 className="text-lg font-bold">엠패스테스트</h1>
      </header>

      {/* Main (페이지별 콘텐츠) */}
      <main className="w-full px-6 bg-gradient-to-b from-amber-50 to-white flex-1">
        <Outlet /> {/* 여기서 라우트에 따라 컴포넌트가 바뀜 */}
      </main>

      {/* Footer */}
      <footer className="p-8 h-20 flex items-center justify-center w-full text-xs text-gray-500">
        © 2025 Memoyoon. All rights reserved. Contact: memoyoon [at] example [dot] com
      </footer>
    </div>
  )
}

export default Layout