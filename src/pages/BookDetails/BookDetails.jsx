import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";

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
    rating,
    publisher,
    totalPages,
    yearOfPublishing,
    tags,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoreDB(id);
  };

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
        <p>Number of Pages:{totalPages} </p>
        <p>Publisher: {publisher}</p>
        <p>Year of Publishing: {yearOfPublishing}</p>
        <p>Rating: {rating}</p>

        <Link to="/readList">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-accent m-2"
          >
            Mark as Read
          </button>
        </Link>
        <button className="btn btn-info m-2">Add To wishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
