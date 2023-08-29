import Blog from "@/models/blog";
import { connectToDB } from "./database";

import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

export const getBlogsById = async (id: string) => {
  try {
    await connectToDB();
    const blog = await Blog.findById(id);

    if (!blog) return null;

    const rawMDX = blog.description;

    const { frontmatter, content } = await compileMDX<{
      title: string;
      date: string;
      tags: string[];
    }>({
      source: rawMDX,

      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
              },
            ],
          ],
        },
      },
    });

    return content;
  } catch (error) {
    console.log(error);
    return null;
  }
};
