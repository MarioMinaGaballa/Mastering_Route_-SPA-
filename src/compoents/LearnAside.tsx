import { NavLink } from "react-router-dom"


const LearnAside  = () => {
  return (
  <aside className="px-3">
   <nav className="my-7">
  <ul className="flex flex-col">
    <li className="hover:text-[#149eca] duration-200">
      <NavLink to="/learn" end>Quick Start</NavLink>
    </li>
    <li className="hover:text-[#149eca] duration-200">
      <NavLink to="/learn/thinking-in-react">Thinking in react</NavLink>
    </li>
    <li className="hover:text-[#149eca] duration-200">
      <NavLink to="/learn/installation">installation</NavLink>
    </li>
  </ul>
</nav>

  </aside>
  )
}

export default LearnAside