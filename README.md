# Week 8: MtaaShare - Community Borrowing & Sharing Hub

## Author
- **Name:** Maureen Muchoki
- **GitHub:** [@maureenmuchoki-hub](https://github.com/maureenmuchoki-hub)
- **Date:** April 21, 2026

## Project Description
MtaaShare (Swahili for "Neighbourhood Share") is a community borrowing and sharing platform built for Kenyan neighbourhoods. Instead of buying items you'll only use once, neighbours can borrow and lend everyday items safely and quickly — from drills and ladders to baby strollers and event seats.

The app connects two sides:
- **People who need to borrow** items they don't own
- **People who have items** they're willing to lend

## Technologies Used
- React 18
- Vite
- JSX
- CSS3
- JavaScript (ES6+)

## Features
- 🤲 **Need to Borrow** — Post a request for an item you need
- 🤝 **Have to Lend** — List an item you're willing to lend
- 📂 **Category Filter** — Browse by Tools, Kitchen, Adventure, Party Gear, Baby Items, Transport
- 📋 **Contact Form** — Fill in your details to offer or request an item
- 📷 **Image Upload** — Upload a photo of your item when posting
- 👤 **Profile Page** — View your listed items and borrowing history
- 📦 **My Items Page** — Track everything you've posted

## How to Run
1. Clone this repository: git clone https://github.com/maureenmuchoki-hub/iyf-s10-week-08-Maureenmuchoki-hub.git
2. Navigate to the project folder: cd iyf-s10-week-08-Maureenmuchoki-hub
3. Install dependencies:
npm install
4. Start the development server:
npm run dev
5. Open `http://localhost:5173` in your browser

## Component Structure

src/
├── components/
│   ├── Items/
│   │   ├── AddItemForm.jsx
│   │   ├── ItemCard.jsx
│   │   └── ItemList.jsx
│   ├── Layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── Shared/
│   │   ├── CategoryFilter.jsx
│   │   └── ContactForm.jsx
│   ├── PostCard.jsx
│   └── PostList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx

## Lessons Learned
- How to break a UI into reusable React components
- How to pass data between components using props
- How to manage application state using useState
- How to handle events like clicks, form inputs and submissions
- How to render lists dynamically using map() and key
- How to conditionally show and hide components
- How to lift state up so multiple components share the same data
- How to build controlled forms in React

## Challenges Faced
- **Images not loading** — Unsplash URLs were unreliable so I switched to storing images locally in the `public/` folder
- **Windows PowerShell blocking npm** — Fixed by updating the execution policy using `Set-ExecutionPolicy`
- **Component structure** — Learning how to organize components into folders by feature took some getting used to
- **State management** — Understanding where to put state and how to pass it down took practice but clicked once I built the real app

## Live Demo
Coming soon — will be deployed on Vercel


