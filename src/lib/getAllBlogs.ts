import Blog from "@/models/blog";
import { connectToDB } from "./database";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

export const getAllBlogs = async (page: number = 1, limit: number = 5) => {
  const skip = page - 1;
  try {
    await connectToDB();
    const blogs = await Blog.find({}).skip(skip).limit(limit);
    // console.log(blogs.toString());

    const rawMDX = blogs[1].description;

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
  }
};
