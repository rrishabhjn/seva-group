# Seva Group Website

This is the official website for **Seva Group**, a non-profit organization based in Beawar, Rajasthan, dedicated to providing daily meals to the elderly, needy, and blue-collar workers.

## Project Overview

The website is built to showcase the NGO's mission, impact, and gallery of work, while providing a clear pathway for potential donors to contribute. It features a modern, responsive design with a focus on emotional connection and trust.

### Key Features
- **Hero Section:** Immersive introduction to the cause.
- **Mission & Stats:** Highlights the zero-overhead model and key impact metrics.
- **Gallery:** A lightbox-enabled gallery for photos and videos of the initiative.
- **Donation Information:** Clear details on how to support the cause via UPI or other means.

## Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd seva-group-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## Project Structure

- `/src`: Source code
  - `/components`: Reusable UI components (Hero, Navbar, Gallery, etc.)
  - `/assets`: Static assets (images, videos)
- `/public`: Public assets served directly

## Customization

- **Media:** Place your images and videos in `public/assets` and update `src/components/Gallery.tsx`.
- **Content:** Edit the text in the respective components in `src/components/`.
