import { ButtonFilled, ButtonOutlined } from "components/Button";

import { useEffect, useState } from "react";
import { ImageInput } from "features/work/component/ImageInput";

import { RichUtils } from "draft-js";

import {
  Textarea,
  createEditorState,
  Content,
  ContentType,
  EditorToolbar,
} from "features/editor";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "components/Separator";

export const ShareWorkPage = () => {
  const [contents, setContents] = useState([new Content(ContentType.text)]);
  const [focusedElementIdx, setFocusElementIdx] = useState(null);
  const [showInsertToolbar, setShowInsertToolbar] = useState(false);

  useEffect(() => {
    for (let idx in contents) {
      const content = contents[idx];
      if (content.type === ContentType.text) {
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
        if (idx === contentId) {
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
    if (focusedElementIdx === null) return;

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
    if (focusedElementIdx === null) return;

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
    if (content.type === ContentType.text) {
      const editorState = createEditorState();
      return (
        <Textarea
          key={idx}
          editorState={content.editorState ?? editorState}
          setEditorState={(editorState) => setEditorState(idx, editorState)}
        />
      );
    } else if (content.type === ContentType.heading) {
      return (
        <input
          key={idx}
          className="w-full    
                    bg-transparent
                    text-3xl
                    font-bold
                    outline-none
                    outline"
          placeholder="Add title"
        />
      );
    } else if (content.type === ContentType.image) {
      return (
        <div
          key={idx}
          className="          
          max-w-full               
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
      );
    } else {
      return null;
    }
  });

  const createTextBlock = () => {
    setContents((prevContents) => {
      const newContents = [...prevContents, new Content(ContentType.text)];
      return newContents;
    });
  };

  const createHeadingBlock = () => {
    setContents((prevContents) => {
      const newContents = [...prevContents, new Content(ContentType.heading)];
      return newContents;
    });
  };

  const createImageBlock = () => {
    setContents((prevContents) => {
      const newContents = [...prevContents, new Content(ContentType.image)];
      return newContents;
    });
  };

  const handleInsertBlock = () => {
    setFocusElementIdx(null);
    setShowInsertToolbar(true);
  };

  const createBlock = (blockType) => {
    if (blockType === ContentType.text) {
      createTextBlock();
    } else if (blockType === ContentType.heading) {
      createHeadingBlock();
    } else if (blockType === ContentType.image) {
      createImageBlock();
    }

    setShowInsertToolbar(false);
  };

  return (
    <div className="relative px-4 md:px-10 lg:px-20 my-5 flex flex-col gap-10">
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
          max-w-full               
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

          <div>{renderElements}</div>

          <div className="cursor-pointer" onClick={handleInsertBlock}>
            <Separator animateOnHover={true}>
              <button className="flex group-hover:gap-2 items-center justify-center bg-gray-500 group-hover:bg-white rounded-xl px-2 py-1">
                <FontAwesomeIcon icon={faPlus} />
                <span
                  className="w-0 group-hover:w-[6rem]
            whitespace-nowrap overflow-hidden 
            text-black
            transition-all duration-300"
                >
                  Insert block
                </span>
              </button>
            </Separator>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse sm:flex-row justify-between mb-24 flex-wrap-reverse md:flex-nowrap gap-3">
        <div className="flex flex-col-reverse gap-3 sm:flex-row">
          <ButtonOutlined>Cancel</ButtonOutlined>
          <ButtonOutlined>Save as draft</ButtonOutlined>
        </div>
        <div className="flex">
          <ButtonFilled>Continue</ButtonFilled>
        </div>
      </div>

      <EditorToolbar
        inlineStyleHandler={applyInlineStyle}
        blockStyleHandler={applyBlockStyle}
        element={contents[focusedElementIdx]}
        showInsertToolbar={showInsertToolbar}
        createBlockHandler={createBlock}
      />
    </div>
  );
};
