import { useState } from 'react';

const useInc = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const inc = () => setValue((prev) => prev+1);

  const dec = () => setValue((prev) => prev-1);

  return [value, {inc, dec}];
};

export default useInc;
