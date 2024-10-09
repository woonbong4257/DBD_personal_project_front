import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
axios.defaults.withCredentials = true;

function BookDetail() {
  const loc = useLocation();
  const [bookInfo, setBookInfo] = useState({
    id: loc.state?.id,
    name: loc.state?.name,
    inven: loc.state?.inven,
    price: loc.state?.price,
  });
  console.log(bookInfo);

  function onClickBookToCart() {
    axios.post("http://localhost:4000/cart", { book: bookInfo }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <h1>도서상세페이지</h1>
      <ul>
        <li>
          도서명: {bookInfo.name} <br />
          재고량: {bookInfo.inven} <br />
          판매가: {bookInfo.price}
        </li>
      </ul>
      <button onClick={onClickBookToCart}>장바구니에 담기</button>
      <button>바로 주문하기</button>
    </div>
  );
}

export default BookDetail;
