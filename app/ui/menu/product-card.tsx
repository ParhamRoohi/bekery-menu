"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "../../context/cart-context";

type ProductCardProps = {
  id: number;
  title: string;
  curPrice: number;
  prevPrice: number;
  image: string;
  description?: string;
  quantity: number;
};

export default function ProductCard({
  id,
  title,
  curPrice,
  prevPrice,
  image,
  description,
  quantity,
}: ProductCardProps) {
  const [productQuantity, setProductQuantity] = useState(quantity || 0);
  const { updateCartItem } = useCart();

  const handleIncrease = () => {
    const newQuantity = productQuantity + 1;
    setProductQuantity(newQuantity);
    updateCartItem({
      id,
      title,
      price: curPrice,
      image,
      quantity: newQuantity,
    });
  };
  const handleDecrease = () => {
    const newQuantity = productQuantity > 0 ? productQuantity - 1 : 0;
    setProductQuantity(newQuantity);
    updateCartItem({
      id,
      title,
      price: curPrice,
      image,
      quantity: newQuantity,
    });
  };
  return (
    <article className="flex flex-row gap-3 p-2.5 rounded-2xl outline-[1px] outline-[#DAD2C9]">
      <Image
        src={image.replace("../../public", "")}
        width={100}
        height={100}
        alt="product image"
        className="rounded-[10px] h-24 w-24 object-cover"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-1 items-start">
          <span className="text-zinc-800 text-base font-bold">{title}</span>
          <span className="text-zinc-800 text-xs font-normal">
            {description}
          </span>
        </div>
        <div className="flex flex-row justify-between items-sart w-full">
          <div className="flex flex-col items-start gap-1">
            <span className="text-orange-300 text-xs font-normal line-through">
              {prevPrice.toLocaleString("fa-IR")}
            </span>
            <span className="text-stone-600 text-xs font-bold ">
              {curPrice.toLocaleString("fa-IR")}
              <span className="px-0.5">هزار تومان</span>
            </span>
          </div>
          <div className="flex flex-row-reverse gap-2 items-center justify-between">
            <button onClick={handleDecrease}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 13.5V11.5H19V13.5H5Z" fill="#795D4C" />
              </svg>
            </button>
            <span className="leading-10 flex item-center justify-center pt-1">
              {productQuantity}
            </span>
            <button onClick={handleIncrease}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 14.5C11 13.9477 10.5523 13.5 10 13.5H6C5.44772 13.5 5 13.0523 5 12.5C5 11.9477 5.44772 11.5 6 11.5H10C10.5523 11.5 11 11.0523 11 10.5V6.5C11 5.94772 11.4477 5.5 12 5.5C12.5523 5.5 13 5.94772 13 6.5V10.5C13 11.0523 13.4477 11.5 14 11.5H18C18.5523 11.5 19 11.9477 19 12.5C19 13.0523 18.5523 13.5 18 13.5H14C13.4477 13.5 13 13.9477 13 14.5V18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5V14.5Z"
                  fill="#795D4C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
