import React from "react";

type cartItemProps = {
  title: string;
  price: number;
  quantity: number;
};

export default function cartItem({ title, price, quantity }: cartItemProps) {
  return (
    <section className="flex flex-row justify-between">
      <div className="flex flex-col items-end gap-1">
        <span className="text-stone-600 text-sm font-bold">{title}</span>
        <span className="text-orange-300 text-sm font-normal">
          {(price + 25000).toLocaleString("fa-IR")}
        </span>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <button>
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
          {quantity}
        </span>
        <button>
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
    </section>
  );
}
