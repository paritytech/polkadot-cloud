import React from 'react';

export interface ButtonProps {
  prop1?: string;
  prop2?: boolean;
  prop3?: number;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
      Hello World
    </button>
  );
}