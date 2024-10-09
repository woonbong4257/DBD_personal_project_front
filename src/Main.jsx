import React, { useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

function Main() {
  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
    });
  });
  return (
    <div>
      <h1>메인입니다.</h1>
    </div>
  );
}

export default Main;
