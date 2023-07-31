import { FileImageOutlined } from "@ant-design/icons";
import { useState } from "react";

export const ImageInput = ({
  title,
  description,
  icon,
  onInputChange,
  currentImage,
  inputRefs,
  index,
}) => {
  const [image, setImage] = useState(currentImage);

  if (!icon) icon = <FileImageOutlined />;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

    onInputChange && onInputChange(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="relative w-full h-full rounded-lg cursor-pointer">
      {image ? (
        <>
          <div className="absolute w-full h-full overflow-hidden hover:outline outline-gray-600 rounded-lg cursor-pointer flex items-center">
            <img src={image} alt="Uploaded image" />
          </div>
        </>
      ) : null}

      <>
        <div
          className={
            "absolute w-full h-full flex flex-col items-center justify-center cursor-pointer " +
            (image ? "hidden" : "")
          }
        >
          <span className="text-5xl mb-10 cursor-pointer">{icon}</span>

          <span className="mb-2  cursor-pointer">{title}</span>
          <span className="font-extralight px-4 text-center cursor-pointer">
            {description}
          </span>
        </div>
        <input
          ref={(el) => {
            inputRefs.current[index] = el;
            console.log(el);
          }}
          className={
            `
    before:absolute
    before:border-4 before:border-gray-600 before:border-dashed 
    before:w-full before:h-full 
    before:rounded-lg before:text-center
    overflow-hidden w-0 h-0 before:cursor-pointer ` + (image ? "hidden" : "")
          }
          type="file"
          accept="image/jpg,image/jpeg,image/pjpeg,image/png,image/apng,image/x-png,image/gif,image/webp,video/mp4,video/quicktime,video/webm"
          onChange={onImageChange}
        ></input>
      </>
    </div>
  );
};
