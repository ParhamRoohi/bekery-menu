"use client";
import React from "react";
import Image from "next/image";
import CartItem from "../../ui/cart/cart-item";
import img from "../../../public/images/cart-bg.png";
import { useCart } from "../../context/cart-context";

import Link from "next/link";
type CartItem = { id: number; title: string; price: number; quantity: number };

export default function Page() {
  const { cart, updateCartItem } = useCart();

  return (
    <>
      <section className="h-screen bg-[#FAF7F2] ">
        <Image
          priority={true}
          src={img}
          width={1000}
          height={1000}
          alt="image"
          className="h-48 w-full object-cover"
        />

        <main className="mt-10 h-full">
          <div className="flex flex-row items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <span className="text-stone-600 text-lg font-normal flex flex-row justify-center gap-1 items-center">
                سبد خرید
                {cart.length > 0 && (
                  <span className="text-stone-600 text-base font-normal w-5 h-5 flex items-center justify-center">
                    ({cart.length.toLocaleString("fa-IR")})
                  </span>
                )}
              </span>
            </div>
            <Link href={"/menu"}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.114 7.20799L0.868 12.454C0.774667 12.5473 0.66 12.5973 0.524 12.604C0.388 12.6107 0.266667 12.5607 0.16 12.454C0.0533332 12.3473 0 12.2293 0 12.1C0 11.9707 0.0533332 11.8527 0.16 11.746L5.406 6.49999L0.16 1.25399C0.0666665 1.16065 0.0166664 1.04599 0.00999975 0.909986C0.00333309 0.773986 0.0533332 0.652653 0.16 0.545986C0.266667 0.43932 0.384667 0.385986 0.514 0.385986C0.643333 0.385986 0.761333 0.43932 0.868 0.545986L6.114 5.79199L11.36 0.545986C11.4533 0.452653 11.5683 0.402653 11.705 0.395986C11.8403 0.389319 11.9613 0.43932 12.068 0.545986C12.1747 0.652653 12.228 0.770653 12.228 0.899986C12.228 1.02932 12.1747 1.14732 12.068 1.25399L6.822 6.49999L12.068 11.746C12.1613 11.8393 12.2113 11.9543 12.218 12.091C12.2247 12.2263 12.1747 12.3473 12.068 12.454C11.9613 12.5607 11.8433 12.614 11.714 12.614C11.5847 12.614 11.4667 12.5607 11.36 12.454L6.114 7.20799Z"
                  fill="#5C5643"
                />
              </svg>
            </Link>
          </div>

          <section className="flex flex-col gap-4 p-5 h-full overflow-auto">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                updateCartItem={updateCartItem}
              />
            ))}
          </section>
        </main>
      </section>
    </>
  );
}
