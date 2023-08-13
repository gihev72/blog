import BlogCard from "./BlogCard";


export default function RecentPost() {
  return (
    <section className=" max-w-6xl  grid relative grid-cols-1 place-content-center  lg:grid-cols-3 gap-x-8 gap-y-16 p-4 pt-16 md:grid-cols-2 sm:grid-cols-1" >
      <p className="absolute top-4 left-4 font-semibold text-2xl">Recent Blog Posts</p>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />

    </section>
  )
}
