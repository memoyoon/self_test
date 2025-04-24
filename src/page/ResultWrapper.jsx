import React from 'react'
import { useLocation } from 'react-router-dom';
import Result from './Result';

const ResultWrapper = () => {
  const location = useLocation();
  const { score = 0, total = 12 } = location.state || {};
  return <Result score={score} total={total} />;
}
export default ResultWrapper