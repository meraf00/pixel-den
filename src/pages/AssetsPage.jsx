import { FolderOutlined } from "@ant-design/icons";
import { useAuth } from "features/authentication";
import React from "react";

import { Tabs, Tab, Title, Body } from "features/work/component/Tab";
import { Card } from "features/work";
import { homeImages } from "assets/home";
import { Empty } from "components/Empty";

const AssetPage = () => {
  const { user } = useAuth();

  return (
    <div className="px-3 md:ml-96 mt-4 min-h-screen">
      {/* Setting title */}
      <div className="flex gap-4 items-center mb-10">
        <span className="flex items-center font-semibold">
          <FolderOutlined />
        </span>
        <span className="flex items-center font-medium text-lg md:text-xl">
          My assets
        </span>
      </div>

      <Tabs>
        <Tab>
          <Title>Work</Title>
          <Body>
            <div className="my-10 mr-12 lg:mr-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 z-0">
              <Card imgUrl={homeImages.slideShowImages[3]} title="3D Surface" />
              <Card imgUrl={homeImages.slideShowImages[0]} title="Vehicles" />
              <Card imgUrl={homeImages.slideShowImages[1]} title="Alien" />
              <Card imgUrl={homeImages.slideShowImages[2]} title="Smoke" />
            </div>
          </Body>
        </Tab>
        <Tab>
          <Title>Liked</Title>
          <Body>
            <div className="my-10 mr-12 lg:mr-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 z-0">
              <Card imgUrl={homeImages.slideShowImages[3]} title="3D Surface" />
            </div>
          </Body>
        </Tab>
        <Tab>
          <Title>Drafts</Title>
          <Body>
            <div className="mt-20">
              <Empty />
            </div>
          </Body>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AssetPage;
