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
    const deepCopy = JSON.parse(JSON.stringify(this.state));
    return new Content(this.type, deepCopy);
  }
}

export { Content, ContentType };
