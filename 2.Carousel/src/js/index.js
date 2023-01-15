(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const imageInput = document.querySelector("#image-upload-input");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function changeTransform() {
    const items = document.querySelectorAll(".carousel-item");
  }

  function createTag(url) {
    const list = document.createElement("li");
    const img = documnet.createElement("img");
    list.setAttribute("class", "carousel-item");
    img.src = url;
    list.appendChild(img);
    const items = document.querySelectorAll("carousel_item");
    items.forEach((item) => {
      item.classList.remove("now");
    });
    list.classList.add("now");
    return list;
  }

  function uploadImage(value) {
    const items = document.querySelectorAll(".carousel-item");
    if (value.files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e.target.result;
        carouselUl.insertBefore(createTag(imgUrl, items[0]));
      };
      reader.readAsDataURL(value.files[0]);
    }
  }

  imageInput.addEventListener("change", (e) => {
    uploadImage(e.target);
  });

  window.onload(() => {});
})();
