import { Outlet } from "react-router-dom";
import LearnAside from "../compoents/LearnAside";
import Navbar from "../compoents/NavBar";


const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <LearnAside />

      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;