# 🙏 The Daily Gospel — "GOOD NEWS"

A responsive, single-page Christian news and devotional website built with semantic HTML5 and modern CSS (Flexbox & Grid). The site delivers daily scripture, gospel articles, and weekly wisdom devotionals in a clean, magazine-style layout.

## ✨ Features

- **Sticky Navigation Header** — Brand logo and quick links (Home, Scriptures, Gospel News, Devotionals) that stay visible while scrolling.
- **Verse of the Day Banner** — A centered, italicized daily scripture with reference citation.
- **Topic Filter Bar** — Pill-style category buttons (All, Parables, Prophecies, Christian Living) with an active state.
- **Featured Article Section** — A large highlighted story with image, category tag, description, "Read Full Message" button, and estimated read time.
- **Latest Articles Grid** — A responsive CSS Grid layout ("Deepening Your Walk") showcasing teaching, hope, and Christian living articles, each with its own image, tag, title, excerpt, and call-to-action.
- **Weekly Wisdom Nuggets** — A secondary card grid covering Faith, Grace, and Prayer devotionals.
- **Footer**
  - Brand mission statement
  - Quick navigation links
  - Social media links (YouTube, Instagram, Facebook, X/Twitter, LinkedIn) with Font Awesome icons
  - Email subscription form for weekly devotionals

## 📸 Screenshots

| Desktop View (Header & Hero) | Article Feed Grid | Interactive Footer |
| :---: | :---: | :---: |
| <img src="Images/News1.png" width="300" alt="Desktop Home View"> | <img src="Images/News2.png" width="300" alt="Article Grid View"> | <img src="Images/News3.png" width="300" alt="Footer Interface View"> |
## 🛠️ Tech Stack

- **HTML5** — Semantic structure (`header`, `main`, `section`, `article`, `footer`)
- **CSS3** — Flexbox (header, featured section, footer columns) and CSS Grid (news/wisdom card grids, footer layout)
- **Font Awesome 6.4.0** — Social media icons (loaded via CDN)
- **Responsive Design** — Media queries for desktop/mobile layout adjustments (e.g., featured section switches from column to row at 768px)

## 📁 Project Structure

```
News/
├── News.html       # Main page markup
├── News.css        # Stylesheet (resets, layout, components, responsiveness)
├── News.js         # Page scripting (interactivity, filters, etc.)
├── Images/
│   ├── Gospelnews.png
│   ├── Mountsermon.png
│   ├── HopeinJesus.png
│   ├── WorthyLife.png
│   ├── FaithinGod.png
│   ├── GraceofGod.png
│   └── Prayerimg.png
└── README.md
```

## 🚀 Getting Started

1. Clone or download this repository.
2. Make sure the `Images/` folder sits alongside `News.html` and `News.css`.
3. Open `News.html` in your browser — no build tools or server required.

> **Note:** Image paths currently use a space (`Images /`). For best compatibility across operating systems and servers, rename the folder to `Images` (no trailing space) and update the `src` attributes in `News.html` accordingly.

## 🎨 Color Palette

| Purpose | Color |
|---|---|
| Header / Footer background | `#1a252f` |
| Primary text | `#2c3e50` |
| Secondary/muted text | `#7f8c8d` / `#a0aec0` |
| Accent (hover, CTAs) | `#e67e22` / `#d35400` |
| Category tags | `#d35400` |
| Wisdom links | `#483D8B` |
| Page background | `#f4f6f8` |

## 📌 Roadmap / Ideas

- [ ] Wire up filter buttons to dynamically show/hide articles by category
- [ ] Connect subscription form to an email service
- [ ] Add individual article pages for "Read Full Message" / "Read Devotional" links
- [ ] Add dark mode toggle
- [ ] Improve accessibility (alt text audit, focus states)

## 👤 Author

**Kumala Adugna**
- [LinkedIn](https://www.linkedin.com/in/kumala-adugna-42812729b)
- [YouTube](https://www.youtube.com/@Kumalaadugna1)

## 📄 License

This project is open for personal and educational use. Feel free to fork and adapt for your own ministry or devotional projects.