import { useState } from "react";
import {
  SlidersOutlined,
  FileImageOutlined,
  FontSizeOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import { Content, ContentType } from "features/editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faImage,
  faHeading,
  faImagePortrait,
  faImages,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

const preventDefault = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const Container = ({ title, titleIcon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        `
  fixed z-10
  left-0 bottom-0 
  lg:top-24 lg:right-0  lg:bottom-auto lg:left-auto
  px-4  
  lg:mx-20 
  w-full
  lg:w-3/12   
  max-h-[30%] lg:max-h-none
  border shadow-xl shadow-gray-800
  rounded-t-xl lg:rounded-xl
  bg-white
  text-black  
   scrollbar-light
  ` + (open ? "overflow-auto " : "overflow-hidden ")
      }
    >
      <button
        className={
          "absolute right-0 py-4 mr-6 lg:hidden transition-transform duration-300 " +
          (open ? "" : "rotate-180")
        }
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className="flex items-center gap-4 text-lg font-semibold p-3">
        <span className="flex items-center text-xl">{titleIcon}</span>
        <span className="flex items-center">{title}</span>
      </div>
      <div className={open ? "h-full" : "h-0 lg:h-full"}>{children}</div>
    </div>
  );
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
    <Container titleIcon={<FontSizeOutlined />} title="Text">
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
    </Container>
  );
};

export const InsertBlockToolbar = ({ createBlock }) => {
  return (
    <Container title={"Insert block"} titleIcon={<BlockOutlined />}>
      <div className="flex flex-col px-7 mb-4">
        <button
          className="
        flex gap-4 items-center text-gray-700 hover:text-black
        transition-color duration-300
        text-start py-3 border-b border-b-gray-300"
          onClick={() => createBlock(ContentType.heading)}
        >
          <FontAwesomeIcon icon={faHeading} />
          Header
        </button>
        <button
          className="
        flex gap-4 items-center text-gray-700 hover:text-black
        transition-color duration-300
        text-start py-3 border-b border-b-gray-300"
          onClick={() => createBlock(ContentType.text)}
        >
          <FontSizeOutlined />
          Text
        </button>
        <button
          className="
        flex gap-4 items-center text-gray-700 hover:text-black
        transition-color duration-300
        text-start py-3 border-b border-b-gray-300"
          onClick={() => createBlock(ContentType.image)}
        >
          <FontAwesomeIcon icon={faImage} />
          Image
        </button>
        <button
          className="
        flex gap-4 items-center text-gray-700 hover:text-black
        transition-color duration-300
        text-start py-3"
          onClick={() => createBlock(ContentType.gallery)}
        >
          <FontAwesomeIcon icon={faImages} />
          Gallery
        </button>
      </div>
    </Container>
  );
};

export const EditorToolbar = ({
  showInsertToolbar,
  element,
  inlineStyleHandler,
  blockStyleHandler,
  createBlockHandler,
}) => {
  if (!element) {
    if (showInsertToolbar) {
      return <InsertBlockToolbar createBlock={createBlockHandler} />;
    }
    return;
  }
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
