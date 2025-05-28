import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <h2 className="text-3xl text-center p-6 font-semibold">Books</h2>

      <Suspense fallback={<span>Loading .....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
