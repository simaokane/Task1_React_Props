import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { datas } from "./datas";
import Book from "./Book";

function BooList() {
  return (
    <section className="bookList">
      {datas.map((data, index) => {
        return <Book {...data} key={index}></Book>;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BooList />
  </React.StrictMode>
);
