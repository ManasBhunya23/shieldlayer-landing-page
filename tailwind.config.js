/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0c10',
        bg2: '#0f1117',
        bg3: '#141720',
        surface: '#181c24',
        surface2: '#1e2330',
        border: 'rgba(255,255,255,0.07)',
        accent: '#FF6B35',
        accent2: '#FF8C5A',
        blue: '#3B82F6',
        green: '#22C55E',
        red: '#EF4444',
        textMain: '#F0F2F5',
        text2: '#9CA3AF',
        text3: '#6B7280',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease both',
        pulseSlow: 'pulseSlow 2s infinite',
        ticker: 'ticker 30s linear infinite',
        slideIn: 'slideIn 0.4s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
