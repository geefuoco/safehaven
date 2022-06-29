import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Article from "./components/ArticleContainer/Article/Article";
import ArticleContainer from "./components/ArticleContainer/ArticleContainer";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="articles" element={<ArticleContainer />} />
          <Route path="/articles/:id" element={<Article />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
