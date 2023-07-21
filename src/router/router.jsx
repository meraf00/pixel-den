import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ErrorPage from "pages/ErrorPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import SettingsPage from "pages/SettingsPage";
import ProtectedRoute from "layout/ProtectedRoute";
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";
import PaymentPage from "pages/PaymentPage";
import AssetsPage from "pages/AssetsPage";
import { ShareWorkPage } from "pages/ShareWorkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        path: "/sharework",
        element: <ShareWorkPage />,
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/settings/account" />,
          },
          {
            path: "/settings/account",
            element: <ProfilePage />,
          },
          {
            path: "/settings/payment",
            element: <PaymentPage />,
          },
          {
            path: "/settings/assets",
            element: <AssetsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
