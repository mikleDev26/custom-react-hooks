import React from 'react';
import useInc from '../hooks/useInc';

const Inc = () => {
const [value, { dec, inc }] = useInc(0);

  return (
    <div>
      <button
      onClick={dec}
      >-</button>
      <h3>{value}</h3>
      <button
      onClick={inc}
      >+</button>
    </div>
  );
};

export default Inc
