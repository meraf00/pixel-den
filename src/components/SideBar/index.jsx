import { useState } from "react";
import {
  SettingOutlined,
  UserOutlined,
  MoneyCollectOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

export const Icon = (props) => {
  const { children, text, active, ...rest } = props;

  let className = "";

  if (active) {
    className = "md:bg-primary-400 text-secondary-100";
  }

  return (
    <div
      className={`hover:text-secondary-300
                mb-3             
                flex items-center
                transition-all duration-300
                p-3 gap-4 rounded-l-full
                md:pl-4             
                ${className}`}
      {...rest}
    >
      <div className="text-2xl flex items-center saturate-200 md:bg-white rounded-full md:p-2">
        {children}
      </div>
      <div className="w-0 md:w-full overflow-hidden whitespace-nowrap saturate-200">
        {props.text}
      </div>
    </div>
  );
};

export default function SideBar(props) {
  const [isOpen, setOpen] = useState(true);

  const toggleBar = () => {
    setOpen((isOpen) => !isOpen);
  };

  let sidebarClassName = "";
  let settingClassName = "";

  if (!isOpen) {
    sidebarClassName = "translate-x-full";
    settingClassName = "-translate-x-16 -rotate-90";
  }

  const paths = ["/settings/account", "/settings/payment", "/settings/assets"];

  const location = useLocation();

  const activeIndex = paths.findIndex(
    (pathname) => location.pathname === pathname
  );

  return (
    <div
      className={`fixed top-0 -right-3 md:left-0 h-full pt-16 md:w-4/12 max-w-xs md:pt-7 md:z-50 ${sidebarClassName}
      md:text-black md:bg-white
      flex flex-col justify-between 
      transition-all duration-500 delay-75
    `}
    >
      <div>
        {/* settings title / toggler */}
        <div
          className={`flex items-center mb-5 gap-4 p-3 md:pl-3 md:border-b md:mx-5`}
        >
          <div
            onClick={toggleBar}
            className={`w-fit text-2xl flex items-center saturate-200 md:bg-white rounded-full md:p-2 md:pointer-events-none transition-all duration-500 ${settingClassName}`}
          >
            <SettingOutlined />
          </div>
          <div className="w-0 md:w-full overflow-hidden whitespace-nowrap font-semibold">
            Settings
          </div>
        </div>

        {/* tabs */}
        <div className="md:pl-8">
          <Link to={paths[0]}>
            <Icon text="Account" active={activeIndex === 0}>
              <UserOutlined />
            </Icon>
          </Link>

          <Link to={paths[1]}>
            <Icon text="Payment" active={activeIndex === 1}>
              <MoneyCollectOutlined />
            </Icon>
          </Link>

          <Link to={paths[2]}>
            <Icon text="My assets" active={activeIndex === 2}>
              <FolderOutlined />
            </Icon>
          </Link>
        </div>
      </div>

      {/* botttom button  */}
      <div className="hidden md:block pl-3 md:pl-8">Sign out</div>
    </div>
  );
}
