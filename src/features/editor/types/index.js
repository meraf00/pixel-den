const ContentType = {
  heading: "heading",
  text: "text",
  image: "image",
  gallery: "gallery",
  asset: "asset",
};

class Content {
  constructor(contentType, editorState, image, gallery) {
    this.type = contentType;

    if (editorState) this.editorState = editorState;
    if (image) this.image = image;
    if (gallery) this.gallery = gallery;
  }

  copy() {
    return new Content(this.type, this.editorState, this.image, this.gallery);
  }
}

export { Content, ContentType };
