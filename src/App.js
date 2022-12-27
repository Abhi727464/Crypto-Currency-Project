import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {

  var cursor;
  var cursorPointer;

  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });

    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursor.style.height = "0.5rem"),
        (cursor.style.width = "0.5rem"),
        (cursorPointer.style.height = "3rem"),
        (cursorPointer.style.width = "3rem")
      );
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursor.style.height = "0.3rem"),
        (cursor.style.width = "0.3rem"),
        (cursorPointer.style.height = "1.5rem"),
        (cursorPointer.style.width = "1.5rem")
      );
    });
  }, []);
  return (
    <>
      <div className="App">
        <div className="cursor" id="cursor" />
        <div className="cursor-pointer" id="cursor-pointer" />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<WishList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
