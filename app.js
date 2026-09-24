/* Liberia Online Library — App Logic */

const books = [
  // ========== HISTORY (Real free resources) ==========
  {
    id: 1,
    title: "Liberia: Description, History, Problems",
    author: "Frederick Starr",
    category: "history",
    description: "A classic 1913 account of Liberia covering its description, history, and challenges. Fully free and public domain on Project Gutenberg.",
    tags: ["History", "Classic", "Free Download"],
    icon: "🏛️",
    link: "https://www.gutenberg.org/ebooks/54542"
  },
  {
    id: 2,
    title: "History of Liberia",
    author: "Thomas H. B. Walker",
    category: "history",
    description: "Early 20th-century history of Liberia written by a Liberian. Available free on Internet Archive.",
    tags: ["History", "Liberian Author", "Free"],
    icon: "📜",
    link: "https://archive.org/details/historyofliberia00walk"
  },
  {
    id: 3,
    title: "Liberia as I Found It in 1858",
    author: "Alexander M. Cowan",
    category: "history",
    description: "First-hand observations of Liberia in the mid-19th century. Free on Internet Archive.",
    tags: ["History", "Travel", "Free"],
    icon: "🗺️",
    link: "https://archive.org/details/liberiaasifoundi00cowa"
  },
  {
    id: 4,
    title: "The Lone Star Republic",
    author: "Educational Series",
    category: "history",
    description: "The story of how Liberia became Africa’s first independent republic and the people who built it.",
    tags: ["History", "Founding"],
    icon: "⭐",
    link: null
  },
  {
    id: 5,
    title: "Presidents of Liberia",
    author: "Historical Archive",
    category: "history",
    description: "A guide to the leaders who have guided Liberia from Joseph Jenkins Roberts to the present day.",
    tags: ["History", "Leaders"],
    icon: "👔",
    link: null
  },

  // ========== CULTURE & FOLKLORE ==========
  {
    id: 6,
    title: "Liberian Proverbs & Wisdom",
    author: "Oral Tradition",
    category: "culture",
    description: "Proverbs from across Liberia’s ethnic groups — short sayings that carry deep wisdom for daily life.",
    tags: ["Proverbs", "Wisdom"],
    icon: "💬",
    link: null
  },
  {
    id: 7,
    title: "Folktales of Liberia",
    author: "Traditional Storytellers",
    category: "culture",
    description: "Spider stories, clever animals, and moral tales told around the fire for generations.",
    tags: ["Folktales", "Children"],
    icon: "🦊",
    link: null
  },
  {
    id: 8,
    title: "The Sixteen Tribes of Liberia",
    author: "Cultural Studies",
    category: "culture",
    description: "An introduction to the languages, customs, and heritage of Liberia’s ethnic groups.",
    tags: ["Culture", "Identity"],
    icon: "🌍",
    link: null
  },
  {
    id: 9,
    title: "Storybooks Liberia Collection",
    author: "African Storybook / Global Storybooks",
    category: "culture",
    description: "Free open children’s stories available in English and major Liberian languages. Download and read offline.",
    tags: ["Children", "Free", "Open Access"],
    icon: "📖",
    link: "https://global-asp.github.io/storybooks-liberia/"
  },

  // ========== EDUCATION ==========
  {
    id: 10,
    title: "Basic Mathematics for Liberian Students",
    author: "Education Series",
    category: "education",
    description: "Clear explanations of arithmetic, fractions, and everyday maths with local examples.",
    tags: ["Math", "School"],
    icon: "🔢",
    link: null
  },
  {
    id: 11,
    title: "English for Everyday Liberia",
    author: "Language Series",
    category: "education",
    description: "Practical English for school, work, and daily communication, with Liberian context.",
    tags: ["English", "Language"],
    icon: "📝",
    link: null
  },
  {
    id: 12,
    title: "Study Skills for Success",
    author: "Student Guide",
    category: "education",
    description: "How to take notes, prepare for exams, and manage time — written for Liberian learners.",
    tags: ["Study", "Skills"],
    icon: "📚",
    link: null
  },
  {
    id: 13,
    title: "Project Gutenberg Free Library",
    author: "Project Gutenberg",
    category: "education",
    description: "Over 70,000 free eBooks you can read online or download. Great for classic literature and learning.",
    tags: ["Free Books", "Classics"],
    icon: "🆓",
    link: "https://www.gutenberg.org/"
  },

  // ========== AGRICULTURE (Real resources) ==========
  {
    id: 14,
    title: "Guide to Rice Culture in Lowland",
    author: "Central Agricultural Research Institute (CARI)",
    category: "agriculture",
    description: "Practical field guide for lowland rice production in Liberia. Free PDF from CARI researchers.",
    tags: ["Rice", "Farming", "Free PDF"],
    icon: "🌾",
    link: "https://zenodo.org/records/6414161/files/WJARR-2022-0254.pdf?download=1"
  },
  {
    id: 15,
    title: "Rice Production Training Manuals",
    author: "Ministry of Agriculture, Liberia",
    category: "agriculture",
    description: "Official guides covering nursery preparation, fertiliser use, transplanting, weed control, and more.",
    tags: ["Rice", "Official", "Free"],
    icon: "📋",
    link: "https://moa.gov.lr/publications/document-type/rice-how-do-tips"
  },
  {
    id: 16,
    title: "Cassava: From Field to Table",
    author: "Farm Knowledge",
    category: "agriculture",
    description: "Planting, pest control, processing, and storage of cassava — a Liberian staple food.",
    tags: ["Cassava", "Food"],
    icon: "🥔",
    link: null
  },
  {
    id: 17,
    title: "Cocoa Farming Basics",
    author: "Agricultural Guide",
    category: "agriculture",
    description: "How to start and maintain a small cocoa farm for income and export.",
    tags: ["Cocoa", "Cash Crop"],
    icon: "🍫",
    link: null
  },
  {
    id: 18,
    title: "Growing Vegetables in Liberia",
    author: "Extension Series",
    category: "agriculture",
    description: "Practical advice for home gardens and market gardening with local crops and conditions.",
    tags: ["Vegetables", "Garden"],
    icon: "🥬",
    link: null
  },

  // ========== BUSINESS ==========
  {
    id: 19,
    title: "Starting a Small Business in Liberia",
    author: "Entrepreneurship Series",
    category: "business",
    description: "From idea to first sale — simple steps for market stalls, shops, and services.",
    tags: ["Business", "Start-up"],
    icon: "🏪",
    link: null
  },
  {
    id: 20,
    title: "Simple Bookkeeping for Traders",
    author: "Business Skills",
    category: "business",
    description: "How to keep basic records of money in and out using a notebook.",
    tags: ["Finance", "Records"],
    icon: "📒",
    link: null
  },
  {
    id: 21,
    title: "Market Skills & Customer Care",
    author: "Trade Guide",
    category: "business",
    description: "Pricing, negotiation, and treating customers well to grow your business.",
    tags: ["Sales", "Service"],
    icon: "🤝",
    link: null
  },

  // ========== CHILDREN ==========
  {
    id: 22,
    title: "Goat, Dog, and Cow",
    author: "African Storybook",
    category: "children",
    description: "A fun story about three animal friends who take a taxi. Free to read and download from Storybooks Liberia.",
    tags: ["Story", "Ages 5-10", "Free"],
    icon: "🐐",
    link: "https://global-asp.github.io/storybooks-liberia/stories/en/0004/"
  },
  {
    id: 23,
    title: "Why Hippos Have No Hair",
    author: "African Storybook",
    category: "children",
    description: "A classic African animal story explaining why hippos stay near water. Free download available.",
    tags: ["Story", "Folktale", "Free"],
    icon: "🦛",
    link: "https://global-asp.github.io/storybooks-liberia/stories/en/0111/"
  },
  {
    id: 24,
    title: "I Like to Read!",
    author: "African Storybook",
    category: "children",
    description: "A simple story that encourages children to love reading. Perfect for early learners.",
    tags: ["Story", "Ages 3-7", "Free"],
    icon: "📕",
    link: "https://global-asp.github.io/storybooks-liberia/stories/en/0087/"
  },
  {
    id: 25,
    title: "Hen and Eagle",
    author: "African Storybook",
    category: "children",
    description: "An African folktale about friendship, sharing, and why eagles hunt chickens. Free to download.",
    tags: ["Story", "Folktale", "Free"],
    icon: "🐔",
    link: "https://global-asp.github.io/storybooks-liberia/stories/en/0158/"
  },
  {
    id: 26,
    title: "My First Liberian ABC",
    author: "Early Learning",
    category: "children",
    description: "Letters of the alphabet illustrated with familiar Liberian objects and animals.",
    tags: ["Alphabet", "Ages 3-7"],
    icon: "🔤",
    link: null
  },

  // ========== SCIENCE & HEALTH ==========
  {
    id: 27,
    title: "Science Around Us",
    author: "Science for All",
    category: "science",
    description: "Simple science explanations using examples from Liberian daily life and nature.",
    tags: ["Science", "Nature"],
    icon: "🔬",
    link: null
  },
  {
    id: 28,
    title: "Staying Healthy in Liberia",
    author: "Health Education",
    category: "health",
    description: "Hygiene, clean water, malaria prevention, and when to visit a clinic.",
    tags: ["Health", "Prevention"],
    icon: "💚",
    link: null
  },
  {
    id: 29,
    title: "Malaria Prevention Guide",
    author: "Health Series",
    category: "health",
    description: "Practical steps every family can take to reduce the risk of malaria.",
    tags: ["Health", "Malaria"],
    icon: "🦟",
    link: null
  },

  // ========== LITERATURE ==========
  {
    id: 30,
    title: "Murder in the Cassava Patch",
    author: "Bai T. Moore",
    category: "literature",
    description: "Liberia’s most famous novella. A powerful story of love, jealousy and tragedy set in a rural community. Required reading in many Liberian schools.",
    tags: ["Novel", "Classic", "Liberian Author"],
    icon: "📖",
    link: null
  },
  {
    id: 31,
    title: "Ebony Dust",
    author: "Bai T. Moore",
    category: "literature",
    description: "A collection of poems by one of Liberia’s greatest writers, drawing on village life and Liberian experience.",
    tags: ["Poetry", "Classic", "Liberian Author"],
    icon: "🪶",
    link: null
  },
  {
    id: 32,
    title: "The Rain and the Night",
    author: "Wilton Sankawulo",
    category: "literature",
    description: "Powerful short stories capturing Liberian life, struggle, and hope by a former Head of State and celebrated writer.",
    tags: ["Stories", "Classic", "Liberian Author"],
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
            ? `<a class="btn btn-primary" href="${book.link}" target="_blank" rel="noopener">Open / Download →</a>`
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
