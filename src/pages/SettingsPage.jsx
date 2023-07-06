import Button from "components/Button";
import { useAuth } from "features/authentication";
import React from "react";
import { useNavigate } from "react-router-dom";

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
      <Button onClick={handleLogout}>Sign out</Button>
    </div>
  );
}
