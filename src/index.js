import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Description from "./components/Main/Description";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Basket from "./components/Basket/Basket";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Description />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<h1>Упс... Щось пішло не так...</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
