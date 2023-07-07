import React from "react";
import SlideShow from "features/home/components/SlideShow";
import SearchBar from "features/home/components/SearchBar";
import CategoriesTab from "features/home/components/CategoriesTab";

export default function HomePage() {
  return (
    <>
      <section className="mb-20 md:pb-48 relative flex flex-col md:flex-row px-4 md:px-10 lg:px-20 mt-14 gap-10">
        {/* Left */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-[2.2rem] sm:text-[2.25rem] lg:text-[3rem] font-bold leading-relaxed tracking-wider text-center lg:text-left transition-all">
            Discover and share
            <br /> your extraordinary
            <br /> creative work
          </h1>
          <div className="flex justify-center lg:justify-start mt-10 lg:mt-16">
            <div className="w-full min-[600px]:w-7/12 md:w-8/12 lg:w-9/12 transition-all">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hidden w-0 lg:block lg:w-1/2">
          <SlideShow />
        </div>
      </section>

      <section>
        <CategoriesTab />
      </section>
    </>
  );
}
