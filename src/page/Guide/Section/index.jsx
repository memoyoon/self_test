import React from 'react'

const Section = ({ title, items }) => {
  return (
    <section className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-base font-semibold mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map(({ subtitle, content }, i) => (
          <li key={i}>
            <p className="font-medium mb-1">{subtitle}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Section;