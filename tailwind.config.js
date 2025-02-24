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
        'hero-front': 'clamp(1.875rem, 0.4471rem + 6.3462vw, 6rem)', //96px - 30px
        'display-subheading': 'clamp(0.9375rem, -0.1226rem + 4.7115vw, 4rem)', //64px - 15px
        'display-heading': 'clamp(1.5rem, -0.0577rem + 6.9231vw, 6rem)', // 96px - 24px
        'expertise-heading-narrow': 'clamp(1.5rem, 0.9375rem + 2.5vw, 3.125rem)', // 50px - 24px
        'expertise-heading-highlight':'clamp(2.25rem, 1.4063rem + 3.75vw, 4.6875rem)', // 75px - 36px
        'expertise-card-heading': 'clamp(1.5rem, 1.1538rem + 1.5385vw, 2.5rem)', // 40px - 24px 
        'expertise-card-description': 'clamp(1rem, 0.8053rem + 0.8654vw, 1.5625rem)', // 25px - 16px
        'we-do-card-heading': 'clamp(2.25rem, 1.7308rem + 2.3077vw, 3.75rem)', // 60px - 36px
        'we-do-card-text':'clamp(1.125rem, 0.9736rem + 0.6731vw, 1.5625rem)' // 25px - 18px
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
