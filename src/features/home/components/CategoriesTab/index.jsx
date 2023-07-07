import { useEffect, useRef, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.css";

function Tab(props) {
  let className = "";

  const { active, innerRef, ...rest } = props;

  if (active) className += "bg-primary-200";

  return (
    <div
      ref={innerRef}
      className={`flex whitespace-nowrap z-10 md:hover:bg-opacity-50 items-center justify-center w-fit py-2 px-6 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${className}`}
      {...rest}
    >
      {props.children}
    </div>
  );
}

export default function CategoriesTab() {
  //   sliding div
  //   sliding div position and size
  const [xoffset, setXoffset] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  //   controls visibility of sliding div (invisible when it reaches destination tab)
  const [display, setDisplay] = useState("none");

  //   container
  //   reference to scrollable container to detect scroll offset
  const containerRef = useRef(null);
  //   container scroll offset
  const [scrollOffset, setScrollOffset] = useState(null);

  //   tab
  //   hovered, selected tab id and selected tab element
  const [currentHover, setCurrentHover] = useState(null);
  const [active, setActive] = useState(0);
  const [activeElement, setActiveElement] = useState(null);

  //   reference to first tab to initialize initial size and position of sliding bg
  const firstTabRef = useRef(null);

  //   drag bg to hovered element
  const onEnter = (event, id) => {
    setCurrentHover(id);
    setDisplay("block");

    const rect = event.target.getBoundingClientRect();
    setXoffset(rect.x);
    setWidth(rect.width);
    setHeight(rect.height);
  };

  //   drag bg back to active element
  const onLeave = () => {
    setCurrentHover(null);

    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      setXoffset(rect.x);
      setWidth(rect.width);
      setHeight(rect.height);
    }
  };

  //   set current categroy
  const onSelect = (event, id) => {
    setActiveElement(event.target);
    setActive(id);
  };

  const listenToScroll = (event) => {
    setScrollOffset(event.target.scrollLeft);
  };

  // Initially set first tab as active element
  useEffect(() => {
    setActiveElement(firstTabRef.current);
    const rect = firstTabRef.current.getBoundingClientRect();
    setWidth(rect.width);
    setHeight(rect.height);

    const container = containerRef.current;
    container.addEventListener("scroll", listenToScroll);

    return () => container.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    // main container
    <div className="w-full md:w-8/12 mx-auto flex justify-center items-center">
      <div className="relative p-2 px-3 scrollstart-blur ">
        <LeftOutlined />
      </div>
      {/* scrollable container */}

      <div
        ref={containerRef}
        className="w-fit overflow-x-scroll flex md:hide-scrollbar"
      >
        <div className="relative flex gap-5">
          <Tab
            innerRef={firstTabRef}
            onMouseEnter={(e) => onEnter(e, 0)}
            onMouseLeave={(e) => onLeave()}
            onClick={(e) => onSelect(e, 0)}
            active={
              (active === 0 && currentHover === null) || currentHover === 0
            }
          >
            Discover
          </Tab>
          <Tab
            onMouseEnter={(e) => onEnter(e, 1)}
            onMouseLeave={onLeave}
            onClick={(e) => onSelect(e, 1)}
            active={
              (active === 1 && currentHover === null) || currentHover === 1
            }
          >
            3D Models
          </Tab>
          <Tab
            onMouseEnter={(e) => onEnter(e, 2)}
            onMouseLeave={onLeave}
            onClick={(e) => onSelect(e, 2)}
            active={
              (active === 2 && currentHover === null) || currentHover === 2
            }
          >
            Audio
          </Tab>
          <Tab
            onMouseEnter={(e) => onEnter(e, 3)}
            onMouseLeave={onLeave}
            onClick={(e) => onSelect(e, 3)}
            active={
              (active === 3 && currentHover === null) || currentHover === 3
            }
          >
            Animations
          </Tab>
          <Tab
            onMouseEnter={(e) => onEnter(e, 4)}
            onMouseLeave={onLeave}
            onClick={(e) => onSelect(e, 4)}
            active={
              (active === 4 && currentHover === null) || currentHover === 4
            }
          >
            Illustration
          </Tab>
          <div
            className="absolute w-[6rem] h-[2.3rem] rounded-lg bg-primary-200 transition-all duration-200 opacity-0 md:opacity-100  bg-opacity-40"
            style={{
              position: "absolute",
              left: `${
                xoffset +
                scrollOffset -
                (containerRef?.current?.getBoundingClientRect().x ?? 0)
              }px`,
              display: display,
              width: `${width}px`,
              height: `${height}px`,
            }}
          ></div>
        </div>
      </div>
      {/* scrollable container end */}

      <div className="relative p-2 px-3 scrollend-blur ">
        <RightOutlined />
      </div>
    </div>
    // main container end
  );
}
