# Lobos Group Cleaning Service Website

A modern, professional website for Lobos Group Cleaning Service - a New Orleans-based cleaning company offering deep cleaning, closet organizing, grocery shopping, and new construction cleaning services.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Deployment:** Vercel
- **Language:** TypeScript

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with metadata on all pages
- ✅ Multiple service pages with detailed information
- ✅ Pricing page with transparent pricing
- ✅ FAQ page with accordion UI
- ✅ Booking form for service requests
- ✅ Professional, clean UI with Tailwind CSS
- ✅ Reusable components (Header, Footer, ServiceCard, Section)

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with Header & Footer
│   ├── page.tsx                   # Home page
│   ├── book/                      # Booking form
│   ├── faq/                       # FAQ page
│   ├── pricing/                   # Pricing page
│   └── services/                  # Services pages
│       ├── page.tsx              # Services overview
│       ├── deep-cleaning/
│       ├── closet-organizing/
│       ├── grocery-shopping/
│       └── new-construction-cleaning/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── ServiceCard.tsx
│   └── ui/                       # shadcn/ui components
└── lib/
    └── utils.ts                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment to Vercel

This project is optimized for deployment on Vercel:

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect Next.js and configure everything
6. Click "Deploy"

That's it! Vercel will automatically:
- Build your project
- Set up SSL/HTTPS
- Provide a production URL
- Enable automatic deployments on git push

## Environment Variables

No environment variables are required for basic functionality. If you add features like:
- Contact form backend (e.g., SendGrid, Mailgun)
- Analytics (Google Analytics, Plausible)
- CMS integration

You'll need to add the appropriate environment variables in your Vercel dashboard.

## Customization

### Update Contact Information

Edit the following files to update contact information:
- `components/Footer.tsx` - Phone and email in footer
- `app/faq/page.tsx` - Contact information
- `app/book/page.tsx` - Success message contact info

### Update Pricing

Edit `app/pricing/page.tsx` to update pricing information.

### Add More Pages

Follow the existing pattern in the `app/` directory to add more pages.

## License

All rights reserved - Lobos Group Cleaning Service

## Support

For questions about the website, contact the developer or open an issue in the repository.
