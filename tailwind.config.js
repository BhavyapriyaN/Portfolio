/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF8',
        'bg-alt': '#F3F2EE',
        ink: '#1B1D1F',
        'ink-soft': '#55585C',
        line: '#E4E2DC',
        accent: '#2F5D9A',
        'accent-deep': '#1F3F6B',
        'accent-tint': '#EAF0F7',
        success: '#3AA25E',
        'success-bg': '#EEF6EF',
        'success-line': '#D5E9D8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        wrap: '1080px',
      },
      boxShadow: {
        card: '0 10px 24px rgba(20,30,45,0.07)',
      },
    },
  },
  plugins: [],
}
