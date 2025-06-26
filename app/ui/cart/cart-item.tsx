import React from "react";

type cartItemProps = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  updateCartItem: (item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }) => void;
};

export default function cartItem({
  id,
  title,
  price,
  quantity,
  updateCartItem,
}: cartItemProps) {
  return (
    <section className="flex flex-row justify-between">
      <div className="flex flex-col items-end gap-1">
        <span className="text-stone-600 text-sm font-bold flex justify-start w-full">
          {title}
        </span>
        <span className="text-orange-300 text-sm font-normal flex justify-start w-full">
          {price.toLocaleString("fa-IR")} هزار تومان
        </span>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <button
          onClick={() =>
            updateCartItem({ id, title, price, quantity: quantity + 1 })
          }
        >
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
        <span className="leading-10 flex item-center justify-center pt-1">
          {quantity}
        </span>
        <button
          onClick={() =>
            updateCartItem({ id, title, price, quantity: quantity - 1 })
          }
        >
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

        <button
          onClick={() => updateCartItem({ id, title, price, quantity: 0 })}
          className="ml-2"
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.616 15.885C2.168 15.885 1.78667 15.7277 1.472 15.413C1.15733 15.0983 1 14.7173 1 14.27V1.88499H0V0.88499H4V0.11499H10V0.88499H14V1.88499H13V14.27C13 14.73 12.846 15.1143 12.538 15.423C12.23 15.7317 11.8453 15.8857 11.384 15.885H2.616ZM12 1.88499H2V14.27C2 14.4493 2.05767 14.5967 2.173 14.712C2.28833 14.8273 2.436 14.885 2.616 14.885H11.385C11.5383 14.885 11.6793 14.821 11.808 14.693C11.9367 14.565 12.0007 14.4237 12 14.269V1.88499ZM4.808 12.885H5.808V3.88499H4.808V12.885ZM8.192 12.885H9.192V3.88499H8.192V12.885Z"
              fill="#6E6652"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
