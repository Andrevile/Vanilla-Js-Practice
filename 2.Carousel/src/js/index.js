(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const imageInput = document.querySelector("#image-upload-input");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function changeTransform() {
    const items = document.querySelectorAll(".carousel-item");

    items.forEach((item, i) => {
      let degree = 360 / items.length;
      if (items.length > 1 && items.lneght < 5) {
        if (i === 0) {
          item.style.transform = "rotateY(0deg) translateZ(250px)";
        } else {
          item.style.transform = `rotateY(${
            degree * i
          }deg) translateZ(250px) rotateY(-${degree * i}deg)`;
        }
      } else if (items.length >= 5) {
        if (i === 0) {
          item.style.transform = "rotateY(0deg) translateZ(250px)";
        } else if (i === 1) {
          item.style.transform =
            "rotateY(72deg) translateZ(250px) rotateY(-72deg)";
        } else if (i === 2) {
          item.style.transform =
            "rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)";
        } else if (i == items.length - 2) {
          // 리스트의 끝에서 두번째 아이템
          item.style.transform = `rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)`;
        } else if (i == items.length - 1) {
          //   리스트의 마지막 아이템
          item.style.transform = `rotateY(288deg) translateZ(250px) rotateY(-288deg)`;
        } else {
          item.style.transform = `rotateY(${
            degree * i
          }deg) translateZ(250px) rotateY(-${degree * i}deg)`;
        }
      }
    });
  }

  function moveNext() {
    const items = document.querySelectorAll(".carousel-item");
    if (items.length > 1) {
      const currentItem = document.querySelector(".now");
      const next = currentItem.nextElementSibling;
      carouselUl.appendChild(currentItem);
      currentItem.classList.remove("now");
      next.classList.add("now");
    }
    changeTransform();
  }

  function movePrev() {
    const items = document.querySelectorAll(".carousel-item");
    if (items.length > 1) {
      const currentItem = document.querySelector(".now");
      const lastItem = carouselUl.lastElementChild;

      carouselUl.insertBefore(lastItem, items[0]);
      currentItem.classList.remove("now");
      lastItem.classList.add("now");
    }

    changeTransform();
  }

  nextBtn.addEventListener("click", moveNext);
  prevBtn.addEventListener("click", movePrev);

  function createTag(url) {
    const list = document.createElement("li");
    const img = document.createElement("img");
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
        carouselUl.insertBefore(createTag(imgUrl), items[0]);
        changeTransform();
      };
      reader.readAsDataURL(value.files[0]);
    }
  }

  imageInput.addEventListener("change", (e) => {
    uploadImage(e.target);
  });

  window.onload = () => {
    const items = document.querySelectorAll(".carousel-item");
    if (items.length > 0) {
      items[0].classList.add("now");
      changeTransform();
    }
  };
})();
