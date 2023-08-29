import { getAllBlogs } from "@/lib/getAllBlogs";

import "highlight.js/styles/github-dark.css";

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <>
      <div className="  prose prose-md  dark:prose-invert">
        <article className=" max-w-5xl">{blogs}</article>
      </div>
    </>
  );
}
