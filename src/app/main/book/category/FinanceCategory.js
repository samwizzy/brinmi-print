import React from "react";
import { BookCard } from "@brinmi";

export default function FinanceCategory({ books }) {
  return (
    <div className="bg-white">
      <div className="text-center lg:text-left">
        <h2 className="text-xl text-gray-800 tracking-wide uppercase">
          Finance Books
        </h2>
      </div>

      <div className="mt-6">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
          {books.map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </dl>
      </div>
    </div>
  );
}
