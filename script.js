// CZ Labs — Minimal JS (no bloat)

(function () {
  // Footer year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  const toggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      mobileNav.setAttribute("aria-hidden", !open);
    });

    // Close menu after clicking a link
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", false);
        mobileNav.setAttribute("aria-hidden", true);
      });
    });
  }

  // Contact form (frontend-only)
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[name='name']")?.value || "";

      note.textContent = `Thanks${name ? `, ${name}` : ""}! We’ll be in touch soon.`;
      form.reset();

      setTimeout(() => {
        note.textContent = "";
      }, 4000);
    });
  }
})();
