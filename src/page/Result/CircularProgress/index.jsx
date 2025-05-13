import React, { useEffect, useState } from "react";



const CircularProgress = ({ percentage = 0, size = 120, stroke = 10 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 transition-all duration-700"
      >
        {/* 배경 원 */}
        <circle
          stroke="#fef3c7" // amber-100
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* 진행 원 */}
        <circle
          stroke="#f59e0b" // amber-500
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: "stroke-dashoffset 1s ease-in-out, stroke 0.3s",
          }}
        />
        {/* 중앙 하트 아이콘 */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          transform="rotate(90, 60, 60)"
          className="text-xl sm:text-2xl fill-rose-500"
        >
          💛
        </text>
      </svg>

      {/* 하단 설명 */}
      <div className="mt-2 text-sm text-[#5c3d1c] font-body font-medium">
        공감 지수: {percentage}%
      </div>
    </div>
  );
};



export default CircularProgress;
