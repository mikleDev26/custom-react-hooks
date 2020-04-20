import { useState } from 'react';

const useInc = ({
  maxValue = 100000,
  minValue = -100000,
  initialValue = 0,
  step = 1,
}) => {
  const [value, setValue] = useState(initialValue);

  const inc = () => setValue((prev) => (prev + step) > maxValue ? maxValue : prev + step);

  const dec = () => setValue((prev) => (prev - step) < minValue ? minValue : prev - step);

  const reset = () => setValue(initialValue);

  return [value, {inc, dec, reset}];
};

export default useInc;
