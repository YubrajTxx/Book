# 📖 Yubraj Tamang — Interactive Portfolio Book

An interactive hardcover book portfolio built with **Next.js**, **Framer Motion**, and **Tailwind CSS v4**.  
Every section is a chapter. Navigate by flipping pages with realistic 3D animations.

![Portfolio Preview](public/desk-bg.png)

---

## ✨ Features

- 🎨 **Realistic 3D page flip animation** — powered by Framer Motion CSS transforms  
- 📱 **Fully responsive** — mobile-first design with touch/swipe support  
- 🌙 **Premium design** — warm leather hardcover, paper-cream pages, gold typography  
- ⌨️ **Keyboard navigation** — Arrow keys, Page Up/Down, Escape  
- 🔖 **Chapter bookmark nav** — click the ribbon to jump to any chapter  
- ✕ **Close button** — close the book from any page at any time  
- 🖱️ **Mouse scroll** — scroll within pages naturally using the mouse wheel  
- 🎯 **9 Chapters** — Welcome, Landing, About, Experience, Projects, Education, Skills, Contact, Back Cover

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Animations | Framer Motion 12 |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Fonts | Playfair Display, Inter (Google Fonts) |
| Icons | Material Symbols Rounded |
| Language | TypeScript |
| Deploy | GitHub Pages (static export) |

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Cloudflare Pages

This project is already prepared for static hosting. Cloudflare Pages is a great fit because the app is exported as a static site.

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio book"
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect to Cloudflare Pages

1. In Cloudflare Dashboard, open **Workers & Pages**
2. Click **Create** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Use these build settings:
   - Framework preset: `None`
   - Build command: `npm run build`
   - Output directory: `out`
5. Click **Save and Deploy**

### Step 3 — Optional environment variable

If you are deploying under a subpath such as `/portfolio-book`, set:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio-book
```

For a root domain deployment, leave it empty.

### Step 4 — Your site is live

Once Cloudflare finishes the build, your site will be available at your assigned Pages domain.

---

## 🌐 Optional: GitHub Pages

If you prefer GitHub Pages instead of Cloudflare Pages, the project is still compatible with it. You only need to set `NEXT_PUBLIC_BASE_PATH=/<repo-name>` during the build.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, meta SEO
│   ├── page.tsx          # Entry point — renders <Book />
│   └── globals.css       # Design tokens, all component styles
├── components/
│   ├── Book.tsx          # Core book engine — state, 3D flip, navigation
│   └── ChapterContent.tsx # All page/chapter components
└── data/
    └── portfolio.ts      # All content — edit this to personalise

public/
└── desk-bg.png           # Wooden desk background texture
```

---

## ✏️ Personalising the Content

All text content lives in one file:

```
src/data/portfolio.ts
```

Edit `experiences`, `projects`, `education`, `skillCategories`, and `aboutText` to make it your own.  
Update links in `ChapterContent.tsx` → `LandingPage` (Resume, GitHub, LinkedIn, Email).

---

## 📄 License

MIT — free to use, fork, and customise.
