import LearnAside from "../compoents/LearnAside"
import NavBar from "../compoents/NavBar"
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <LearnAside/>
      <Outlet/>
      </div>
  )
}

export default Layout