/* Liberia Online Library — App Logic */

const books = [
  // History
  {
    id: 1,
    title: "A History of Liberia",
    author: "Various Sources",
    category: "history",
    description: "An accessible overview of Liberia from the arrival of the first settlers in 1822 through independence and the modern era.",
    tags: ["History", "Nation Building"],
    icon: "🏛️",
    link: "https://www.gutenberg.org/"
  },
  {
    id: 2,
    title: "The Lone Star: The Story of Liberia",
    author: "Historical Archive",
    category: "history",
    description: "The founding of Africa’s first republic and the people who shaped its early years.",
    tags: ["History", "Founding"],
    icon: "⭐",
    link: null
  },
  {
    id: 3,
    title: "Liberia: Portrait of a Country",
    author: "Educational Series",
    category: "history",
    description: "Geography, people, counties, and the rich diversity of Liberia’s regions.",
    tags: ["Geography", "Culture"],
    icon: "🗺️",
    link: null
  },
  // Culture
  {
    id: 4,
    title: "Liberian Proverbs & Wisdom",
    author: "Oral Tradition",
    category: "culture",
    description: "A collection of proverbs from across Liberia’s ethnic groups — wisdom for daily life.",
    tags: ["Proverbs", "Wisdom"],
    icon: "💬",
    link: null
  },
  {
    id: 5,
    title: "Folktales of Liberia",
    author: "Traditional Storytellers",
    category: "culture",
    description: "Spider stories, clever animals, and moral tales told around the fire for generations.",
    tags: ["Folktales", "Children"],
    icon: "🦊",
    link: null
  },
  {
    id: 6,
    title: "The Sixteen Tribes of Liberia",
    author: "Cultural Studies",
    category: "culture",
    description: "An introduction to the languages, customs, and heritage of Liberia’s ethnic groups.",
    tags: ["Culture", "Identity"],
    icon: "🌍",
    link: null
  },
  // Education
  {
    id: 7,
    title: "Basic Mathematics for Liberian Students",
    author: "Education Series",
    category: "education",
    description: "Clear explanations of arithmetic, fractions, and everyday maths with local examples.",
    tags: ["Math", "School"],
    icon: "🔢",
    link: null
  },
  {
    id: 8,
    title: "English for Everyday Liberia",
    author: "Language Series",
    category: "education",
    description: "Practical English for school, work, and daily communication, with Liberian context.",
    tags: ["English", "Language"],
    icon: "📝",
    link: null
  },
  {
    id: 9,
    title: "Study Skills for Success",
    author: "Student Guide",
    category: "education",
    description: "How to take notes, prepare for exams, and manage time — written for Liberian learners.",
    tags: ["Study", "Skills"],
    icon: "📚",
    link: null
  },
  // Agriculture
  {
    id: 10,
    title: "Growing Rice in Liberia",
    author: "Agricultural Extension",
    category: "agriculture",
    description: "Practical guidance on upland and swamp rice cultivation suited to Liberian conditions.",
    tags: ["Rice", "Farming"],
    icon: "🌾",
    link: null
  },
  {
    id: 11,
    title: "Cassava: From Field to Table",
    author: "Farm Knowledge",
    category: "agriculture",
    description: "Planting, pest control, processing, and storage of cassava — a Liberian staple.",
    tags: ["Cassava", "Food"],
    icon: "🥔",
    link: null
  },
  {
    id: 12,
    title: "Cocoa Farming Basics",
    author: "Agricultural Guide",
    category: "agriculture",
    description: "How to start and maintain a small cocoa farm for income and export.",
    tags: ["Cocoa", "Cash Crop"],
    icon: "🍫",
    link: null
  },
  // Business
  {
    id: 13,
    title: "Starting a Small Business in Liberia",
    author: "Entrepreneurship Series",
    category: "business",
    description: "From idea to first sale — simple steps for market stalls, shops, and services.",
    tags: ["Business", "Start-up"],
    icon: "🏪",
    link: null
  },
  {
    id: 14,
    title: "Simple Bookkeeping for Traders",
    author: "Business Skills",
    category: "business",
    description: "How to keep basic records of money in and out using a notebook.",
    tags: ["Finance", "Records"],
    icon: "📒",
    link: null
  },
  {
    id: 15,
    title: "Market Skills & Customer Care",
    author: "Trade Guide",
    category: "business",
    description: "Pricing, negotiation, and treating customers well to grow your business.",
    tags: ["Sales", "Service"],
    icon: "🤝",
    link: null
  },
  // Children
  {
    id: 16,
    title: "Anansi and the Liberian Forest",
    author: "Children’s Stories",
    category: "children",
    description: "A fun story about the clever spider and the animals of the Liberian rainforest.",
    tags: ["Story", "Ages 5-10"],
    icon: "🕷️",
    link: null
  },
  {
    id: 17,
    title: "My First Liberian ABC",
    author: "Early Learning",
    category: "children",
    description: "Letters of the alphabet illustrated with familiar Liberian objects and animals.",
    tags: ["Alphabet", "Ages 3-7"],
    icon: "🔤",
    link: null
  },
  {
    id: 18,
    title: "The Little Farmer",
    author: "Children’s Series",
    category: "children",
    description: "A picture story about a child learning to grow food with their family.",
    tags: ["Story", "Farming"],
    icon: "👦",
    link: null
  },
  // Science & Health
  {
    id: 19,
    title: "Science Around Us",
    author: "Science for All",
    category: "science",
    description: "Simple science explanations using examples from Liberian daily life and nature.",
    tags: ["Science", "Nature"],
    icon: "🔬",
    link: null
  },
  {
    id: 20,
    title: "Staying Healthy in Liberia",
    author: "Health Education",
    category: "health",
    description: "Hygiene, clean water, malaria prevention, and when to visit a clinic.",
    tags: ["Health", "Prevention"],
    icon: "💚",
    link: null
  },
  {
    id: 21,
    title: "Murder in the Cassava Patch",
    author: "Bai T. Moore",
    category: "literature",
    description: "A classic Liberian novel of love, jealousy, and tragedy set in a rural community.",
    tags: ["Novel", "Classic"],
    icon: "📖",
    link: null
  },
  {
    id: 22,
    title: "The Rain and the Night",
    author: "Wilton Sankawulo",
    category: "literature",
    description: "Powerful short stories capturing Liberian life, struggle, and hope.",
    tags: ["Stories", "Classic"],
    icon: "🌧️",
    link: null
  }
];

