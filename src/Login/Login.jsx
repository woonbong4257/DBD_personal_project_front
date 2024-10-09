import axios from "axios";
import React, { useState } from "react";

axios.defaults.withCredentials = true;

function Login() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  function onChangeLogin(e) {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  function onClickLogin() {
    try {
      axios
        .post("http://localhost:4000/login", { user: userInfo })
        .then((res) => {
          console.log(res.data);
          window.location.replace("/");
        });
    } catch {
      console.error();
    }
  }

  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="아이디"
        onChange={onChangeLogin}
        name="id"
        value={userInfo.id}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={onChangeLogin}
        name="pw"
        value={userInfo.pw}
      />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}

export default Login;
