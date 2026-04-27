# 🚀 Syaa Clothing – Follow Us Page
## Complete Setup Guide for Beginners

---

## 📁 FOLDER STRUCTURE
After setup, your project looks like this:

```
syaa-social/                   ← Your project folder
│
├── index.html                 ← Main HTML file
├── package.json               ← Project settings
├── vite.config.js             ← Vite settings
├── tailwind.config.js         ← Tailwind settings
├── postcss.config.js          ← PostCSS settings
│
└── src/                       ← All your code goes here
    ├── main.jsx               ← App entry point
    ├── App.jsx                ← Root component
    ├── index.css              ← Global styles
    │
    ├── lib/
    │   └── utils.js           ← Helper functions (cn)
    │
    ├── ui/                    ← Aceternity UI components
    │   ├── background-gradient.jsx
    │   └── background-gradient-animation.jsx
    │
    ├── pages/
    │   └── FollowUs.jsx       ← YOUR MAIN PAGE ← Edit this!
    │
    └── assets/
        └── icons/             ← Put your PNG icons here
            ├── tiktok.png
            ├── instagram.png
            ├── whatsapp.png
            └── facebook.png
```

---

## 🛠️ STEP-BY-STEP SETUP

### STEP 1 – Install Node.js (if you haven't)
1. Go to https://nodejs.org
2. Download the "LTS" version (green button)
3. Install it (just click Next → Next → Finish)
4. To check it worked: open Terminal/Command Prompt and type:
   ```
   node --version
   ```
   You should see something like: v20.0.0

---

### STEP 2 – Open VS Code Terminal
1. Open VS Code
2. Press `Ctrl + `` ` (backtick key, top-left of keyboard) to open Terminal
3. You'll see a black panel at the bottom

---

### STEP 3 – Create the project
Type these commands ONE BY ONE in the terminal, pressing Enter after each:

```bash
npm create vite@latest syaa-social -- --template react
cd syaa-social
npm install
npm install motion clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### STEP 4 – Copy all the files
Now copy each file I gave you into the correct location.

To create a folder in VS Code:
- Right-click in the file panel on the left
- Click "New Folder"
- Type the folder name

To create a file:
- Right-click inside the folder
- Click "New File"
- Type the file name
- Paste the code I gave you

Files to create/replace:
✅ index.html              → replace the existing one
✅ vite.config.js          → replace the existing one
✅ tailwind.config.js      → new file
✅ postcss.config.js       → replace the existing one
✅ package.json            → replace the existing one
✅ src/main.jsx            → replace the existing one
✅ src/App.jsx             → replace the existing one
✅ src/index.css           → replace the existing one
✅ src/lib/utils.js        → create new folder "lib", then file
✅ src/ui/background-gradient.jsx            → create folder "ui"
✅ src/ui/background-gradient-animation.jsx  → same folder
✅ src/pages/FollowUs.jsx  → create folder "pages"

---

### STEP 5 – Run the project
In the VS Code terminal, type:
```bash
npm run dev
```

You'll see:
```
  VITE v5.0.0  ready in 300 ms
  ➜  Local:   http://localhost:5173/
```

Open your browser and go to: http://localhost:5173

🎉 YOUR PAGE IS LIVE!

---

## 🖼️ HOW TO USE YOUR OWN ICONS (PNG files)

1. Copy your 4 PNG icon files into: `src/assets/icons/`

2. Open `src/pages/FollowUs.jsx`

3. At the very TOP of the file, add these imports:
```jsx
import tiktokIcon from '../assets/icons/tiktok.png'
import instagramIcon from '../assets/icons/instagram.png'
import whatsappIcon from '../assets/icons/whatsapp.png'
import facebookIcon from '../assets/icons/facebook.png'
```

4. In the SOCIALS array, replace each `icon:` line:

TikTok:
```jsx
icon: <img src={tiktokIcon} alt="TikTok" className="w-10 h-10 object-contain" />,
```

Instagram:
```jsx
icon: <img src={instagramIcon} alt="Instagram" className="w-10 h-10 object-contain" />,
```

WhatsApp:
```jsx
icon: <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 object-contain" />,
```

Facebook:
```jsx
icon: <img src={facebookIcon} alt="Facebook" className="w-10 h-10 object-contain" />,
```

---

## ✏️ HOW TO CHANGE THE TEXT

Open `src/pages/FollowUs.jsx` and find the SOCIALS array.
Change the `label:` value for each platform:

```jsx
const SOCIALS = [
  {
    platform: "TikTok",
    label: "your.tiktok.name",   ← change this
    ...
  },
  {
    platform: "Instagram",
    label: "your_instagram_",    ← change this
    ...
  },
  {
    platform: "WhatsApp",
    label: "+94 XX XXX XXXX",    ← change this
    ...
  },
  {
    platform: "Facebook",
    label: "Your Page Name",     ← change this
    ...
  },
];
```

---

## 📱 TESTING ON MOBILE

While `npm run dev` is running:
1. Find your computer's local IP (e.g., 192.168.1.5)
2. On your phone (same WiFi), open browser
3. Go to: http://192.168.1.5:5173

---

## 🏗️ BUILD FOR PRODUCTION (when ready to publish)

```bash
npm run build
```

This creates a `dist/` folder you can upload to any web host.

---

## ❓ COMMON ERRORS

**"command not found: npm"**
→ Node.js isn't installed. Go to Step 1.

**"Cannot find module"**
→ Run `npm install` again in the terminal.

**Page is blank / error in browser**
→ Check the terminal for red error messages.
→ Make sure all files are saved (Ctrl+S).

**Styles not working**
→ Make sure tailwind.config.js content includes `"./src/**/*.{js,ts,jsx,tsx}"`
