import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <main className="intro-summary">
      <p className="article-body">
        My name is Gianluca Fuoco. I am a full stack web developer and data
        scientist. Welcome to my safe haven. Here you will find my writings
        about topics that interest me including software engineering, date
        science, technology, and so much more.
      </p>
      <p className="article-body">
        You can view the currently published articles{" "}
        <a href="/articles">here</a>
      </p>
    </main>
  );
};

export default Home;
