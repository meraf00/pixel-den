import { UserOutlined, EditFilled } from "@ant-design/icons";
import CircularAvatar from "components/CircularAvatar";
import { useAuth } from "features/authentication";
import { ProfileForm } from "features/user";
import React from "react";

export default function ProfilePage() {
  const { user } = useAuth();
  return (
    <div className="px-3 md:ml-96 mt-4">
      {/* Setting title */}
      <div className="flex gap-4 items-center mb-10">
        <span className="flex items-center font-semibold">
          <UserOutlined />
        </span>
        <span className="flex items-center font-medium text-lg md:text-xl">
          Account settings
        </span>
      </div>

      {/* Profile name, username, image */}
      <div className="flex mb-10 items-center gap-8">
        <div className="relative">
          <CircularAvatar letter="A" />
          <div className="absolute top-0 right-0 -translate-y-2 translate-x-1 hover:scale-110">
            <EditFilled />
          </div>
        </div>

        <div className="flex flex-col">
          <span>{user.displayName}</span>
          <span className="font-extralight">@albertim</span>
        </div>
      </div>

      <div className="max-w-2xl bg-primary-100 bg-opacity-20 shadow rounded-lg">
        <ProfileForm />
      </div>
    </div>
  );
}
