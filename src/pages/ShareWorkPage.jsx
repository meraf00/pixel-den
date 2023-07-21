import { ButtonFilled, ButtonOutlined } from "components/Button";

import React from "react";
import { ImageInput } from "features/work/component/ImageInput";

export const ShareWorkPage = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 my-5 flex">
      <div className="w-full lg:w-9/12">
        <div className="flex justify-between">
          <div>
            <ButtonOutlined>Cancel</ButtonOutlined>
          </div>
          <div className="flex gap-5">
            <ButtonOutlined>Save as draft</ButtonOutlined>
            <ButtonFilled>Continue</ButtonFilled>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <input
            className="w-full
          py-6
          bg-transparent
          text-3xl
          font-bold
          outline-none
        "
            placeholder="Give your work a name"
          />

          <div className="h-[30rem]">
            <ImageInput
              title="Add an image"
              description="Minimum 1600px width recommended. Max file size 10MB"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
