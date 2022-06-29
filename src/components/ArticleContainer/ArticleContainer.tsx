import React from "react";
import "./ArticleContainer.css";
import { getArticles } from "../../data/articles";
import { Link } from "react-router-dom";

const ArticleContainer: React.FC = () => {
  const articles = getArticles();
  const article_containers: JSX.Element[] = articles.map((arr) => {
    return (
      <div className="article-link" key={arr.id}>
        <Link to={`/articles/${arr.id}`}>{arr.title}</Link>
      </div>
    );
  });
  return <main>{article_containers}</main>;
};

export default ArticleContainer;
