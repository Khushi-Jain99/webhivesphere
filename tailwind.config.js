/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#040512',
          900: '#06081b',
          800: '#0f1530'
        },
        neon: {
          purple: '#b44cff',
          cyan: '#38d6ff',
          pink: '#ff4fd8'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        glass: '0 20px 80px rgba(3, 8, 30, 0.45)',
        neon: '0 0 0 1px rgba(56, 214, 255, 0.18), 0 0 42px rgba(180, 76, 255, 0.18)'
      },
      backgroundImage: {
        'mesh-glow': 'radial-gradient(circle at top left, rgba(180, 76, 255, 0.26), transparent 36%), radial-gradient(circle at top right, rgba(56, 214, 255, 0.24), transparent 32%), radial-gradient(circle at bottom center, rgba(255, 79, 216, 0.12), transparent 28%)'
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -22px, 0) scale(1.04)' }
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(20px, -12px, 0) rotate(10deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' }
        },
        sweep: {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' }
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        loaderPulse: {
          '0%, 100%': { transform: 'scaleX(0.55)', opacity: '.55' },
          '50%': { transform: 'scaleX(1)', opacity: '1' }
        }
      },
      animation: {
        floatSlow: 'floatSlow 10s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        sweep: 'sweep 2.8s linear infinite',
        revealUp: 'revealUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        loaderPulse: 'loaderPulse 1.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};