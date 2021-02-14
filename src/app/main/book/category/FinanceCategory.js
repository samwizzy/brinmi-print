import React from "react";
import _ from "lodash";
import { BookCard } from "@brinmi";

export default function FinanceCategory() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className=" text-2xl text-gray-800 font-semibold tracking-wide uppercase">
            Finance Books
          </h2>
        </div>

        <div className="mt-6">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {_.range(0, 4).map((item, i) => (
              <BookCard key={i} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
