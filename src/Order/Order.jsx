import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Order() {
  const loc = useLocation();
  // const [cartBook, setCartBook] = useState({
  //   arr: loc.state?.list,
  //   total: loc.state?.total,
  //   quan: loc.state?.quantity,
  // });

  console.log(loc.state?.list);

  return (
    <div>
      <h1>주문 페이지</h1>
    </div>
  );
}

export default Order;
