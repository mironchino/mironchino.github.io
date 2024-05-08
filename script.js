document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery img");
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentImageIndex = 0;

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      currentImageIndex = index;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  prevBtn.addEventListener("click", function () {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      modalImg.src = images[currentImageIndex].src;
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      modalImg.src = images[currentImageIndex].src;
    }
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  if (window.innerWidth <= 768) {
    // изменено с 600 на 768
    let horizontScroll = document.querySelector(".container");
    let leftBtn = document.getElementById("leftBtn");
    let rightBtn = document.getElementById("rightBtn");

    rightBtn.addEventListener("click", () => {
      horizontScroll.style.scrollBehavior = "smooth";
      horizontScroll.scrollLeft += window.innerWidth; // изменено с 940 на window.innerWidth
    });

    leftBtn.addEventListener("click", () => {
      horizontScroll.style.scrollBehavior = "smooth";
      horizontScroll.scrollLeft -= window.innerWidth; // изменено с 940 на window.innerWidth
    });
  }
});
