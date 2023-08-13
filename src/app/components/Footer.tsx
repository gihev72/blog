
export default function Footer() {
  return (
    <footer className="w-full flex flex-col place-content-center pb-8 pt-4">
      <ul className="flex flex-col md:flex-row place-content-center text-xl gap-3 md:gap-8 text-center ">
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Email</li>
        <li>Instagram</li>
      </ul>

      <p className=" text-md text-gray-300 self-center mt-4 inline">&#169; 2023</p>
    </footer>
  )
}
