import React, { useRef } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { Anchor } from "components/Links";
import Input from "components/Input";
import { ButtonFilled } from "components/Button";
import Separator from "components/Separator";
import { useAuth } from "features/authentication";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signUp({
        firstName: firstNameRef?.current?.value,
        lastName: lastNameRef?.current?.value,
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
      });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
            <Input id="firstName" label="First name" inputRef={firstNameRef} />
            <Input id="lastName" label="Last name" inputRef={lastNameRef} />
          </div>
          <Input id="email" label="Email" type="email" inputRef={emailRef} />
          <Input
            id="password"
            label="Password"
            type="password"
            inputRef={passwordRef}
          />

          <div className="flex flex-col gap-5">
            <ButtonFilled onClick={handleSubmit}>Sign up</ButtonFilled>

            <Separator text="Or" />

            <ButtonFilled className="bg-blue-500 hover:bg-blue-700">
              <GoogleOutlined />
              <span className="px-3">Continue with google</span>
            </ButtonFilled>
          </div>
        </form>
      </div>
    </>
  );
}
