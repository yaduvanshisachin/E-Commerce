# Ecommerce React App

A simple ecommerce web application built with **React** and **Vite**.  
This project demonstrates category-based product filtering, independent scrolling for sidebar and product grid, and modern UI using Tailwind CSS.

## Features

- Browse products by category
- Category and product sections scroll independently
- Responsive design
- Product data fetched from [DummyJSON API](https://dummyjson.com/)
- Clean, minimal UI with Tailwind CSS

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the development server:**
   ```
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

## Project Structure

- `src/component/Category.jsx` – Category sidebar
- `src/component/ProductItem.jsx` – Product card
- `src/App.jsx` – Main app logic and layout

## API Reference

- **Categories:** `https://dummyjson.com/products/category-list`
- **Products:** `https://dummyjson.com/products`
- **Products by Category:** `https://dummyjson.com/products/category/{category}