import { articles } from "../articles";

const ArticlesServerPage = () => {
  return (
    <main>
      <h1>Articles - Server Side</h1>
      {articles.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </article>
      ))}
    </main>
  );
};

export default ArticlesServerPage;