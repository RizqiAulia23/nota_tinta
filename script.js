// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Floating WhatsApp button interaction
const floatingWa = document.querySelector(".floating-wa");

if (floatingWa) {
  floatingWa.addEventListener("mouseover", () => {
    floatingWa.style.transform = "scale(1.1)";
    floatingWa.style.boxShadow = "0 8px 25px rgba(34, 197, 94, 0.5)";
  });

  floatingWa.addEventListener("mouseout", () => {
    floatingWa.style.transform = "";
    floatingWa.style.boxShadow = "0 5px 20px rgba(34, 197, 94, 0.4)";
  });
}

// Katalog card "Tambah ke Keranjang" interaction
const addButtons = document.querySelectorAll(".btn-tambah");

addButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const originalText = this.textContent;
    this.textContent = "Ditambahkan!";
    this.style.background = "#22c55e";
    this.style.color = "white";

    setTimeout(() => {
      this.textContent = originalText;
      this.style.background = "";
      this.style.color = "";
    }, 2000);
  });
});

// Navbar shadow on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  }
});

// Observe elements on scroll (simple reveal on view)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Sell form sends a pre-filled evaluation request to WhatsApp
const sellForm = document.querySelector("#sell-form");

if (sellForm) {
  sellForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(sellForm);
    const message = [
      "Halo JUNA, saya ingin menjual cartridge/toner.",
      "",
      `Nama: ${formData.get("nama")}`,
      `Tipe produk: ${formData.get("produk")}`,
      `Jumlah: ${formData.get("jumlah")} unit`,
      `Kondisi: ${formData.get("kondisi")}`,
      `Catatan: ${formData.get("catatan") || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/6281277772047?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  });
}

// Contact form sends a pre-filled message to WhatsApp
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const message = [
      'Halo JUNA, saya ingin bertanya.',
      '',
      `Nama: ${formData.get('nama')}`,
      `Topik: ${formData.get('topik')}`,
      `Pesan: ${formData.get('pesan')}`
    ].join('\n');

    window.open(`https://wa.me/6281277772047?text=${encodeURIComponent(message)}`, '_blank');
  });
}
