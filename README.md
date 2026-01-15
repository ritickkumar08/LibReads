github link - https://github.com/ritickkumar08/LibReads

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# LibReads


# LibReads - Online Library System
## Overview
LibReads is a React-based online library system that allows users to:
* Browse books by category
* View detailed information for each book
* Add new books to the library

It is built with:
* React (Vite)
* Redux for state management
* React Router v6 for dynamic routing
* TailwindCSS for styling

## Features

1. **Home Page**
   * Welcome message
   * List of book categories
   * Popular books displayed as cards with links to details

2. **Browse Books**
   * Display books filtered by category
   * Search books by title or author
   * Dynamic routing for category and book details

3. **Book Details Page**
   * Shows book title, author, rating, and full description
   * "Back to Browse" link

4. **Add Book Page**
   * Form to add a new book
   * Form validation
   * After submission, redirects to Browse Books with the new book at the top

5. **404 Page**
   * Displays invalid URL
   * Link back to Home

## Getting Started
### Prerequisites
* Node.js (v20 or latest LTS)
* npm or yarn

### Installation

1. Clone the repository:
bash
git clone <repo-url>

2. Navigate into the project directory:
bash
cd LibReads

3. Install dependencies:
bash
npm install
# or
yarn install

### Running the App
Start the development server:
bash
npm run dev
# o
yarn dev
Open `http://localhost:5173` in your browser to view the app.

### Build for Production
bash
npm run build
# or
yarn build

## Notes

* All components are styled using TailwindCSS.
* Redux is used to manage the global state of the books list.
* The application is fully responsive.
* Comments are included throughout the codebase for clarity.

## Author
Ritick Kumar

