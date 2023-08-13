import Image from "next/image"
import Chip from "./Chip"

export default function BlogCard() {
  return (
    <article className="  flex flex-col h-max ">
      <Image src={"/demo01.jpg"} 
        height={500}
        width={500}
        alt="new image"
      />
      <p className=" text-violet-500 mt-4 mb-4 font-bold ">
        Sunday, 1 Jan 2023
      </p>
      <h3 className="font-bold text-lg mb-2">
        Building your API Stack
      </h3>
      <p className="text-gray-300 font-light">
        The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
      </p>
      <div className=" w-full pt-4 flex gap-2"  >
        <Chip title="developer" hue={290} />
        <Chip title="React" hue={181} />
      </div>
      
    </article>
  )
}
