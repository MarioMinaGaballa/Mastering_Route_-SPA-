import { Outlet } from "react-router-dom"
import NavBar from "../compoents/NavBar"


const RootLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    
    </>
  )
}

export default RootLayout