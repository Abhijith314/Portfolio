# Abhijith Pratheesh - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents
- **Responsive Layout**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion for smooth transitions and animations
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Profile Picture Support**: Easy to replace profile picture

## 📁 Project Structure

```
/
├── public/
│   ├── profile-placeholder.jpg    # Generated profile picture (replace with your own)
│   └── favicon.ico
├── src/
│   ├── App.tsx                    # Main application component
│   ├── index.css                  # Global styles
│   └── main.tsx                   # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies
└── vite.config.ts                 # Vite configuration
```

## 🛠️ How to Replace Profile Picture

1. **Replace the placeholder image**:
   - Navigate to the `public/` directory
   - Replace `profile-placeholder.jpg` with your own profile picture
   - Make sure the image is named exactly `profile-placeholder.jpg`
   - Recommended size: 400x400 pixels (square format works best)

2. **Alternative method** (if you want to use a different filename):
   - Open `src/App.tsx`
   - Find the image source URLs (lines with `src="/profile-placeholder.jpg"`)
   - Replace `/profile-placeholder.jpg` with your image path
   - There are two instances: one in the hero section and one in the about section

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Colors
The color scheme uses Tailwind CSS classes. You can modify:
- Primary colors in gradient backgrounds
- Text colors in the `index.css` file
- Accent colors throughout the components

### Content
Update the following in `src/App.tsx`:
- `personalInfo` object for contact details
- `skills` array for technical skills
- `experiences` array for work experience
- `projects` array for project portfolio
- `education` array for educational background

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧰 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

## 🤝 Contact

- **Name**: Abhijith Pratheesh
- **Email**: abhijithpratheesh3014@gmail.com
- **Phone**: +91 8848385318
- **Location**: Kochi, Kerala, India
- **LinkedIn**: linkedin.com/in/abhijithpratheesh