import {
  createBrowserRouter,
  createRoutesFromElements,
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
import Login from "./../Pages/Login";
import PrivateRoute from "../auth/PrivateRoute.tsx";
import ErrorRouteHandler from "../ErrorRoute/ErrorHandler.tsx";

const isloggedIn = true;
const userData:{email:string} | null =isloggedIn ?{email :"email@gmail.com"} :null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}  errorElement={<ErrorRouteHandler/>}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="contribute"
          element={
            <PrivateRoute isAllowed={isloggedIn} redirectPath="/login" data={userData}>
              <Contribute />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
          <PrivateRoute isAllowed={!isloggedIn} redirectPath="/contribute" data={userData}>
             <Login/>
          </PrivateRoute>}
        />
      </Route>
      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
        <Route path="contribute" element={<Contribute />} />
      </Route>
    </>
  )
);

export default router;
