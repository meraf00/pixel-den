import { ButtonFilled, ButtonOutlined } from "components/Button";

import { useEffect, useState } from "react";
import { ImageInput } from "features/work/component/ImageInput";

import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";

import {
  Textarea,
  createEditorState,
  Content,
  ContentType,
  EditorToolbar,
} from "features/editor";

export const ShareWorkPage = () => {
  const [contents, setContents] = useState([new Content(ContentType.text)]);
  const [focusedElementIdx, setFocusElementIdx] = useState(null);

  useEffect(() => {
    for (let idx in contents) {
      const content = contents[idx];
      if (content.type == ContentType.text) {
        if (content.editorState?.getSelection().getHasFocus()) {
          setFocusElementIdx(idx);
          return;
        }
      }
    }
  }, [contents]);

  const setEditorState = (contentId, state) => {
    setContents((prevContents) => {
      const newContents = prevContents.map((content, idx) => {
        if (idx == contentId) {
          const newContent = content.copy();
          newContent.editorState = state;

          return newContent;
        }

        return content;
      });

      return newContents;
    });
  };

  // loop through rendered elements, if they are focused,
  // apply bold on selected content
  const applyInlineStyle = (style) => {
    if (focusedElementIdx == null) return;

    const focusedElement = contents[focusedElementIdx];

    const newEditorState = RichUtils.toggleInlineStyle(
      focusedElement.editorState,
      style
    );

    if (newEditorState) {
      setEditorState(focusedElementIdx, newEditorState);
      // setFocusElementIdx(null);
    }
  };

  const applyBlockStyle = (style) => {
    if (focusedElementIdx == null) return;

    const focusedElement = contents[focusedElementIdx];

    const newEditorState = RichUtils.toggleBlockType(
      focusedElement.editorState,
      style
    );

    if (newEditorState) {
      setEditorState(focusedElementIdx, newEditorState);
      // setFocusElementIdx(null);
    }
  };

  const renderElements = contents.map((content, idx) => {
    if (content.type == ContentType.text) {
      const editorState = createEditorState();
      return (
        <Textarea
          key={idx}
          editorState={content.editorState ?? editorState}
          setEditorState={(editorState) => setEditorState(idx, editorState)}
        />
      );
    }
  });

  return (
    <div className="relative px-4 md:px-10 lg:px-20 my-5 flex flex-col">
      <div className="w-full lg:w-8/12">
        <div className="mt-5 flex flex-col gap-5">
          <input
            className="w-full
          py-6
          bg-transparent
          text-3xl
          font-bold
          outline-none
          outline
        "
            placeholder="Give your work a name"
          />

          <div
            className="                               
          w-[480px] h-[270px] 
          sm:w-[640px] sm:h-[360px] 
          md:w-[800px] md:h-[450px]
          //lg:w-[960px] //lg:h-[540px]
          mx-auto
          "
          >
            <ImageInput
              title="Add an image"
              description="Minimum 1600px width recommended. Max file size 10MB"
            />
          </div>

          {renderElements}
        </div>
      </div>

      <div className="w-full flex justify-between top-0 left-0">
        <div>
          <ButtonOutlined>Cancel</ButtonOutlined>
        </div>
        <div className="flex gap-5">
          <ButtonOutlined>Save as draft</ButtonOutlined>
          <ButtonFilled>Continue</ButtonFilled>
        </div>
      </div>

      <EditorToolbar
        inlineStyleHandler={applyInlineStyle}
        blockStyleHandler={applyBlockStyle}
        element={contents[focusedElementIdx]}
      />
    </div>
  );
};
