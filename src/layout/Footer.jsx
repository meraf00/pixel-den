import React from "react";
import {
  TwitterOutlined,
  DribbbleOutlined,
  InstagramOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="mt-10 border-t border-t-primary-100 
    mx-4 md:mx-10 lg:mx-20 py-4 
    flex justify-between flex-col-reverse md:flex-row items-center"
    >
      <span className="opacity-75 font-thin mt-5 md:m-0">
        &copy; {new Date().getFullYear()} Pixel Den.
      </span>

      <div className="flex items-center justify-between w-full md:w-fit gap-5 text-xl">
        <Link
          to="https://twitter.com"
          className="flex items-center opacity-75 hover:opacity-100 hover:-translate-y-2 transition-transform duration-300"
        >
          <TwitterOutlined />
        </Link>
        <Link
          to="https://facebook.com"
          className="flex items-center opacity-75 hover:opacity-100 hover:-translate-y-2 transition-transform duration-300"
        >
          <FacebookFilled />
        </Link>
        <Link
          to="https://instagram.com"
          className="flex items-center opacity-75 hover:opacity-100 hover:-translate-y-2 transition-transform duration-300"
        >
          <InstagramOutlined />
        </Link>
        <Link
          to="https://dribbble.com"
          className="flex items-center opacity-75 hover:opacity-100 hover:-translate-y-2 transition-transform duration-300"
        >
          <DribbbleOutlined />
        </Link>
      </div>
    </div>
  );
}
