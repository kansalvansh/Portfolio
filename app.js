const page = document.body.dataset.page;
if (page) {
  const link = document.querySelector(`.nav-links a[data-page="${page}"]`);
  if (link) link.classList.add("active");
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((btn) => {
    if (btn.dataset.page === page) btn.classList.add("active");
  });
}

const menus = document.querySelectorAll(".menu");
menus.forEach((menu) => {
  const tabs = menu.querySelectorAll(".menu-btn");
  const panels = menu.querySelectorAll(".menu-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      panels.forEach((p) => (p.hidden = true));
      tab.setAttribute("aria-selected", "true");
      const panelId = tab.getAttribute("aria-controls");
      const panel = menu.querySelector(`#${panelId}`);
      if (panel) panel.hidden = false;
    });
  });
});

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  const button = item.querySelector(".nav-button");
  if (!button) return;

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    navItems.forEach((other) => {
      if (other !== item) other.classList.remove("open");
    });
    item.classList.toggle("open");
  });

  item.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => item.classList.remove("open"));
  });
});

document.addEventListener("click", () => {
  navItems.forEach((item) => item.classList.remove("open"));
});
