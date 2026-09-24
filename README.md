# Liberia Online Library

**Knowledge for Every Liberian — Free, Open & Forever**

Liberia’s premier digital library. Free access to books, educational resources, history, culture, agriculture knowledge, and learning materials — designed to work even on slow connections.

## Features

- 🔍 Instant search across titles, authors, and topics
- 📚 Curated collections (History, Culture, Education, Agriculture, Business, Children…)
- 🏷️ Category filters
- 📱 Mobile-first & lightweight (works on 2G)
- 📖 Book detail modal with open links where available
- 🎨 Clean, warm design inspired by Liberian colours

## Live Site

Once GitHub Pages is enabled, the site will be available at:

**https://tolbertinnovation-debug.github.io/Liberia-Online-Library/**

## How to run locally

Just open `index.html` in any modern browser. No build step required.

```bash
# Or serve with a simple local server
npx serve .
```

## Project Structure

```
├── index.html      # Main page
├── styles.css      # All styles (no frameworks)
├── app.js          # Search, filter, and book data
└── README.md
```

## Adding more books

Edit the `books` array in `app.js`. Each book needs:

```js
{
  id: 23,
  title: "Book Title",
  author: "Author Name",
  category: "history",   // history | culture | education | agriculture | business | children | science | health | literature
  description: "Short description...",
  tags: ["Tag1", "Tag2"],
  icon: "📖",
  link: "https://example.com" // or null
}
```

## Built for Liberia

This library prioritises:
- Liberian history and culture
- Practical knowledge (farming, business, education)
- Low-data design
- Free and permanent access

---

Built with ❤️ for Liberia  
A project in the spirit of open knowledge.
