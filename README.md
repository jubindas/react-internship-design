# 📊 SheetTable - React Spreadsheet-Style Table (React + TypeScript + Vite)

This project is a **spreadsheet-style table UI** built using **React.js + TypeScript + Vite** with a design inspired by **Airtable** and **Figma mockups**.

It is styled using **Tailwind CSS** and supports static **dummy data** for showcasing rows, status badges, priorities, and actions.

---

## 🚀 Features

✅ Spreadsheet-like fixed column widths  
✅ Responsive and scrollable table  
✅ Status and Priority color badges  
✅ Grouped table headers (Financial Overview)  
✅ Action button (`+` icon) in header (non-functional placeholder)

---

## 🏗 Tech Stack

- **React.js + TypeScript**
- **Vite**
- **Tailwind CSS**
- **react-icons**
- **ESLint** with optional TypeScript type-checking

---

---

## 📦 Installation & Setup

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
npm install eslint-plugin-react-x eslint-plugin-react-dom


```
