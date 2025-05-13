import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 bg-white shadow">
        <h1 className="text-lg font-bold">엠패스테스트</h1>
      </header>

      {/* Main (페이지별 콘텐츠) */}
      <main className="flex-1 p-4">
        <Outlet /> {/* 여기서 라우트에 따라 컴포넌트가 바뀜 */}
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © 2025 Memoyoon. All rights reserved.
        Contact: memoyoon [at] example [dot] com
      </footer>
    </div>
  )
}

export default Layout