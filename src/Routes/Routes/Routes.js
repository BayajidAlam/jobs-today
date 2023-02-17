import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../pages/About/About";
import ApplicationPage from "../../pages/ApplicationPage/ApplicationPage";
import ContactUs from "../../pages/ContactUs/ContactUs";
import ErrorElement from "../../pages/ErrorElement/ErrorElement";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <ContactUs />,
      },
      {
        path: "/application",
        element: (
          <PrivateRoute>
            <ApplicationPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
