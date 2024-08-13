import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../Pages/Layout";
import ErrorHandler from "../ErrorRoute/ErrorHandler";
import HomePage from "../Pages";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/About";
import ContributePage from "../Pages/Contribute";
import PrivateRoute from "../auth/PrivateRoute";
import LoginPage from "../Pages/Login";
import LearnLayout from "../Learn/Layout";
import QuickStartPage from "../Learn";
import ThinkingInReactPage from "../Learn/ThinkingInReact";
import InstallationPage from "../Learn/Installation";
import PageNotFound from "../Pages/PageNotFound";


const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <PrivateRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
              <ContributePage />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PrivateRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
              <LoginPage />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;