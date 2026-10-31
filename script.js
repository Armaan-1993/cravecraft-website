const tabs = document.getElementById("categoryTabs");
const list = document.getElementById("menuList");
const search = document.getElementById("menuSearch");
const count = document.getElementById("resultCount");
let activeCategory = "All";

const categories = ["All", ...new Set(MENU.map(item => item.category))];
categories.forEach(category => {
  const button = document.createElement("button");
  button.className = "category-tab" + (category === "All" ? " active" : "");
  button.textContent = category;
  button.type = "button";
  button.addEventListener("click", () => {
    activeCategory = category;
    document.querySelectorAll(".category-tab").forEach(tab => tab.classList.toggle("active", tab === button));
    render();
  });
  tabs.appendChild(button);
});

function render() {
  const term = search.value.trim().toLowerCase();
  const filtered = MENU.filter(item =>
    (activeCategory === "All" || item.category === activeCategory) &&
    [item.name, item.description, item.category].join(" ").toLowerCase().includes(term)
  );
  count.textContent = `${filtered.length} MENU ITEMS`;
  list.innerHTML = "";
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">No matches just yet. Try another craving.</div>';
    return;
  }
  const grouped = new Map();
  filtered.forEach(item => {
    if (!grouped.has(item.category)) grouped.set(item.category, []);
    grouped.get(item.category).push(item);
  });
  grouped.forEach((items, category) => {
    const section = document.createElement("section");
    section.className = "menu-group";
    const heading = document.createElement("div");
    heading.className = "menu-group-title";
    heading.innerHTML = `<h3>${category}</h3><span></span>`;
    section.appendChild(heading);
    items.forEach(item => {
      const row = document.createElement("article");
      row.className = "menu-item";
      const info = document.createElement("div");
      const name = document.createElement("div");
      name.className = "item-name";
      name.textContent = item.name;
      const desc = document.createElement("div");
      desc.className = "item-desc";
      desc.textContent = item.description || "A Crave Craft favourite, made with care.";
      info.append(name, desc);
      if (item.carbs !== null && item.protein !== null) {
        const nutrition = document.createElement("div");
        nutrition.className = "item-nutrition";
        nutrition.textContent = `CARBS ${item.carbs}g  ·  PROTEIN ${item.protein}g`;
        info.appendChild(nutrition);
      }
      const price = document.createElement("div");
      price.className = "item-price";
      if (item.price !== null) {
        price.textContent = `₹${item.price}`;
        const label = document.createElement("small");
        label.textContent = "SWIGGY / ZOMATO";
        price.appendChild(label);
      } else {
        const pending = document.createElement("span");
        pending.className = "pending";
        pending.textContent = "Details coming soon";
        price.appendChild(pending);
      }
      row.append(info, price);
      section.appendChild(row);
    });
    list.appendChild(section);
  });
}
search.addEventListener("input", render);
render();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
