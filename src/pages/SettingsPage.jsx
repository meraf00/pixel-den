import Button from "components/Button";
import { useAuth } from "features/authentication";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "features/settings/";

export default function SettingsPage() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };  

  return (
    <div>
      <SideBar />
      {/* <Button onClick={handleLogout}>Sign out</Button> */}
      <Outlet />
    </div>
  );
}
