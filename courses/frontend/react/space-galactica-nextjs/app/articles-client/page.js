"use client";

import { articles } from "../articles";

const ArticlesClientPage = () => {
  return (
    <main>
      <h1>Articles - Client Side</h1>
      {articles.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </article>
      ))}
    </main>
  );
};

export default ArticlesClientPage;