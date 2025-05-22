# ALX Listing App

The **ALX Listing App** is the foundation of an Airbnb-style listing page, scaffolded as part of the ALX Software Engineering program. This milestone (Milestone 1) focuses on setting up a modern, production-ready frontend project using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.

This project emphasizes best practices in frontend architecture, reusable component creation, and structured project organization to ensure scalability and maintainability.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Author](#author)

---

## About the Project

This milestone lays the groundwork for an Airbnb clone. The goal is to:

- Scaffold a clean, modern Next.js app
- Integrate TypeScript for type safety
- Set up TailwindCSS for styling
- Create foundational reusable UI components (e.g., Card, Button)
- Establish a scalable folder structure for long-term development
- Organize and manage assets (images, SVGs, etc.)

---

## Project Structure

alx-listing-app/ ├── components/ │   └── common/ │       ├── Card.tsx        # Reusable property display card │       └── Button.tsx      # Reusable button component ├── constants/ │   └── index.ts            # Central place for app-wide constants ├── interfaces/ │   └── index.ts            # TypeScript interfaces (CardProps, ButtonProps, etc.) ├── pages/ │   └── index.tsx           # Main landing page ├── public/ │   └── assets/             # Static assets (images, SVGs, etc.) ├── styles/ │   └── globals.css         # TailwindCSS imports ├── tailwind.config.js      # TailwindCSS configuration ├── tsconfig.json           # TypeScript configuration ├── .eslintrc.json          # ESLint rules and configuration └── README.md               # Project overview and instructions

---

## Tech Stack

- **Next.js (v13+)** – Framework for React with SSR capabilities
- **TypeScript** – Static typing for JavaScript
- **TailwindCSS** – Utility-first CSS framework
- **ESLint** – Linting for code quality

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Code editor like [VS Code](https://code.visualstudio.com/) with TailwindCSS and TypeScript extensions

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
npm install

Running the Development Server

npm run dev

Open http://localhost:3000 to view the app in your browser.

