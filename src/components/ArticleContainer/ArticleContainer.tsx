import React from "react";
import "./ArticleContainer.css";
import { getArticles } from "../../data/articles";
import { Link } from "react-router-dom";

const ArticleContainer: React.FC = () => {
  const articles = getArticles();
  const article_containers: JSX.Element[] = articles.map((arr) => {
    return (
      <div className="article-link" key={arr.id}>
        - <Link to={`/articles/${arr.id}`}>{arr.title}</Link> (
        {arr.date.toLocaleDateString("en-US")})
      </div>
    );
  });
  return (
    <main className="article-container">
      <h2 className="article-title">Latest Articles</h2>
      {article_containers}
    </main>
  );
};

export default ArticleContainer;
