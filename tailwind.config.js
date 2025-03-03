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
        'we-do-card-text':'clamp(1.125rem, 0.9736rem + 0.6731vw, 1.5625rem)', // 25px - 18px
        'faq-title': 'clamp(3rem, 1.9615rem + 4.6154vw, 6rem)', // 96px - 48px
        'accordion-heading': 'clamp(0.75rem, 0.4038rem + 1.5385vw, 1.75rem)', // 28px - 12px
        'accordion-content': 'clamp(0.75rem, 0.7067rem + 0.1923vw, 0.875rem)', // 14px - 12px
        'key-figure-number': 'clamp(5.625rem, 4.976rem + 2.8846vw, 7.5rem)', // 120px - 90px
        'key-figure-content': 'clamp(0.875rem, 0.7885rem + 0.3846vw, 1.125rem)', // 18px - 14px
        'input-heading': 'clamp(0.9375rem, 0.2236rem + 3.1731vw, 3rem)', // 48px - 15px
        'input-highlight': 'clamp(0.75rem, 0.5769rem + 0.7692vw, 1.25rem)', // 20px - 12px
        'brand-heading': 'clamp(1.5rem, 0.3966rem + 4.9038vw, 4.6875rem)', // 75px - 24px
        'square-card-heading': 'clamp(3rem, 2.4159rem + 2.5962vw, 4.6875rem)', // 75px - 48px
        'square-card-title': 'clamp(1.25rem, 1.1635rem + 0.3846vw, 1.5rem)', // 24px - 20px
        'square-card-content': 'clamp(0.875rem, 0.8101rem + 0.2885vw, 1.0625rem)', // 17px - 14px
        'testimonial-heading':'clamp(2rem, 0.8534rem + 5.0962vw, 5.3125rem)', // 85px - 32px
        'card-one-heading':'clamp(2.25rem, 1.6442rem + 2.6923vw, 4rem)', // 64px - 36px
        'card-content':'clamp(0.9375rem, 0.4832rem + 2.0192vw, 2.25rem)', // 36px - 15px
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
