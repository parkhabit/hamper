"use client";

import { useSearchParams } from "next/navigation";
import hamperItems from "../../data";

export default function HamperItem() {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  const item = hamperItems.filter((i) => i.key === key)[0];

  return (
    <div className="bg-[#EFA3A6] min-h-full p-2 w-full">
      <h1 className="text-[#E15C41] text-3xl font-extrabold flex pt-8 pb-8">
        {item.title}
      </h1>
      <div className="">
        <div>
          <p className="text-[#E15C41] text-1xl font-extrabold">Ingredients:</p>
          <ul className="text-[#E15C41]">
            {item.ingredients.map((ingredient, i) => (
              <li key={i}>&#x2022; {ingredient}</li>
            ))}
          </ul>

          <p className="text-[#E15C41] text-1xl font-extrabold pt-4">Method:</p>
          <ol className="text-[#E15C41]">
            {item.method.map((step, i) => (
              <li key={i}>
                {i + 1}. {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="hidden md:flex">{/* image */}</div>
      </div>
    </div>
  );
}
