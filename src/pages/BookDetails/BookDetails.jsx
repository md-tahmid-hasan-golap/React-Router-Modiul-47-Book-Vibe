import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    // rating,
    // publisher,
    // totalPages,
    // yearOfPublishing,
    tags,
  } = singleBook;

  return (
    <div className="flex  items-center my-10">
      <div className="w-1/4 mx-auto bg-[#1313130D] p-10 rounded-md">
        <img className="" src={image} alt="" />
      </div>
      <div className="w-2/4 space-y-2">
        <h4 className="text-2xl font-medium">{bookName}</h4>
        <p>by : {author}</p>
        <p className="border border-gray-300"></p>
        <p>{category}</p>
        <p className="border border-gray-300"></p>
        <p>
          <b>review :</b> {review}
        </p>
        <div className="flex space-x-3">
          <h1>
            <b>Tag</b>
          </h1>
          {tags.map((tag) => (
            <p className="text-green-500">{tag}</p>
          ))}
        </div>
        <button className="btn btn-accent m-2">Read</button>
        <button className="btn btn-info m-2">wishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
