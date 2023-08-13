
export default function Navbar() {
  return (
    <nav className="glass-bg w-full p-2 z-20 sticky top-0 text-white ">
      <section className="  mx-auto max-w-6xl flex items-center justify-between " >
        <p className="  text-2xl font-bold  ">MA Blog</p>
        <ul className=" flex justify-between gap-5 ">
          <li className=" "> Blogs </li>
          <li className=" "> Projects </li>
          <li className=" "> About </li>

          <input type="checkbox" name="" id="" /> { /* make new component for toggle swich and put it here*/}

        </ul>
      </section>
      
    </nav>
  )
}
