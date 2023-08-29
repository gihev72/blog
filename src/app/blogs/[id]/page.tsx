// import { getAllBlogs } from "@/lib/getAllBlogs";
import { getBlogsById } from "@/lib/getBlogsById";
import { notFound } from "next/navigation";

import "highlight.js/styles/github-dark.css";

type Params = {
  params: {
    id: string;
  };
};

export default async function page({ params: { id } }: Params) {
  const blog = await getBlogsById(id);

  if (!blog) notFound();

  return (
    <main className="flex min-h-screen min-w-full flex-col  prose prose-md  dark:prose-invert items-center  p-12">
      <article className=" max-w-5xl">{blog}</article>
    </main>
  );
}
