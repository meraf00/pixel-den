import { SearchOutlined } from "@ant-design/icons";
import "./style.css";

export default function SearchBar() {
  return (
    <form className="flex justify-center w-full items-center bg-gray bg-white rounded-full">
      <span className="flex justify-center items-center text-gray-600 p-3 px-3 bg-white rounded-l-full">
        <SearchOutlined />
      </span>
      <input
        className="w-7/12 p-2 outline-none text-gray-700 "
        placeholder="Search"
      />
      <div className="separate w-3/12">
        <select className="w-full p-2 mr-1 text-sm border-none outline-none text-gray-500 bg-white text-ellipsis">
          <option>All</option>
          <option>3D Assets</option>
          <option>Audio</option>
        </select>
      </div>
      <button className="flex flex-grow justify-center items-center border border-secondary-300 bg-secondary-300 p-3 px-3 rounded-r-full">
        <SearchOutlined />
      </button>
    </form>
  );
}
