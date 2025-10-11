### 🌐 README Versions
- 🇺🇸 [English Version](./README.md)
- 🇮🇷 [نسخه فارسی](./README.FA.md)


# 🧩 Dashboard Template

A clean, minimal, and fast **React Dashboard Template** built with the latest modern stack.  
Responsive sidebar for both mobile and desktop, plus built-in **Dark/Light mode** support.

---

## ⚙️ Tech Stack

- ⚛️ **React 19**
- 🌐 **React Router 7**
- 🧹 **ESLint 9**
- 🎨 **Tailwind CSS 4**
- ⚡ **Vite 7**
- 🦀 **SWC 4**

---

## 🚀 Features

- 📱 Responsive sidebar (mobile & desktop)
- 🌗 Dark / Light theme toggle
- 🧠 Clean structure for scalable dashboards
- 🧩 Ready to extend with routes and components

---

### 🔗 Preview

> 🚀 **Live Demo:** [**Dashboard Skeleton (GitHub Pages)**](https://homow.github.io/dashboard-skeleton)  
> Explore the live preview of the dashboard structure, including responsive menu and dark/light themes.

---

## 🧭 Get Started

```bash
# Clone this repository
git clone https://github.com/homow/dashboard-skeleton.git

# Navigate
cd dashboard-skeleton

# Install dependencies
npm install

# Run development server
npm run dev
```

📁 Project Structure & Usage

```markdown
dashboard-skeleton/
├── src/                    # Main source folder (React + Vite)
│   ├── assets/             # Images and static assets
│   ├── components/         # Reusable UI components
│   ├── layout/             # Page layouts and structure (MainLayout, TopBar, SideBar)
│   ├── pages/              # Main application pages
│   ├── routes/             # App routing and navigation
│   ├── styles/             # CSS files or Tailwind configuration
│   ├── App.jsx             # Root React component
│   └── main.jsx            # Entry point (React + Vite)
├── eslint.config.js        # ESLint configuration for code linting
├── jsconfig.json           # Path aliases configuration for IDE support
└── vite.config.js          # Vite configuration (base path, plugins, etc.)
```

Everything is already set up — you just need to add your pages and configure the routes.
Here’s how you can get started:

⚙️ Steps

Create your pages:
Add your new pages inside:
src/pages/

Define your routes:
Manage all routes in:
src/routes/AppRoutes.jsx

Customize the sidebar:
Edit links and menu items in:
src/layout/SideBar/SideBarMenu.jsx

Reusable components:
All shared components live in:
src/components/

Built-in features:

Dark / Light mode 🌗

Responsive sidebar 📱

Ready-to-go layout for fast development ⚡

🧭 Summary

The layout, navigation, and design are ready —
just add your own pages and start building 🚀

---

### 🔗 Icon System

Icons are rendered using SVG `<use>` referencing `<symbol>` definitions.  
All icons are defined in `/src/components/ui/SvgDefs.jsx`.

```jsx
<svg className="size-5">
  <use href={`#id-icon`}></use>
</svg>
```

---

### 💡 Author

> 👨‍💻 Made by [**homow**](https://github.com/homow)  
> Crafted with ❤️ for developers who love clean & minimal UI.

### 🌐 README Versions
- 🇺🇸 [English Version](./README.md)
- 🇮🇷 [نسخه فارسی](./README.FA.md)
