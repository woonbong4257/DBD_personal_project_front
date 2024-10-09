import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Login from "./Login/Login";
import Book from "./Book/Book";
import BookDetail from "./Book/BookDetail";
import Cart from "./Cart/Cart";
import MyPage from "./MyPage/MyPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="/book/:bookid" element={<BookDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
