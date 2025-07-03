# my-cozy-diary

A **Progressive Web App (PWA) personal blog** that feels warm, romantic, and emotionally expressive—like a cozy digital diary.  
The app is clean, mobile-friendly, installable, and features a beautiful, heartfelt design with soft colors, rounded shapes, and handwritten-style fonts.

---

## ✨ Features

- **Homepage** with a welcome message, recent blog entries, and an inviting layout
- **Single post page** for reading full blog entries
- **About Me page** with profile image and personal story
- **Rotating favorite quotes** section for inspiration
- **Sticky top navigation** with smooth scrolling and subtle animations
- **Installable PWA** (Add to Home Screen prompt)
- **Offline support** with service worker and caching
- **Responsive design** for phones, tablets, and desktops
- **Easy content updates** using JSON files for posts and quotes
- **Light, airy, heartfelt aesthetics** (soft colors, rounded corners, elegant fonts)
- **Fast loading** and native-app feel

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/jparkerdoxsnap/my-cozy-diary.git
cd my-cozy-diary
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🌐 Deploy to GitHub Pages

### 1. Set the `base` in `vite.config.js`:

```js
export default defineConfig({
  base: '/my-cozy-diary/',
  // ...
});
```

### 2. Install `gh-pages` (if not installed):

```bash
npm install --save-dev gh-pages
```

### 3. Add these scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 4. Deploy

```bash
npm run deploy
```

Your site will be live at:  
`https://YOUR-USERNAME.github.io/my-cozy-diary/`

---

## 🖼️ Customization Guide

- **Blog posts:**  
  Edit `src/data/posts.json` to add, edit, or remove blog entries.

- **Quotes:**  
  Edit `src/data/quotes.json` to update your favorite quotes.

- **Profile image:**  
  Replace `/public/profile.jpg` with your own photo.

- **Colors, fonts, and styles:**  
  Tweak `styled-components` in the `src/components/` and `src/pages/` folders.

---

## 🛠️ Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- [Workbox](https://developer.chrome.com/docs/workbox/)

---

## 📱 PWA Features

- Works offline after first load
- Installable on mobile and desktop (look for "Add to Home Screen" prompt)
- Launches in standalone mode with custom icons and splash screen

---

## 📄 License

MIT

---

**Made with ❤️ for the cozy, creative soul.**
