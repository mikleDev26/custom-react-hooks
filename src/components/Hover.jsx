import React from 'react';
import { Card } from '../Elements';
import black from "../black.png";
import { useHover, useWindowWidth } from '../hooks';

const Hover = () => {

  const [isHovered, bind] = useHover();
  const width = useWindowWidth();

  if (width < 400) {
    return null;
  }

  return (
    <div>
     <Card {...bind} style={{ background: "var(--black)" }}>
        <h3>Some card</h3>
        <img src={black} />
     </Card>
    </div>
  );
};

export default Hover;
