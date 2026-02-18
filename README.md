# Portfolio Website

A modern, minimalist portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This project features a clean, single-column design inspired by Magic UI, with smooth animations powered by **Framer Motion**.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile to desktop.
- **Animations**: Smooth entry, hover, and scroll animations using Framer Motion.
- **Magic UI Style**: Clean, modern aesthetic with a focus on typography, whitespace, and subtle gradients.
- **GitHub Calendar**: Integrated GitHub contribution graph to showcase activity.
- **Project Showcase**: Grid layout for displaying projects with links to live demos and GitHub repositories.
- **Dark Theme**: Styled with a dark, developer-focused color palette (`#0B0F14`).
- **Contact Form**: Email integration via `mailto` with a styled contact form.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Tabler Icons](https://tabler-icons.io/)
- **Components**: Custom built with a focus on reusability and performance.

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishekpandey-001/New--Portfolio.git
   cd New--Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```bash
src/
├── components/       # UI Components
│   ├── Hero.jsx      # Introduction and roles
│   ├── Navbar.jsx    # Navigation bar
│   ├── Projects.jsx  # Project grid
│   ├── Skills.jsx    # Tech stack grid
│   ├── Education.jsx # Education details
│   ├── ContactSection.jsx # Contact form
│   ├── Footer.jsx    # Social links and footer
│   └── ...
├── pages/            # Page layouts
├── assets/           # Static assets (images, etc.)
├── App.jsx           # Main application component
├── main.jsx          # Entry point
└── index.css         # Global styles and Tailwind directives
```

## 🎨 Customization

You can easily customize the content of the portfolio by editing the component files directly:

### 1. Personal Information
Update your name, roles, and bio in `src/components/Hero.jsx`.

### 2. Projects
Edit the `projects` array in `src/components/Projects.jsx`. You can add your project title, description, image URL, tech stack, and links.

### 3. Skills
Update the `skillsData` array in `src/components/Skills.jsx` to reflect your tech stack.

### 4. Education
Modify the education details in `src/components/Education.jsx`.

### 5. Contact & Socials
- **Email**: Go to `src/components/ContactSection.jsx` and look for the `handleSubmit` function. Replace `your@email.com` with your actual email address.
- **Social Links**: Update your social media links (GitHub, LinkedIn, Twitter/X) in the `socials` array in `src/components/Footer.jsx`.

### 6. Images
Replace the placeholder images (e.g., `me.png`, project screenshots) in the `public/` folder or `src/assets/` and update the references in the components.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built by **Abhishek Pandey**
