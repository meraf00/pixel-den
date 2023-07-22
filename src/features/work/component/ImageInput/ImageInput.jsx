import { FileImageOutlined } from "@ant-design/icons";
import { useState } from "react";

export const ImageInput = ({ title, description, icon, onInputChange }) => {
  const [image, setImage] = useState(null);

  if (!icon) icon = <FileImageOutlined />;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

    onInputChange && onInputChange(image);
  };

  return (
    <div className="relative w-full h-full rounded-lg cursor-pointer">
      {image != null ? (
        <>
          <div className="absolute w-full h-full overflow-hidden hover:outline outline-gray-600 rounded-lg cursor-pointer">
            <img src={image} alt="Uploaded image" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <span className="text-5xl mb-10  cursor-pointer">{icon}</span>

            <span className="mb-2  cursor-pointer">{title}</span>
            <span className="font-extralight  cursor-pointer">
              {description}
            </span>
          </div>
          <input
            className="
    before:absolute
    before:border-4 before:border-gray-600 before:border-dashed 
    before:w-full before:h-full 
    before:rounded-lg before:text-center
    overflow-hidden w-0 h-0 before:cursor-pointer"
            type="file"
            accept="image/jpg,image/jpeg,image/pjpeg,image/png,image/apng,image/x-png,image/gif,image/webp,video/mp4,video/quicktime,video/webm"
            onChange={onImageChange}
          ></input>
        </>
      )}
    </div>
  );
};
