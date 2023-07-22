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

export const TextToolbar = ({
  editorState,
  inlineStyleHandler,
  blockStyleHandler,
}) => {
  const fontStyle = editorState.getCurrentInlineStyle();

  const currentSelection = editorState.getSelection();
  const blockKey = currentSelection.getStartKey();
  const currentBlock = editorState.getCurrentContent().getBlockForKey(blockKey);

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
            onClick={() => inlineStyleHandler("BOLD")}
            className={
              "font-bold px-3 py-2 text-center " +
              (fontStyle.has("BOLD") ? "bg-primary-0" : "")
            }
          >
            B
          </button>
          <button
            onMouseDown={preventDefault}
            onClick={() => inlineStyleHandler("ITALIC")}
            className={
              "italic px-3 py-2 text-center border-l-4 border-r-4 " +
              (fontStyle.has("ITALIC") ? "bg-primary-0" : "")
            }
          >
            I
          </button>
          <button
            onMouseDown={preventDefault}
            onClick={() => inlineStyleHandler("UNDERLINE")}
            className={
              "underline px-3 py-2 text-center " +
              (fontStyle.has("UNDERLINE") ? "bg-primary-0" : "")
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
            onClick={() => blockStyleHandler("unstyled")}
            className={
              "p-3 text-center text-ellipsis overflow-hidden " +
              (currentBlock.getType() == "unstyled" ? "bg-primary-0" : "")
            }
          >
            None
          </button>
          <button
            onMouseDown={preventDefault}
            onClick={() => blockStyleHandler("unordered-list-item")}
            className={
              "p-3 text-center border-l-4 border-r-4 text-ellipsis overflow-hidden " +
              (currentBlock.getType() == "unordered-list-item"
                ? "bg-primary-0"
                : "")
            }
          >
            Unordered
          </button>
          <button
            onMouseDown={preventDefault}
            onClick={() => blockStyleHandler("ordered-list-item")}
            className={
              "p-3 text-center text-ellipsis overflow-hidden " +
              (currentBlock.getType() == "ordered-list-item"
                ? "bg-primary-0"
                : "")
            }
          >
            Ordered
          </button>
        </div>
      </div>
    </div>
  );
};

export const EditorToolbar = ({
  element,
  inlineStyleHandler,
  blockStyleHandler,
}) => {
  if (!element) return;
  if (element.type == ContentType.text)
    return (
      <TextToolbar
        inlineStyleHandler={inlineStyleHandler}
        blockStyleHandler={blockStyleHandler}
        editorState={element.editorState}
      />
    );
  if (element.type == ContentType.image) return <ImageToolbar />;
  if (element.type == ContentType.gallery) return <GalleryToolbar />;
};
