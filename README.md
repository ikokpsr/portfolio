# 🚀 Portfolio — Personal Developer Portfolio

A stunning, modern personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features a premium glassmorphism design with smooth animations, dark mode support, and full responsiveness.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Premium Glassmorphism UI** — Stunning glass effects, gradients, and micro-animations
- 🌙 **Dark/Light Mode** — Smooth theme toggle with system preference detection
- 🎬 **Framer Motion Animations** — Scroll-triggered and staggered animations throughout
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens
- 🔍 **SEO Optimized** — Dynamic metadata with Open Graph and Twitter cards
- ⚡ **Loading Skeleton** — Premium animated loading state on initial page load
- 🍞 **Toast Notifications** — Beautiful feedback on form submission
- 🧭 **Smooth Navigation** — Sticky navbar with scroll-to-section and active section tracking

## 🏗️ Sections

1. **Hero** — Name, title, bio, CTAs, and social media links
2. **About** — Profile photo, bio, info badges, and downloadable CV
3. **Skills** — 8 skill cards with icons, descriptions, and hover effects
4. **Projects** — 4 project cards with tech stack badges and action buttons
5. **Contact** — Form with validation, loading state, and toast notifications

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Notifications | React Hot Toast |
| Font | Geist Sans & Mono |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── fonts/          # Geist font files
│   │   ├── globals.css     # Global styles & Tailwind config
│   │   ├── layout.tsx      # Root layout with providers
│   │   └── page.tsx        # Main page with all sections
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glass navbar
│   │   ├── HeroSection.tsx     # Hero with animated background
│   │   ├── AboutSection.tsx    # About with profile card
│   │   ├── SkillsSection.tsx   # Skills grid with icons
│   │   ├── ProjectsSection.tsx # Projects card grid
│   │   ├── ContactSection.tsx  # Contact form
│   │   ├── Footer.tsx          # Footer with socials
│   │   ├── LoadingSkeleton.tsx # Loading animation
│   │   └── ThemeProvider.tsx   # Dark mode context
│   └── lib/
│       └── data.ts         # Site configuration & data
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Personal Information
Edit `src/lib/data.ts` to update:
- Name, title, and bio
- Social media links
- Skills and technologies
- Project details
- Contact information

### Styling
- Colors and CSS variables are in `src/app/globals.css`
- Tailwind extensions are in `tailwind.config.ts`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using Next.js, TypeScript & Tailwind CSS