// State
let currentFilter = "all";
let currentSearch = "";

// DOM
const booksGrid = document.getElementById("booksGrid");
const emptyState = document.getElementById("emptyState");
const resultsInfo = document.getElementById("resultsInfo");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryPills = document.getElementById("categoryPills");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const bookModal = document.getElementById("bookModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

// Render books
function renderBooks() {
  const filtered = books.filter((book) => {
    const matchesCategory = currentFilter === "all" || book.category === currentFilter;
    const q = currentSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.description.toLowerCase().includes(q) ||
      book.tags.some((t) => t.toLowerCase().includes(q)) ||
      book.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  booksGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.hidden = false;
    resultsInfo.textContent = "No results found";
    return;
  }

  emptyState.hidden = true;
  resultsInfo.textContent =
    currentFilter === "all" && !currentSearch
      ? `Showing ${filtered.length} resources`
      : `Showing ${filtered.length} result${filtered.length === 1 ? "" : "s"}`;

  filtered.forEach((book) => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
      <div class="book-cover ${book.category}">${book.icon}</div>
      <div class="book-body">
        <div class="book-category">${book.category}</div>
        <h3 class="book-title">${escapeHtml(book.title)}</h3>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <p class="book-desc">${escapeHtml(book.description)}</p>
        <div class="book-meta">
          ${book.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>
    `;
    card.addEventListener("click", () => openBook(book));
    booksGrid.appendChild(card);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function openBook(book) {
  modalBody.innerHTML = `
    <div class="modal-body">
      <div class="book-cover ${book.category}" style="height:100px;border-radius:8px;margin-bottom:1.25rem;font-size:2.2rem;">
        ${book.icon}
      </div>
      <h2>${escapeHtml(book.title)}</h2>
      <p class="modal-author">by ${escapeHtml(book.author)}</p>
      <p class="modal-desc">${escapeHtml(book.description)}</p>
      <div class="book-meta" style="margin-bottom:1.25rem;">
        ${book.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
      <div class="modal-actions">
        ${
          book.link
            ? `<a class="btn btn-primary" href="${book.link}" target="_blank" rel="noopener">Open Resource →</a>`
            : `<button class="btn btn-primary" disabled>Reading coming soon</button>`
        }
        <button class="btn btn-secondary" id="modalCloseBtn">Close</button>
      </div>
    </div>
  `;
  bookModal.hidden = false;
  document.body.style.overflow = "hidden";

  document.getElementById("modalCloseBtn")?.addEventListener("click", closeModal);
}

function closeModal() {
  bookModal.hidden = true;
  document.body.style.overflow = "";
}

// Events
searchBtn.addEventListener("click", () => {
  currentSearch = searchInput.value;
  renderBooks();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    currentSearch = searchInput.value;
    renderBooks();
  }
});

// Live search
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentSearch = searchInput.value;
    renderBooks();
  }, 250);
});

categoryPills.addEventListener("click", (e) => {
  const btn = e.target.closest(".pill");
  if (!btn) return;
  categoryPills.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderBooks();
});

// Collection cards → filter
document.querySelectorAll(".collection-card").forEach((card) => {
  card.addEventListener("click", () => {
    const cat = card.dataset.category;
    currentFilter = cat;
    categoryPills.querySelectorAll(".pill").forEach((p) => {
      p.classList.toggle("active", p.dataset.filter === cat);
    });
    document.getElementById("books").scrollIntoView({ behavior: "smooth" });
    renderBooks();
  });
});

// Mobile menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close modal
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Init
document.getElementById("bookCount").textContent = books.length + "+";
renderBooks();
