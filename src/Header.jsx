import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

function Header() {
  const nav = useNavigate();
  const [isLogIn, setIsLogIn] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/state").then((res) => {
      console.log(res.data);
      setIsLogIn(res.data);
    });
  }, [isLogIn]);

  function onClickMain() {
    nav("/");
  }

  function onClickLogin() {
    if (isLogIn.length > 0) {
      alert("로그인 되어 있는 상태");
    } else {
      nav("/login");
    }
  }
  function onClickLogout() {
    axios.post("http://localhost:4000/logout").then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  }
  function onClickBook() {
    nav("/book");
  }
  function onClickCart() {
    nav("/cart");
  }
  return (
    <div>
      <span onClick={onClickMain}>메인페이지 </span>
      <span onClick={onClickLogin}>로그인 </span>
      <span onClick={onClickBook}>도서목록 </span>
      <span onClick={onClickCart}>장바구니 </span>
      <span>주문목록 </span>
      <span>마이페이지 </span>
      <span onClick={onClickLogout}>로그아웃 </span>
    </div>
  );
}

export default Header;
