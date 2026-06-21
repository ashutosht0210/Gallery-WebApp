# 📸 Gallery WebApp

A simple, dark-themed photo gallery built with **React** and **Vite**, powered by the [Picsum Photos API](https://picsum.photos/). Browse a paginated grid of photos along with the photographer's name for each image.

## 🔗 Live Demo

[View Live Site](#)

## ✨ Features

- Fetches photo data from the Picsum Photos API (`/v2/list`)
- Responsive grid layout with a sleek black background and white text
- Pagination controls (**Prev** / **Next**) to browse through pages of photos
- Displays the current page number
- Built with modern React (hooks: `useState`, `useEffect`) and Axios for data fetching

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Axios](https://axios-http.com/) — HTTP client
- Tailwind CSS (utility classes) — styling
- [Picsum Photos API](https://picsum.photos/) — image data source

## 📁 Project Structure

```
Gallery-WebApp/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── Footer.jsx        # Pagination controls (Prev / Next / Page indicator)
│   │   └── PrintUserData.jsx # Renders the photo grid
│   ├── App.jsx                # Main app component
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```


## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
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

## 🧩 How It Works

`App.jsx` keeps track of the current page (`index`) in state. Whenever `index` changes, it fetches a new batch of 15 photos from the Picsum Photos API:

```
https://picsum.photos/v2/list?page={index}&limit=15
```

The fetched data is passed down to:
- **`PrintUserData`** — renders each photo with the photographer's name
- **`Footer`** (rendered as `Button`) — provides Prev/Next pagination, updating `index` and triggering a re-fetch

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ using React + Vite