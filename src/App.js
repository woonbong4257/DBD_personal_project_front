import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
