// Generate required imports
import { SlidersOutlined } from "@ant-design/icons";


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
