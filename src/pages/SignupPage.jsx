import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { Anchor } from "components/Links";
import Input from "components/Input";
import Button from "components/Button";
import Separator from "components/Separator";
import Navbar from "layout/Navbar";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:justify-center md:h-screen p-5 mt-4 md:px-10 md:mx-10">
        <h1 className="font-semibold text-4xl md:text-5xl">
          Create new account
        </h1>

        <p className="text-sm text-gray-300 my-10">
          Already A Member?{" "}
          <Anchor to="/login" className="font-bold">
            Sign In
          </Anchor>
        </p>

        <form className="flex flex-col gap-3 sm:w-full md:w-8/12 lg:w-6/12 xl:w-5/12">
          <div className="flex gap-3 xs:flex-col flex-col  md:flex-row">
            <Input id="firstName" label="First name" />
            <Input id="lastName" label="Last name" />
          </div>
          <Input id="email" label="Email" type="email"/>
          <Input id="password" label="Password" type="password" />

          <div className="flex flex-col gap-5">
            <Button>Sign up</Button>

            <Separator text="Or" />

            <Button className="bg-blue-500 hover:bg-blue-700">
              <GoogleOutlined />
              <span className="px-3">Continue with google</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
