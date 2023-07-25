/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pulseOnce: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { transform: 'translateY(-20%)', opacity: '0.5' },
          '100%': { transform: 'translateY(0)', opacity: '1'  },
        }
      },
      animation: {
        'pulseOnce': 'pulseOnce 1s'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
