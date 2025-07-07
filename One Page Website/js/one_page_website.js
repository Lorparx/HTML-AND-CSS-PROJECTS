// Lightbox slideshow functionality for band images with looping
document.addEventListener("DOMContentLoaded", function () {
    const bandDiv = document.getElementById("Band");
    if (!bandDiv) return;
    const images = Array.from(bandDiv.querySelectorAll("img"));
    if (images.length === 0) return;

    // Create lightbox elements
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100vw";
    lightbox.style.height = "100vh";
    lightbox.style.background = "rgba(0,0,0,0.8)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = 1000;
    lightbox.style.flexDirection = "column";

    // Image element
    const img = document.createElement("img");
    img.style.maxWidth = "95vw";
    img.style.maxHeight = "95vh";
    img.style.boxShadow = "0 0 20px #fff";
    img.style.marginBottom = "20px";
    lightbox.appendChild(img);

    // Nav buttons
    const navContainer = document.createElement("div");
    navContainer.style.display = "flex";
    navContainer.style.justifyContent = "center";
    navContainer.style.gap = "30px";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "⟨ Prev";
    prevBtn.style.fontSize = "1.2em";
    prevBtn.style.padding = "10px 20px";
    prevBtn.style.cursor = "pointer";

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next ⟩";
    nextBtn.style.fontSize = "1.2em";
    nextBtn.style.padding = "10px 20px";
    nextBtn.style.cursor = "pointer";

    navContainer.appendChild(prevBtn);
    navContainer.appendChild(nextBtn);
    lightbox.appendChild(navContainer);

    document.body.appendChild(lightbox);

    // Track current image index
    let currentIndex = 0;

    function showImage(index) {
        // Loop the index
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;
        img.src = images[currentIndex].src;
        lightbox.style.display = "flex";
    }

    // Show lightbox on image click
    images.forEach(function (image, idx) {
        image.style.cursor = "pointer";
        image.addEventListener("click", function () {
            showImage(idx);
        });
    });

    // Navigation button events with looping
    prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showImage(currentIndex - 1);
    });
    nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

    // Hide lightbox on click outside image/buttons
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            img.src = "";
        }
    });

    // Keyboard navigation with looping
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                showImage(currentIndex + 1);
            } else if (e.key === "Escape") {
                lightbox.style.display = "none";
                img.src = "";
            }
        }
    });
});