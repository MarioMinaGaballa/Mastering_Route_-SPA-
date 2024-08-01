import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import HomePage from "../Pages";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/ContactPage";
import RootLayout from "../Pages/Layout";
import QuickStartPage from "../Learn";
import LearnLayout from "../Learn/Layout";
import ThinkingInReact from "../Learn/ThinkingInReact.tsx";
import Installation from "../Learn/Installation.tsx";
import Contribute from "../Pages/Contribute.tsx";
import Login from './../Pages/Login';


const isloggedIn=false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contribute" element={isloggedIn? <Contribute /> : <Navigate to={"/login"}/>} />
        <Route path="login" element={!isloggedIn? <Login/> : <Navigate to={"/contribute"}/>} />
      </Route>
      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact/>} />
        <Route path="installation" element={<Installation/>} />
        <Route path="contribute" element={<Contribute/>} />
      </Route>

    
    
    </>
  )
);

export default router;
