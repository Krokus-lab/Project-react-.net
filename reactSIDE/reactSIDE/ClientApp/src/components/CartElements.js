import React, { useState } from "react";

export default function CartElements({
  product,
  cartElement,
  handleAmountChange,
}) {
  const [quantity, setQuantity] = useState(cartElement.quantity);

  const handleAddCD = () => {
    setQuantity(quantity + 1);

    handleAmountChange(cartElement.id, quantity + 1);
  };

  const handleDeleteCD = () => {
    setQuantity(quantity - 1);

    handleAmountChange(cartElement.id, quantity - 1);
  };

  return (
    <div className="flex flex-col text-xs text-center sm:text-2xl lg:flex-row 2xl:text-2xl my-5">
      <div className="lg:w-1/3 mx-auto">
        <img src={product.foto} alt={product.title} />
      </div>
      <div className="flex flex-col justify-center items-center lg:w-2/3 ">
        <p className="my-2">
          {product.title} - {product.author}
        </p>
        <div className="flex m-2">
          <svg
            className="w-7 h-7 p-1 mr-2 bg-yellow-400 rounded-full sm:w-9 sm:h-9 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleDeleteCD()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
          <p>{quantity}</p>
          <svg
            className="w-7 h-7 p-1 ml-2 bg-yellow-400 rounded-full sm:w-9 sm:h-9 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleAddCD()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <p className="mb-2">Price: {quantity * product.price}$</p>
      </div>
    </div>
  );
}
