import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../Pages";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/ContactPage";
import RootLayout from "../Pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/nav" element={<h3><NavBar/></h3>} /> */}
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="contact" element={<ContactPage/>} />
      </Route>
    </>
  )
);

export default router;
