import React from 'react';
import { Card } from '../Elements';
import black from "../black.png";
import useHover from '../hooks/useHover';

const Hover = () => {

  const [isHovered, bind] = useHover();

  console.log('Hovered', isHovered);

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
