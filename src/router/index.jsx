import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "pages/ErrorPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;
