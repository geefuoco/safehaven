import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./components/App";
import Article from "./components/ArticleContainer/Article/Article";
import ArticleContainer from "./components/ArticleContainer/ArticleContainer";
import Home from "./components/Home/Home";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticleContainer />} />
          <Route path="/articles/:id" element={<Article />} />
        </Route>
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
