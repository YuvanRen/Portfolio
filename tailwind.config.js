/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ['var(--font-orbitron)'],
        'mono-cyber': ['var(--font-share-tech-mono)'],
        'body-cyber': ['var(--font-rajdhani)'],
      },
      colors: {
        'cyber-yellow': '#f7f71c',
        'cyber-red': '#ff003c',
        'cyber-blue': '#00fff9',
        'cyber-purple': '#731dd8',
        'cyber-black': '#0d0d0d',
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #00fff9, 0 0 20px #00fff9, 0 0 30px #00fff9' },
          'to': { textShadow: '0 0 20px #00fff9, 0 0 30px #00fff9, 0 0 40px #00fff9' },
        },
      },
    },
  },
  plugins: [],
} 