import React, { useState } from 'react';
import Button from './Button';

const HelloWorld: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold text-blue-500'>Hello, Türkiye!</h1>
      <p className='mt-4 text-xl'>Count: {count}</p>
      <Button label='Increment' onClick={incrementCount} />
    </div>
  );
};

export default HelloWorld;