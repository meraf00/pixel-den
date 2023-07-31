// Generate required imports
import { FileImageOutlined } from "@ant-design/icons";
import { ToolbarContainer } from "../Container/";
import { preventDefault } from "utils";

export const ImageToolbar = ({ image, alt, triggerImageInput }) => {
  return (
    <ToolbarContainer titleIcon={<FileImageOutlined />} title="Image">
      <div className="flex flex-col gap-8 my-3 p-3">
        <div className="flex flex-col gap-2 overflow-hidden">
          {image && (
            <div className="w-full min-h-[150px] rounded-xl border-4 overflow-hidden">
              <img src={image} alt={alt} />
            </div>
          )}
          <button
            onMouseDown={preventDefault}
            onClick={triggerImageInput}
            className="flex-grow rounded-xl border-4 py-2 text-center hover:bg-gray-200 transition-colors duration-300"
          >
            {image ? "Change" : "Add image"}
          </button>
        </div>
        <div className="flex flex-col gap-2 overflow-hidden">
          <span>Alt text</span>
          <input
            // onMouseDown={preventDefault}
            // onClick={() => console.log("change image")}
            className="flex-grow border-b-2 py-2 focus:border-b-secondary-0 transition-colors duration-300 outline-none"
            placeholder="Alternative text"
          />
        </div>
      </div>
    </ToolbarContainer>
  );
};
