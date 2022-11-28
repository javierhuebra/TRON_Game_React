import React from 'react';
import Button from './Button';

export default function Result({result, onClick}) {
  return (
    <div className="play-info">
      <h1>{result}</h1>
      <Button onClick={onClick}>
        Volver a jugar
      </Button>
    </div>
  );
}
