import React from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../../data/articles";
import "./Article.css";

const Article: React.FC = () => {
  let params = useParams();
  let article = getArticle(parseInt(params.id as string));

  const body = article?.body.split("<split>").map((str, i) => {
    if (str.trim().startsWith("//")) {
      return undefined;
    } else if (str.trim().startsWith("#")) {
      let size = Number(str[2]);
      // console.log(`header_${i}`);
      switch (size) {
        case 1:
          return (
            <h1 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h1>
          );
        case 2:
          return (
            <h2 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h2>
          );
        case 3:
          return (
            <h3 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h3>
          );
        case 4:
          return (
            <h4 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h4>
          );
        case 5:
          return (
            <h5 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h5>
          );
        case 6:
          return (
            <h6 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h6>
          );
        default:
          return (
            <h3 className="article-subheading" key={`header_${i}`}>
              {str.slice(3)}
            </h3>
          );
      }
    } else if (str.trim().startsWith("==")) {
      const content = str.slice(3);
      const split = content.split("-");
      const paragraph = (
        <p className="article-body" key={`paragraph_${i}`}>
          {split[0]}
        </p>
      );
      // console.log(`paragraph_${i}`);
      let elements: JSX.Element[] = [];
      let count = 1;
      for (let li of split.slice(1)) {
        count++;
        elements.push(
          <li className="article-body" key={`inner_list_${i + count}`}>
            {li}
          </li>
        );
        // console.log(`inner_list_${i + count}`);
      }
      // console.log(`list_${i}`);
      return (
        <>
          {paragraph}
          <ul key={`list_${i}`}>{elements}</ul>
        </>
      );
    } else {
      // console.log(`paragraph_${i}`);
      return (
        <p className="article-body" key={`paragraph_${i}`}>
          {str}
        </p>
      );
    }
  });

  return (
    <article>
      {(article && (
        <>
          <h3 className="article-title">{article.title}</h3>
          {body}
        </>
      )) || <h1>Article Not Found</h1>}
    </article>
  );
};

export default Article;
