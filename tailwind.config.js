/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'hero-front': 'clamp(1.875rem, 0.4471rem + 6.3462vw, 6rem)', 
        'display-subheading': 'clamp(0.9375rem, -0.1226rem + 4.7115vw, 4rem)',
        'display-heading': 'clamp(1.5rem, -0.0577rem + 6.9231vw, 6rem)',
      },
      backgroundImage: {
        'expertise-gradient': 'linear-gradient(291.38deg, rgba(255, 255, 255, 0.098) 2.47%, rgba(255, 254, 254, 0.056) 101.3%)',
        'double-gradient': `linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(180deg, #FFFFFF 0%, #070322 139.86%)`,
        'about-testimonial-gradient': `
        linear-gradient(0deg, rgba(43, 38, 68, 0.5), rgba(43, 38, 68, 0.5)),
        conic-gradient(from 181.06deg at 50% 50%, rgba(47, 131, 140, 0.4) 0deg, rgba(0, 0, 0, 0) 172.66deg, #357A82 281.25deg, rgba(47, 131, 140, 0.4) 360deg)
      `,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
