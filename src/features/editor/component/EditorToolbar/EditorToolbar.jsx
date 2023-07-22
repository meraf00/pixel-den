import { useState } from "react";
import {
  FontSizeOutlined,
  FormatPainterFilled,
  SlidersOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { ContentType } from "features/editor";

const preventDefault = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const GalleryToolbar = () => {
  return (
    <div
      className="fixed top-0 right-0
      mx-4 md:mx-10 lg:mx-20 my-20
      px-4
      w-3/12 
      border rounded-xl shadow-xl shadow-gray-800
      bg-white
      text-black"
    >
      <div className="flex items-center gap-4 text-lg font-semibold p-3">
        <span className="flex items-center text-xl">
          <SlidersOutlined />
        </span>
        <span className="flex items-center">Gallery</span>
      </div>
    </div>
  );
};

export const ImageToolbar = () => {
  return (
    <div
      className="fixed top-0 right-0
      mx-4 md:mx-10 lg:mx-20 my-20
      px-4
      w-3/12 
      border rounded-xl shadow-xl shadow-gray-800
      bg-white
      text-black"
    >
      <div className="flex items-center gap-4 text-lg font-semibold p-3">
        <span className="flex items-center text-xl">
          <FileImageOutlined />
        </span>
        <span className="flex items-center">Image</span>
      </div>
    </div>
  );
};

export const TextToolbar = ({ bold, italic, underline, styleHandler }) => {
  return (
    <div
      className="fixed top-0 right-0
  mx-4 md:mx-10 lg:mx-20 my-20
  px-4
  w-3/12 
  border rounded-xl shadow-xl shadow-gray-800
  bg-white
  text-black"
    >
      <div className="flex items-center gap-4 text-lg font-semibold p-3">
        <span className="flex items-center text-xl">
          <FontSizeOutlined />
        </span>
        <span className="flex items-center">Text</span>
      </div>

      <div className="flex flex-col gap-3 my-3 p-3">
        <span>Font style</span>
        <div className="grid grid-cols-3 text-lg border-4 rounded-2xl overflow-hidden">
          <button
            onMouseDown={preventDefault}
            onClick={() => styleHandler("BOLD")}
            className={
              "font-bold px-3 py-2 text-center " + (bold ? "bg-primary-0" : "")
            }
          >
            B
          </button>
          <button
            onMouseDown={preventDefault}
            onClick={() => styleHandler("ITALIC")}
            className={
              "italic px-3 py-2 text-center border-l-4 border-r-4 " +
              (italic ? "bg-primary-0" : "")
            }
          >
            I
          </button>
          <button
            onMouseDown={preventDefault}
            onClick={() => styleHandler("UNDERLINE")}
            className={
              "underline px-3 py-2 text-center " +
              (underline ? "bg-primary-0" : "")
            }
          >
            U
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-3 p-3">
        <span>List</span>
        <div className="grid grid-cols-3 border-4 rounded-2xl overflow-hidden text-sm">
          <button
            onMouseDown={preventDefault}
            className={
              "p-3 text-center text-ellipsis overflow-hidden " +
              (bold ? "bg-primary-0" : "")
            }
          >
            None
          </button>
          <button
            onMouseDown={preventDefault}
            className={
              "p-3 text-center border-l-4 border-r-4 text-ellipsis overflow-hidden " +
              (italic ? "bg-primary-0" : "")
            }
          >
            Unordered
          </button>
          <button
            onMouseDown={preventDefault}
            className={
              "p-3 text-center text-ellipsis overflow-hidden " +
              (underline ? "bg-primary-0" : "")
            }
          >
            Ordered
          </button>
        </div>
      </div>
    </div>
  );
};

export const EditorToolbar = ({ _type, styleHandler }) => {
  const type = ContentType.text;
  if (type == ContentType.text)
    return <TextToolbar styleHandler={styleHandler} />;
  if (type == ContentType.image) return <ImageToolbar />;
  if (type == ContentType.gallery) return <GalleryToolbar />;
};
