// Generate required imports
import { ContentType } from "features/editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../Container";
import { BlockOutlined, FontSizeOutlined } from "@ant-design/icons";
import {
  faHeading,
  faImage,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

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
