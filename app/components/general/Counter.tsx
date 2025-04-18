import React from "react";
import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-md overflow-hidden h-12">
      <button
        className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors border-r border-gray-200 focus:outline-none"
        onClick={decreaseFunc}
        disabled={cardProduct?.quantity <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </button>
      
      <div className="w-12 h-full flex items-center justify-center text-lg font-medium text-gray-700">
        {cardProduct?.quantity}
      </div>
      
      <button
        className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors border-l border-gray-200 focus:outline-none"
        onClick={increaseFunc}
        disabled={cardProduct?.quantity >= 10}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;