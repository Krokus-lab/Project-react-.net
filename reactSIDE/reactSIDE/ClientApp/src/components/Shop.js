import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Shop() {
  // W tym api jest id, title, author, dataWydania, genre, price, foto i title.
  const products = useSelector((store) => store.products);

  const loggedUser = useSelector((store) => store.loggedUser);
  console.log(loggedUser);
  //IMPLMENTACJA PRZY WIEKSZEJ ILOSCI PLYT
  // const [showFrom, setShowFrom] = useState(0);
  // const [showTo, setShowTo] = useState(5);

  const productsOnSite = products.map((product) => (
    <div
      key={product.id}
      className="flex flex-row p-4 mx-5 my-2 border border-yellow-600 rounded lg:w-2/5"
    >
      <div className="w-1/2">
        <img className="object-fill" src={product.foto} alt={product.title} />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 font-mono md:text-3xl lg:text-xl">
        <p className="text-center">"{product.title}"</p>
        <p>{product.author}</p>
        <p>{product.genre}</p>
        <Link
          to={`/product/${product.id}`}
          className="px-2 py-1 mt-2 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
        >
          Buy now for {product.price}$
        </Link>
      </div>
    </div>
  ));

  //JAK BEDZIE WIECEJ PLYT NA STRONIE TO SIE DODA TO
  // const nextPage = () => {
  //   const productsLength = productsOnSite.Length;

  //   // if (showTo < productsLength) {
  //   //   setShowFrom(showFrom + 5);
  //   // }

  //   // if (showTo + 5 > productsLength) {
  //   //   setShowTo(showTo + (productsLength - showTo));
  //   // }

  //   setShowFrom(5);
  //   setShowTo(8);
  // };

  // const previousPage = () => {
  //   setShowFrom(0);
  //   setShowTo(5);
  // };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around lg:items-center ">
        {productsOnSite}
      </div>
      {/* <div className="flex flex-row justify-around m-5 w-1/2 mx-auto">
        <button
          onClick={previousPage}
          className="bg-yellow-500 p-4 rounded-full focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextPage}
          className="bg-yellow-500 p-4 rounded-full focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div> */}
    </>
  );
}
