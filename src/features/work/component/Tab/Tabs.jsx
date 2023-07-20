import React, { Children, useState } from "react";

const TitleWrapper = ({ active, onClick, children }) => {
  const className = active
    ? "relative py-2 px-2 text-secondary-200 after:h-[1px] after:w-full after:bg-secondary-200 after:absolute after:bottom-0 after:left-0 after:animate-scalein after:translate-y-[1px] transition-color duration-300"
    : "relative py-2 px-2";
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

const Tabs = ({ children }) => {
  const [activeIdx, setActive] = useState(0);

  const handleTabChange = (tabIdx) => {
    setActive(tabIdx);
  };

  const childrenComponents = Children.toArray(children);

  const tabs = childrenComponents.filter((child) => child.type.name == "Tab");

  const titles = [];
  const bodies = [];

  for (let tabIdx in tabs) {
    const tab = tabs[tabIdx];

    const tabChildren = Children.toArray(tab.props.children);

    for (let child of tabChildren) {
      if (child.type.name == "Title") {
        titles.push(
          <TitleWrapper
            key={`title-${tabIdx}`}
            active={activeIdx == tabIdx}
            onClick={() => handleTabChange(tabIdx)}
          >
            {child}
          </TitleWrapper>
        );
      } else if (child.type.name == "Body") {
        bodies.push(<div key={`body-${tabIdx}`}>{child}</div>);
      }
    }
  }

  return (
    <div>
      <div className="flex mr-10 lg:mr-20 gap-10 font-semibold border-b border-primary-200 mb-5">
        {titles}
      </div>
      {bodies[activeIdx]}
    </div>
  );
};

export default Tabs;
