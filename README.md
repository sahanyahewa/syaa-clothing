# Syaa Clothing – Follow Us Page

A beautiful animated social media links page for **Syaa Clothing**, built as a single HTML file with no frameworks or dependencies required.

---

## ✨ Features

- **Animated background** — 5 glowing blobs float smoothly across a cyan-to-lime gradient, built with Canvas API (works on all mobile browsers)
- **Animated button glow** — Each social media card has a continuously shifting gradient border glow (Aceternity UI style)
- **Clickable social links** — Tap any card to open the social media app/website directly
- **Mobile first** — Fully responsive, designed to look great on phones and desktops
- **No install needed** — Single `.html` file, open directly in any browser

---

## 📱 Social Media Links

| Platform  | Handle / Contact     | Link |
|-----------|----------------------|------|
| TikTok    | @syaa.clothing       | https://www.tiktok.com/@syaa.clothing |
| Instagram | syaa_clothing_       | https://www.instagram.com/syaa_clothing_ |
| WhatsApp  | +94 77 176 0809      | https://wa.me/94771760809 |
| Facebook  | Syaa Clothing        | https://www.facebook.com/share/17fPpeKf8p/?mibextid=wwXIfr |

---

## 🚀 How to Use

### Option 1 — Open directly (No install needed)
1. Download `follow-us-v3.html`
2. Open it in any browser (Chrome, Safari, Firefox)
3. That's it! ✅

### Option 2 — Run inside a React project (VS Code)
1. Open your project in VS Code
2. Click `index.html` in the file panel
3. Press `Ctrl + A` to select all, then `Delete`
4. Open `follow-us-v3.html`, press `Ctrl + A` → `Ctrl + C`
5. Paste into `index.html` with `Ctrl + V`
6. Save with `Ctrl + S`
7. In the terminal run:
   ```bash
   npm run dev
   ```
8. Open `http://localhost:5173` in your browser ✅

### Option 3 — Share online (Free hosting)
1. Go to [tiiny.host](https://tiiny.host)
2. Upload `follow-us-v3.html`
3. Get a free shareable link — anyone can open it on their phone

---

## 📁 File Structure

```
syaa-social/
│
├── follow-us-v3.html      ← Main page (the one you need)
├── README.md              ← This file
│
└── src/                   ← React project files (optional)
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── lib/
    │   └── utils.js
    ├── ui/
    │   ├── background-gradient.jsx
    │   └── background-gradient-animation.jsx
    ├── pages/
    │   └── FollowUs.jsx
    └── assets/
        └── icons/         ← Place your PNG icons here
```

---

## ✏️ How to Edit

### Change social media text or links
Open `follow-us-v3.html` in VS Code and find these lines:

```html
<!-- TikTok -->
<a href="https://www.tiktok.com/@syaa.clothing" ...>
  <div class="label-bar lb-tiktok">syaa.clothing</div>

<!-- Instagram -->
<a href="https://www.instagram.com/syaa_clothing_" ...>
  <div class="label-bar lb-insta">syaa_clothing_</div>

<!-- WhatsApp -->
<a href="https://wa.me/94771760809" ...>
  <div class="label-bar lb-whatsapp">+94 77 176 0809</div>

<!-- Facebook -->
<a href="https://www.facebook.com/share/17fPpeKf8p/..." ...>
  <div class="label-bar lb-facebook">Syaa Clothing</div>
```

Change the `href` and label text to whatever you need.

### Change animation speed
Find the `blobs` array in the `<script>` section and change the `period` values:
- **Lower number** = faster movement
- **Higher number** = slower movement

```js
const blobs = [
  { ..., period: 7000, ... },  // ← change this number
  { ..., period: 6000, ... },
  ...
];
```

### Change background colours
Find the `tint` gradient in the `draw` function:

```js
tint.addColorStop(0,   'rgba(0, 229, 255, 0.72)');  // top colour
tint.addColorStop(0.4, 'rgba(0, 207, 170, 0.62)');  // mid colour
tint.addColorStop(0.7, 'rgba(0, 230, 118, 0.65)');  // lower colour
tint.addColorStop(1,   'rgba(118, 255, 3, 0.68)');  // bottom colour
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 Canvas API | Animated background blobs |
| CSS Keyframe Animations | Button glow effect |
| CSS Radial Gradients | Social card colours |
| Google Fonts | Black Han Sans, Rajdhani |
| Vanilla JavaScript | Canvas render loop |

No npm, no React, no dependencies — pure HTML/CSS/JS.

---

## 📞 Contact

**Syaa Clothing**
- WhatsApp: +94 77 176 0809
- Instagram: [@syaa_clothing_](https://www.instagram.com/syaa_clothing_)
- TikTok: [@syaa.clothing](https://www.tiktok.com/@syaa.clothing)

---

*Built with ❤️ for Syaa Clothing – 2025*