# ✨ LUMINA — Gallery WebApp

A premium, dark-themed photo gallery built with **React 19**, **Vite**, and **Tailwind CSS v4**, powered by the [Picsum Photos API](https://picsum.photos/). Explore a curated collection of beautiful photography with smooth animations, skeleton loading states, and a sleek amber-accented design.

## 🔗 Live Demo

- [View Live Site](https://ashutosht0210.github.io/Gallery-WebApp/)

## ✨ Features

- **Curated Photo Grid** — Fetches and displays 12 photos per page from the Picsum Photos API in a responsive grid layout
- **Skeleton Loading** — Animated pulse placeholders while images are being fetched, providing a seamless loading experience
- **Interactive Photo Cards** — Hover-to-zoom image previews with amber glow effects; each card links directly to the full-resolution source
- **Glassmorphism Pagination** — Frosted-glass pagination bar with Prev/Next controls, page indicator, and disabled state handling for the first page
- **Lazy Image Loading** — Images use native `loading="lazy"` for improved performance and faster initial page loads
- **Dark Premium Theme** — Zinc-950 background with amber/gold gradient accents, custom text selection colors, and smooth micro-animations throughout
- **Fully Responsive** — Adapts from 2-column on mobile to 4-column on desktop using a CSS Grid layout

## 🛠️ Tech Stack

- [React 19](https://react.dev/) — UI library
- [Vite 8](https://vitejs.dev/) — Build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS framework (via `@tailwindcss/vite` plugin)
- [Axios](https://axios-http.com/) — HTTP client
- [Picsum Photos API](https://picsum.photos/) — Image data source
- [gh-pages](https://www.npmjs.com/package/gh-pages) — GitHub Pages deployment

## 📁 Project Structure

```
Gallery-WebApp/
├── src/
│   ├── components/
│   │   ├── Card.jsx            # Individual photo card with hover effects & author info
│   │   ├── Footer.jsx          # Glassmorphism pagination bar (Prev / Next / Page indicator)
│   │   ├── Loading.jsx          # Skeleton loader + card rendering logic
│   │   └── PrintUserData.jsx    # Responsive grid container for photo cards
│   ├── App.jsx                  # Main app — data fetching, header, layout
│   ├── index.css                # Tailwind CSS v4 import
│   └── main.jsx                 # React DOM entry point
├── dist/                        # Production build output
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── LICENSE
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ashutosht0210/Gallery-WebApp.git
   cd Gallery-WebApp
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🧩 How It Works

### Data Flow

`App.jsx` manages the current page (`index`) in state. Whenever `index` changes, it fetches a new batch of 12 photos from the Picsum Photos API:

```
https://picsum.photos/v2/list?page={index}&limit=12
```

The fetched data flows through a clean component hierarchy:

```
App → PrintUserData → Loading → Card
                    ↘ (skeleton placeholders when loading)
App → Footer (Button) → updates index → triggers re-fetch
```

### Component Responsibilities

| Component | Role |
|---|---|
| **`App.jsx`** | Root component — fetches data, renders header with gradient branding, orchestrates layout |
| **`PrintUserData.jsx`** | Responsive grid container — wraps cards in a 2→4 column CSS Grid |
| **`Loading.jsx`** | Conditional renderer — shows `Card` components when data is available, or 24 animated skeleton placeholders while loading |
| **`Card.jsx`** | Individual photo card — displays image with hover zoom, photographer name, and links to the original source |
| **`Footer.jsx`** | Pagination controls — glassmorphism pill bar with Prev/Next buttons, page number display, and first-page disable logic |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ using React + Vite + Tailwind CSS
