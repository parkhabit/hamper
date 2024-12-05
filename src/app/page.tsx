"use client";

import Link from "next/link";
import hamperItems, { HamperItem } from "../data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <section className="bg-[#EFEBD1] h-[50%] flex flex-col items-center justify-center px-3">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#E15C41]">
          Merry Christmas
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-[#E15C41] pb-3">
          from Kitty & Duncan
        </h1>

        <h3 className="text-lg text-[#2B4339] flex justify-center text-center">
          We hope you&apos;re enjoying you very unique, one-of-a-kind, handmade,
          vegan, Christmas Hamper
        </h3>
      </section>
      <section className="bg-[#2B4339] flex flex-col items-center p-2 pt-6 ">
        <h3 className="text-2xl text-center pb-4">
          What&apos;s in the Christmas Hamper?
        </h3>
        <Image
          src={"/images/basket.png"}
          alt={"Image of a Christmas hamper"}
          width="400"
          height="400"
          style={{ borderRadius: 16 }}
        />
        <p className="text-center p-4 w-[50%]">
          {hamperItems.map((item: HamperItem) => (
            <span key={item.title} className="pr-3">
              &#x2022; {item.title}
            </span>
          ))}
          <span>&#x2022; A bottle of bubbly</span>
        </p>
      </section>
      <section className="bg-[#EFEBD1] h-[20%]">
        {/* scrolling section */}
      </section>
      <section className="bg-[#2B4339] p-6 flex justify-center">
        <div className="flex flex-col bg-[#2B4339] w-[60%] gap-60 pt-40 pb-40">
          {hamperItems.map((item: HamperItem) => (
            <div className="flex flex-row justify-between gap-3" key={item.key}>
              <div>
                <h3 className="text-[#EFEBD1] text-xl font-bold pb-4">
                  {item.title}
                </h3>
                <h4 className="text-[#EFEBD1] text-lg pb-2">Ingredients:</h4>
                <p className="text-[#EFEBD1]">
                  {item.ingredients.map((ingredient, i) => (
                    <span key={i}>{ingredient}, </span>
                  ))}
                </p>
                <h4 className="text-[#EFEBD1] text-lg pb-2 pt-4">
                  Serving suggestions
                </h4>
                <p className="text-[#EFEBD1]">{item.servingSuggestion}</p>
                {/* image here */}
                <p className="text-[#EFEBD1] pt-8">Want to make it yourself?</p>
                <Link
                  className="underline text-[#EFEBD1]"
                  href={{ pathname: "/hamper-item", query: { key: item.key } }}
                >
                  Check out the recipe
                </Link>
              </div>

              <div className="rounded ">
                <Image
                  src={`/images/${item.image}.png`}
                  width="300"
                  height="150"
                  alt={`illustration of ${item.title}`}
                  style={{ borderRadius: 16 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
