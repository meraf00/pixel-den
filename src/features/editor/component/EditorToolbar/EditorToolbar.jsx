import { ContentType } from "features/editor";
import { ImageToolbar } from "./ImageToolbar";
import { GalleryToolbar } from "./GalleryToolbar";
import { InsertBlockToolbar } from "./InsertBlockToolbar";
import { TextToolbar } from "./TextToolbar";

export const EditorToolbar = ({
  showInsertToolbar,
  element,
  inlineStyleHandler,
  blockStyleHandler,
  createBlockHandler,
  triggerImageInput,
}) => {
  if (!element) {
    if (showInsertToolbar) {
      return <InsertBlockToolbar createBlock={createBlockHandler} />;
    }
    return;
  }
  if (element.type === ContentType.text)
    return (
      <TextToolbar
        inlineStyleHandler={inlineStyleHandler}
        blockStyleHandler={blockStyleHandler}
        editorState={element.state.editorState}
      />
    );
  // if (element.type === ContentType.heading) return <TextToolbar />;
  if (element.type === ContentType.image)
    return (
      <ImageToolbar
        image={element.state.image}
        triggerImageInput={triggerImageInput}
      />
    );
  if (element.type === ContentType.gallery) return <GalleryToolbar />;
};
