import React, { useState } from "react";
import { EditFilled, SaveFilled } from "@ant-design/icons";
import { useAuth } from "features/authentication";

const ProfileForm = () => {
  const { user } = useAuth();
  const [displayNameEdit, setDisplayNameEdit] = useState(false);
  const [usernameEdit, setUsernameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);

  const toggleDisplayName = () => {
    setDisplayNameEdit((state) => !state);
  };
  const toggleUsername = () => {
    setUsernameEdit((state) => !state);
  };
  const toggleEmail = () => {
    setEmailEdit((state) => !state);
  };
  const togglePassword = () => {
    setPasswordEdit((state) => !state);
  };

  return (
    <form className="flex flex-col p-10 gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="fullname">Display name</label>
          <span className="flex" onClick={toggleDisplayName}>
            {displayNameEdit ? <SaveFilled /> : <EditFilled />}
          </span>
        </div>
        <input
          id="fullname"
          defaultValue={user.displayName}
          className="bg-transparent border-b border-b-primary-100 focus:border-b-white outline-none transition-color duration-300 flex-grow disabled:text-gray-400"
          disabled={!displayNameEdit}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="username">Username</label>
          <span className="flex" onClick={toggleUsername}>
            {usernameEdit ? <SaveFilled /> : <EditFilled />}
          </span>
        </div>
        <input
          id="username"
          className="bg-transparent border-b border-b-primary-100 focus:border-b-white outline-none transition-color duration-300 flex-grow disabled:text-gray-400"
          disabled={!usernameEdit}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="email">Email</label>
          <span className="flex" onClick={toggleEmail}>
            {emailEdit ? <SaveFilled /> : <EditFilled />}
          </span>
        </div>
        <input
          id="email"
          type="email"
          className="bg-transparent border-b border-b-primary-100 focus:border-b-white outline-none transition-color duration-300 flex-grow disabled:text-gray-400"
          disabled={!emailEdit}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label htmlFor="password">Password</label>
          <span className="flex" onClick={togglePassword}>
            {passwordEdit ? <SaveFilled /> : <EditFilled />}
          </span>
        </div>
        <input
          id="password"
          type="password"
          defaultValue="........"
          className="bg-transparent border-b border-b-primary-100 focus:border-b-white outline-none transition-color duration-300 flex-grow disabled:text-gray-400"
          disabled={!passwordEdit}
        />
      </div>
    </form>
  );
};

export default ProfileForm;
