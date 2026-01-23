# CICCE Site

Centro de Investigación, Capacitación y Consultoría en Enfermería - Sitio web oficial construido con Next.js, TypeScript, y Tailwind CSS.

## 🧱 Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Formik & Yup (formularios y validación)
- React Toastify (notificaciones)
- PNPM (package manager)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/matiasz8/cicce-site.git
cd cicce-site
```

### 2. Install nvm (Node Version Manager)

If you don't have nvm installed, follow the instructions from the official [repo](https://github.com/nvm-sh/nvm)

### 3. Install Node

```bash
nvm install node
```

### 4. Install pnpm globally and use

```bash
npm install -g pnpm
nvm use
```

### 5. Install dependencies

```bash
pnpm install
```

### 6. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code linting
- `pnpm format` - Format code with Prettier

---

## 📂 Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ScrollSpyNavbar.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── SectionWrapperWithOverlay.tsx
│   ├── hooks/          # Custom React hooks
│   │   ├── useCurrentSectionVisible.ts
│   │   └── useIsSectionVisible.ts
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx
│   │   └── index.tsx
│   └── styles/         # Global styles
│       └── globals.css
├── public/             # Static assets
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Features

- **Scroll Spy Navigation**: Navegación con detección automática de sección activa
- **Smooth Scrolling**: Desplazamiento suave entre secciones
- **Responsive Design**: Diseño adaptable a todos los dispositivos
- **SEO Optimized**: Optimizado para motores de búsqueda
- **Form Validation**: Validación de formularios con Formik y Yup
- **Pre-commit Hooks**: Verificación automática de build antes de cada commit con Husky

## 🔒 Git Hooks

Este proyecto utiliza [Husky](https://typicode.github.io/husky/) para garantizar la calidad del código antes de cada commit.

### Pre-commit Hook

Antes de cada commit, se ejecuta automáticamente:
- ✅ `pnpm build` - Verifica que el proyecto compile correctamente

Si el build falla, el commit será bloqueado hasta que se corrijan los errores.

**Para saltar la verificación temporalmente (no recomendado):**
```bash
git commit --no-verify -m "mensaje"
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Husky Documentation](https://typicode.github.io/husky/)

