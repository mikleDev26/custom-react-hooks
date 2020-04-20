import React from 'react';
import { useMount, useUnmount } from '../hooks/useMount';
import  useToggle from '../hooks/useToggle';

export const Mount = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <Unmount />}
    </div>
  );
};


export const Unmount = () => {

  useMount(() => {
    console.log('I havemounted');
  });

  useUnmount(() => {
    console.log('I have unmounted');
  })

  return (
    <div>
      Unmount Me
    </div>
  );
};