import React, { useEffect } from "react";
import axios from "axios";

function Main() {
  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
    });
  });
  return (
    <div>
      <p>메인입니다.</p>
    </div>
  );
}

export default Main;
