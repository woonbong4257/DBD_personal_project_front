import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/cart").then((res) => {
      setList(res.data);
    });
  }, []);
  console.log("cart: ", list);
  return (
    <div>
      <h1>장바구니</h1>
      <ul>
        {list.map((cart) => (
          <li key={cart.cart_list_id}>
            도서명: {cart.book_name} <br />
            가격: {cart.quantity * cart.price} <br />
            수량: {cart.quantity}
            <button>+</button>
            <button>-</button>
          </li>
        ))}
      </ul>
      <div>총액: </div>
      <button>구매하기</button>
    </div>
  );
}

export default Cart;
