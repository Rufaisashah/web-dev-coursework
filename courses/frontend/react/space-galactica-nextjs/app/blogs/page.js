import Link from "next/link";

const blogs = [
  { slug: "my-first-post", title: "My First Post" },
  { slug: "space-exploration", title: "Space Exploration" },
  { slug: "life-on-mars", title: "Life On Mars" },
  { slug: "the-moon-landing", title: "The Moon Landing" },
];

const BlogsPage = () => {
  return (
    <main>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogsPage;