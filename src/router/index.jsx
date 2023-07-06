import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "pages/ErrorPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import SettingsPage from "pages/SettingsPage";
import ProtectedRoute from "layout/ProtectedRoute";
import HomePage from "pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
