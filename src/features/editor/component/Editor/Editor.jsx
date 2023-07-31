import { Editor, EditorState, RichUtils, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

export const createEditorState = (editorContent) => {
  if (editorContent) {
    const rawContent = convertFromRaw(JSON.parse(editorContent));
    return EditorState.createWithContent(rawContent);
  }
  return EditorState.createEmpty();
};

export const Textarea = ({ editorState, setEditorState }) => {
  const handleKeyCommand = (command, editorState) => {
    const newEditorState = RichUtils.handleKeyCommand(editorState, command);

    if (newEditorState) {
      setEditorState(newEditorState);
      return "handled";
    }
    return "not-handled";
  };

  if (!editorState) editorState = createEditorState();

  return (
    <div
      className={
        `w-full
          p-3
          my-2
          text-white
          bg-transparent
          outline-none
          rounded-xl` +
        (editorState.getSelection().getHasFocus()
          ? ` outline-4 outline-secondary-0`
          : "")
      }
    >
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Add some detail about your work"
      />
    </div>
  );
};
