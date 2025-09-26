/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#00001a',
        'electric-blue': '#00ffff',
        'vibrant-magenta': '#ff00ff',
        'soft-white': '#f0f0f0',
        'dark-navy': '#0a0a2e',
      },
      fontFamily: {
        'futuristic': ['Orbitron', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'circuit': 'circuit 20s linear infinite',
        'nebula': 'nebula 30s ease-in-out infinite',
        'shooting-star': 'shooting-star 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
        circuit: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        nebula: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) scale(1)' },
          '33%': { transform: 'translateX(30px) translateY(-30px) scale(1.1)' },
          '66%': { transform: 'translateX(-20px) translateY(20px) scale(0.9)' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(-100px) translateY(-100px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(300px) translateY(300px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

