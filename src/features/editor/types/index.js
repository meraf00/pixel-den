const ContentType = {
  heading: "heading",
  text: "text",
  image: "image",
  gallery: "gallery",
  asset: "asset",
};

class Content {
  constructor(contentType, state) {
    this.type = contentType;
    this.state = state ?? {};
  }

  copy() {
    const stateCopy = Object.assign({}, this.state);
    return new Content(this.type, stateCopy);
  }
}

export { Content, ContentType };
