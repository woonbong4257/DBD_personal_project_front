import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

function BookDetail() {
  const loc = useLocation();
  const nav = useNavigate();
  const [bookInfo, setBookInfo] = useState({
    id: loc.state?.id,
    name: loc.state?.name,
    inven: loc.state?.inven,
    price: loc.state?.price,
  });

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(loc.state?.price);

  function onClickBookToCart() {
    axios.post("http://localhost:4000/cart", { book: bookInfo }).then((res) => {
      console.log(res.data);
    });
  }
  function onClickDirect() {
    nav("/order", { state: { bookInfo, type: "direct" } });
  }

  function onClickPlus() {
    setQuantity(quantity + 1);
    // setTotal(bookInfo.price * quantity);
  }
  function onClickminus() {
    setQuantity(quantity - 1);
    // setTotal(bookInfo.price * quantity);
  }

  useEffect(() => {
    setTotal(bookInfo.price * quantity);
  }, [onClickPlus, onClickminus]);

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
      <div>수량: {quantity}</div>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickminus}>-</button>
      <div>금액: {total}</div>
      <button onClick={onClickBookToCart}>장바구니에 담기</button>
      <button onClick={onClickDirect}>바로 주문하기</button>
    </div>
  );
}

export default BookDetail;
