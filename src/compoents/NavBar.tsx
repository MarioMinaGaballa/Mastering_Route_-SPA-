import { Link } from "react-router-dom"
const NavBar= () => {
  return (
<nav className="max-w-sm mx-auto my-7">
  <ul className="flex items-center justify-between">
    <li className="hover:text-[#149eca] duration-200">
      <Link to="/">Home</Link>
    </li>
    <li className="hover:text-[#149eca] duration-200">
      <Link to="/contact">Contact</Link>
    </li>
    <li className="hover:text-[#149eca] duration-200">
      <Link to="/about">About Us</Link>
    </li>
  </ul>
</nav>
  )
}

export default NavBar