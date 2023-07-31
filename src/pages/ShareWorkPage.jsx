import { ButtonFilled, ButtonOutlined } from "components/Button";
import { useEffect, useRef, useState } from "react";
import { ImageInput } from "features/work/component/ImageInput";
import { RichUtils } from "draft-js";
import {
  Textarea,
  createEditorState,
  Content,
  ContentType,
  EditorToolbar,
  ContentContainer,
} from "features/editor";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "components/Separator";

export const ShareWorkPage = () => {
  const [contents, setContents] = useState([
    new Content(ContentType.image),
    new Content(ContentType.text),
  ]);
  const [focusedElementIdx, setFocusElementIdx] = useState(null);
  const [showInsertToolbar, setShowInsertToolbar] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    for (let idx in contents) {
      const content = contents[idx];
      if (content.type == ContentType.text) {
        if (content.state.editorState?.getSelection().getHasFocus()) {
          setFocusElementIdx(idx);
          return;
        }
      }
    }
  }, [contents]);

  const setEditorState = (contentId, editorState) => {
    setContents((prevContents) => {
      const newContents = prevContents.map((content, idx) => {
        if (idx == contentId) {
          const newContent = content.copy();
          newContent.state = { editorState };

          return newContent;
        }

        return content;
      });

      return newContents;
    });
  };

  const setContentImage = (contentId, image) => {
    setContents((prevContents) => {
      const newContents = prevContents.map((content, idx) => {
        if (idx == contentId) {
          const newContent = content.copy();
          newContent.state = { image };

          return newContent;
        }

        return content;
      });

      return newContents;
    });
  };

  // loop through rendered elements, if they are focused,
  // apply style on selected content
  const applyInlineStyle = (style) => {
    if (focusedElementIdx === null) return;

    const focusedElement = contents[focusedElementIdx];

    const newEditorState = RichUtils.toggleInlineStyle(
      focusedElement.state.editorState,
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
      focusedElement.state.editorState,
      style
    );

    if (newEditorState) {
      setEditorState(focusedElementIdx, newEditorState);
      // setFocusElementIdx(null);
    }
  };

  const triggerImageInput = () => {
    if (focusedElementIdx === null) return;

    const focusedElement = contents[focusedElementIdx];

    if (focusedElement.type === ContentType.image) {
      inputRefs.current[focusedElementIdx]?.click();
    }
  };

  const handleDelete = (contentIdx) => {
    setContents((prevContents) => {
      const newContents = prevContents.filter((_, idx) => idx !== contentIdx);

      return newContents;
    });
  };

  const handleShiftUp = (contentIdx) => {
    setContents((prevContents) => {
      const newContents = [...prevContents];
      const element = newContents[contentIdx];

      if (contentIdx > 0) {
        newContents[contentIdx] = newContents[contentIdx - 1];
        newContents[contentIdx - 1] = element;
      }

      return newContents;
    });
  };

  const handleShiftDown = (contentIdx) => {
    setContents((prevContents) => {
      const newContents = [...prevContents];
      const element = newContents[contentIdx];

      if (contentIdx < newContents.length - 1) {
        newContents[contentIdx] = newContents[contentIdx + 1];
        newContents[contentIdx + 1] = element;
      }

      return newContents;
    });
  };

  const renderElements = contents.map((content, idx) => {
    switch (content.type) {
      case ContentType.text:
        const editorState = createEditorState();
        return (
          <ContentContainer
            handleDelete={() => handleDelete(idx)}
            handleShiftUp={() => handleShiftUp(idx)}
            handleShiftDown={() => handleShiftDown(idx)}
          >
            <Textarea
              key={idx}
              editorState={content.state.editorState ?? editorState}
              setEditorState={(editorState) => setEditorState(idx, editorState)}
            />
          </ContentContainer>
        );

      case ContentType.heading:
        return (
          <ContentContainer
            handleDelete={() => handleDelete(idx)}
            handleShiftUp={() => handleShiftUp(idx)}
            handleShiftDown={() => handleShiftDown(idx)}
          >
            <input
              key={idx}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              className="w-full   
                    px-3 
                    my-8
                    bg-transparent
                    text-3xl
                    font-bold
                    outline-none
                    outline"
              placeholder="Add title"
            />
          </ContentContainer>
        );

      case ContentType.image:
        return (
          <ContentContainer
            handleDelete={() => handleDelete(idx)}
            handleShiftUp={() => handleShiftUp(idx)}
            handleShiftDown={() => handleShiftDown(idx)}
          >
            <div
              onClick={() => setFocusElementIdx(idx)}
              key={idx}
              className="          
          max-w-full
          w-[480px] h-[270px] 
          sm:w-[640px] sm:h-[360px] 
          md:w-[800px] md:h-[450px]          
          lg:w-[960px] lg:h-[540px]                 
          mx-auto
          "
            >
              <ImageInput
                index={idx}
                inputRefs={inputRefs}
                title="Add an image"
                description="Minimum 1600px width recommended. Max file size 10MB"
                onInputChange={(image) => setContentImage(idx, image)}
                currentImage={content.state.image}
              />
            </div>
          </ContentContainer>
        );
    }
    return null;
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
      <div className="w-full lg:w-8/12 min-h-[50vh]">
        <div className="mt-5 flex flex-col gap-5">
          <input
            className="w-full
          py-6
          px-3
          bg-transparent
          text-3xl
          font-bold
          outline-none
          outline"
            placeholder="Give your work a name"
          />

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
        triggerImageInput={triggerImageInput}
      />
    </div>
  );
};
