import React from 'react';
import useInc from '../hooks/useInc';

const Inc = () => {
const [volume, { dec, inc, reset }] = useInc({
  maxValue: 10,
  minValue: 0,
  initialValue: 10,
  step: 3,
}); 

  return (
    <div>
      <h3>Volume</h3>
      <button onClick={dec}>-</button>
      <h3>{volume}</h3>
      <button onClick={inc}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Inc
