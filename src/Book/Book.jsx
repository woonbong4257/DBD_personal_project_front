import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Book() {
  const [bookList, setBookList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/book").then((res) => {
      setBookList(res.data);
    });
  }, []);

  function onClickBook(book) {
    nav(`/book/${book.book_id}`, {
      state: {
        id: book.book_id,
        name: book.book_name,
        inven: book.inventory,
        price: book.price,
      },
    });
  }

  return (
    <div>
      <h1>도서목록</h1>
      <ul>
        {bookList.map((book) => (
          <li key={book.book_id} onClick={() => onClickBook(book)}>
            {book.book_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
