const beforeAfter = {
  container: document.getElementById("before-after"),
  beforeImg: document.getElementById("image-before"),
  afterImg: document.getElementById("image-after"),
  singleImg: document.getElementById("image"),

  async exists(url) {
    try {
      const r = await fetch(url, { method: "HEAD" });
      return r.ok;
    } catch {
      return false;
    }
  },

  async load(basePath) {
    const afterPath = basePath.replace(".jpg", "A.jpg");

    if (await this.exists(afterPath)) {
      this.beforeImg.src = basePath;
      this.afterImg.src = afterPath;

      this.singleImg.style.display = "none";
      this.container.style.display = "flex";
      return true;
    }

    this.container.style.display = "none";
    this.singleImg.style.display = "block";
    return false;
  },

  getWidth() {
    if (this.container.style.display === "flex") {
      return this.container.getBoundingClientRect().width;
    }
    return this.singleImg.getBoundingClientRect().width;
  }
};
