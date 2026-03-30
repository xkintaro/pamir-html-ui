document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const sunIcon = document.getElementById("icon-sun");
  const moonIcon = document.getElementById("icon-moon");

  const updateToggleUI = (isDark) => {
    if (isDark) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  };

  const currentTheme = localStorage.getItem("theme") || "system";
  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const isInitiallyDark =
    currentTheme === "dark" || (currentTheme === "system" && isSystemDark);

  if (toggleBtn) {
    updateToggleUI(isInitiallyDark);

    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isDarkNow = document.documentElement.classList.contains("dark");
      const nextTheme = isDarkNow ? "light" : "dark";
      AetherUI.setTheme(nextTheme);
    });
  }

  document.addEventListener("aether:theme-change", (e) => {
    const newTheme = e.detail.theme;
    let isDark = false;
    if (newTheme === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      isDark = newTheme === "dark";
    }
    if (toggleBtn) updateToggleUI(isDark);
  });

  const initBackToTop = () => {
    const backToTopBtn = document.getElementById("back-to-top");

    if (!backToTopBtn) return;

    const toggleButtonVisibility = () => {
      if (window.scrollY > 600) {
        backToTopBtn.classList.remove(
          "translate-y-20",
          "opacity-0",
          "invisible"
        );
      } else {
        backToTopBtn.classList.add("translate-y-20", "opacity-0", "invisible");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", toggleButtonVisibility);

    backToTopBtn.addEventListener("click", scrollToTop);

    toggleButtonVisibility();
  };

  initBackToTop();
});

var swiper = new Swiper(".swiperMain", {
  loop: true,
  effect: "fade",
  speed: 500,
  fadeEffect: { crossFade: true },
  parallax: true,
  navigation: { nextEl: ".main-next", prevEl: ".main-prev" },
  keyboard: { enabled: true },
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: { delay: 5000, disableOnInteraction: true },
});

var productSwiper = new Swiper(".swiperProducts", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: { nextEl: ".product-next", prevEl: ".product-prev" },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 40 },
    1536: { slidesPerView: 4, spaceBetween: 60 },
  },
});

var certificateSwiper = new Swiper(".swiperCertificates", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: { nextEl: ".certificate-next", prevEl: ".certificate-prev" },
  breakpoints: {
    640: { slidesPerView: 3, spaceBetween: 30 },
    1536: { slidesPerView: 4, spaceBetween: 60 },
  },
});

Fancybox.bind("[data-fancybox]", {
  Carousel: { infinite: true, transition: "classic" },
  Thumbs: { autoStart: true, type: "classic" },
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: ["zoomIn", "zoomOut", "rotateCCW", "rotateCW", "flipX", "flipY"],
      right: ["slideshow", "thumbs", "fullscreen", "download", "close"],
    },
  },
  Images: { zoom: true, Panzoom: { maxScale: 4 } },
  Slideshow: { timeout: 3000 },
  Hash: true,
});
