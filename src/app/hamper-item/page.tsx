"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import hamperItems from "../../data";

export default function HamperItem() {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  const item = hamperItems.filter((i) => i.key === key)[0];

  return (
    <div className="bg-[#EFA3A6] min-h-full p-2 w-full flex flex-row pl-6">
      <div className="flex-1">
        <h1 className="text-[#E15C41] text-3xl font-extrabold flex pt-8 pb-8">
          {item.title}
        </h1>

        <div>
          <p className="text-[#E15C41] text-1xl font-extrabold">Ingredients:</p>
          <ul className="text-[#E15C41] font-bold">
            {item.ingredients.map((ingredient, i) => (
              <li key={i}>&#x2022; {ingredient}</li>
            ))}
          </ul>

          <p className="text-[#E15C41] text-1xl font-extrabold pt-4">Method:</p>
          <ol className="text-[#E15C41] font-bold">
            {item.method.map((step, i) => (
              <li key={i}>
                {i + 1}. {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex-1 hidden md:flex items-start pt-32">
        <Image
          src={`/images/${item.image}.png`}
          width="300"
          height="150"
          alt={`illustration of ${item.title}`}
          style={{ borderRadius: 16 }}
        />
      </div>
    </div>
  );
}
