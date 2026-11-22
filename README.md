# वैभव आणि प्रणाली | शुभविवाह निमंत्रण

A modern, mobile-first Maharashtrian wedding invitation website for **वैभव आणि प्रणाली** built with React JS, Vite, and plain CSS.

---

## 🌸 Key Features

- **Mobile-First Design**: Optimized for viewing on smartphones, ensuring names, wedding date, and primary action are immediately visible without excessive scrolling.
- **Modern Maharashtrian Aesthetic**:
  - Warm Ivory background (`#FAF6EE`)
  - Deep Royal Blue inspired by प्रणाली's Paithani saree (`#112044` / `#162B5B`)
  - Muted Antique Gold borders & dividers (`#C09848`)
  - Soft Turmeric accent for the Haldi ceremony (`#D67F0A` / `#FFF9EC`)
- **Authentic Marathi Typography**: Noto Serif Devanagari for headings/names and Noto Sans Devanagari for body text.
- **Curated Photography**: 6 couple photographs featuring architectural temple arches, marigold garlands, and the majestic stone Deepmala (दीपमाळ).
- **Single Source of Truth**: All event details, venue links, and captions are centralized in `src/data/invitationData.js`.
- **Accessibility & Performance**: Semantic HTML5, `:focus-visible` styling, responsive image loading, and `prefers-reduced-motion` compliance.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

The production output will be generated inside the `dist/` directory.

---

## 🚀 Deploying to Vercel

This project is ready for one-click deployment on [Vercel](https://vercel.com):

1. **Framework Preset**: `Vite`
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

A `vercel.json` file is already included with these settings.
