# ByteSpace New - Landing Page Technical Assessment

A pixel-perfect, responsive frontend recreation of the **ByteSpace New** website based strictly on the provided Figma design. Built with Next.js, React, JavaScript, HTML5, and Tailwind CSS.

![ByteSpace New Preview](./public/assets/preview.png)

## 🚀 Features & Highlights

- **Pixel-Perfect Figma Replication**: Matches typography, color scheme (`#0052FF` electric blue, `#C6FF00` electric lime), spacing, border radii, card components, hero graphics, and footer layout.
- **Responsive Layout**: Seamlessly adapts across Desktop (1440px+), Laptop (1024px), Tablet (768px), and Mobile (375px) viewports with responsive navigation and grid scaling.
- **Component Architecture**: Reusable, clean React components built without over-engineering (`Navbar`, `Hero`, `FeatureBar`, `CoursesSection`, `CourseCard`, `CategoryGrid`, `ValuePropSection`, `CtaBanner`, `TestimonialsSection`, `Footer`).
- **Interactive State**: Functional category filtering tabs, smooth scroll navigation, mobile menu drawer, and newsletter subscription feedback.
- **Bonus Pages**: Includes clean `/login` and `/signup` authentication previews.
- **SEO & Accessibility**: Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), ARIA attributes, image alt text, and Next.js meta tags.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Vercel

---

## 📂 Project Structure

```
bytespace-new/
├── app/
│   ├── layout.js          # Root layout with font & metadata configuration
│   ├── page.js            # Main Landing Page composition
│   ├── globals.css        # Tailwind directives & floating animations
│   ├── login/
│   │   └── page.js        # Bonus Login page preview
│   └── signup/
│       └── page.js        # Bonus Signup page preview
├── components/
│   ├── Navbar.js          # Main Navigation with mobile drawer
│   ├── Hero.js            # Hero banner, search bar & student graphics
│   ├── FeatureBar.js      # Key benefits strip
│   ├── CoursesSection.js  # Course catalog & category filter tabs
│   ├── CourseCard.js       # Reusable course card component
│   ├── CategoryGrid.js    # 6 feature category boxes
│   ├── ValuePropSection.js# Split feature blocks with stats counters
│   ├── CtaBanner.js       # Blue conversion banner
│   ├── TestimonialsSection.js # Student review cards grid
│   ├── TestimonialCard.js # Individual testimonial card
│   └── Footer.js          # Newsletter signup & footer navigation
├── public/                # Static assets & graphics
├── tailwind.config.js     # ByteSpace design system theme configuration
├── postcss.config.js      # PostCSS setup for Tailwind CSS
└── package.json           # Dependencies & build scripts
```

---

## 🌿 Git Branching Strategy

This project was built following strict git conventions on the dedicated assessment branch:

- **Branch**: `assessment/bytespace-landing`

### Commit Log Overview
- `feat: initialize Next.js project with Tailwind CSS`
- `feat: build Navbar component with responsive mobile drawer`
- `feat: implement Hero section with search bar and floating graphics`
- `feat: build Featured Courses grid and Category filter tabs`
- `feat: implement Value Proposition and Community split sections`
- `feat: build CTA Banner and Testimonials section`
- `feat: create Footer component and newsletter subscription`
- `feat: add bonus Login and Signup pages`
- `docs: add comprehensive README with Vercel deployment guide`

---

## 💻 Local Setup & Development

1. **Clone Repository**:
   ```bash
   git clone https://github.com/your-username/bytespace-new.git
   cd bytespace-new
   git checkout assessment/bytespace-landing
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Vercel Deployment Guide

1. Push branch `assessment/bytespace-landing` to GitHub.
2. Create a Pull Request into `main`.
3. Import project into Vercel dashboard.
4. Framework Preset: **Next.js**.
5. Click **Deploy**.

---

## 📄 License

Created for ByteSpace New Frontend Software Engineer Technical Assessment.
