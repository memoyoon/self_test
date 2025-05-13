import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-500 border-t mt-10">
      <p>© {new Date().getFullYear()} Memoyoon. All rights reserved.</p>
      <p>
        Contact:{" "}
        <a
          href="mailto:your.email@example.com"
          className="text-blue-500 hover:underline"
        >
          your.email@example.com
        </a>
      </p>
    </footer>
  )
}

export default Footer