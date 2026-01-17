# Juniauto Website

This is the official website for Juniauto, a towing and auto rescue service in Campo Grande, RJ. The project is built with [Astro](https://astro.build), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **UI Library:** [React](https://reactjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Testing:** [Playwright](https://playwright.dev)
- **Quality/Audit:** Lighthouse & Custom Scripts

## 🛠️ Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

## 🏗️ Build & Preview

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🔍 Quality Assurance

This project includes scripts for performance and quality auditing using Lighthouse.

- **Run Lighthouse Audit:**
  ```bash
  npm run quality:audit
  ```
  Runs a Lighthouse audit on the configured pages.

- **Analyze Report:**
  ```bash
  npm run quality:analyze
  ```
  Analyzes the generated `lighthouse-report.json`.

- **Check Console Errors:**
  ```bash
  npm run quality:console
  ```
  Checks for console errors during the audit process.

## 📁 Project Structure

```text
/
├── public/           # Static assets
├── scripts/          # Quality assurance and utility scripts
├── src/
│   ├── components/   # Reusable UI components (Astro/React)
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   └── styles/       # Global styles
├── package.json      # Project dependencies and scripts
└── astro.config.mjs  # Astro configuration
```

## 🧪 Testing

Run end-to-end tests with Playwright:

```bash
npx playwright test
```

## 📄 License

[MIT](LICENSE)
