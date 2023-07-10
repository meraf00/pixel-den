import { FolderAddFilled, LikeFilled } from "@ant-design/icons";
import { Image, ImagePlaceholder } from "components/Image";
import React from "react";

export default function Card(props) {
  const onLike = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (props.onLike) props.onLike();
  };

  const onSave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (props.onSave) props.onSave();
  };

  return (
    <div
      className="group relative rounded-xl shadow-lg shadow-primary-500 overflow-hidden cursor-pointer"
      onClick={() => console.log("helo")}
    >
      {/* image */}
      <Image src={props.imgUrl} alt="Card background" className="h-full w-full">
        <ImagePlaceholder />
      </Image>

      {/* hover descirption */}
      <div className="absolute flex items-center justify-between -bottom-20 group-hover:bottom-0 px-5 py-2 w-full backdrop-blur bg-primary-500 bg-opacity-30 transition-all duration-500">
        <span>{props.title}</span>

        <div className="flex gap-3 items-center text-lg">
          <span
            className="hover:bg-secondary-300 flex items-center p-2 rounded-lg transition-color duration-500 md:hover:-translate-y-2"
            onClick={onLike}
          >
            <LikeFilled />
          </span>
          <span
            className="hover:bg-secondary-300 flex items-center p-2 rounded-lg transition-color duration-500 md:hover:-translate-y-2"
            onClick={onSave}
          >
            <FolderAddFilled />
          </span>
        </div>
      </div>

      {/* description */}
    </div>
  );
}
