import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand deep blue — sampled directly from the Oracle Dental Care logo mark.
        primary: {
          DEFAULT: '#0D53A5',
          50: '#EEF5FC',
          100: '#D6E7F8',
          200: '#AFD0F1',
          300: '#82B4E8',
          400: '#5495DD',
          500: '#2F76CE',
          600: '#1B5FB8',
          700: '#0D53A5',
          800: '#0A4183',
          900: '#092F5E',
          950: '#051A38',
        },
        // Brand cyan — sampled from the letterhead footer bar / location pin.
        secondary: {
          DEFAULT: '#00ADEF',
          50: '#E6F8FF',
          100: '#CCF0FF',
          200: '#99E1FF',
          300: '#5FD0FB',
          400: '#2EBEF3',
          500: '#00ADEF',
          600: '#0090C7',
          700: '#00739E',
          800: '#005774',
          900: '#003C50',
        },
        ink: {
          DEFAULT: '#0F1E2E',
          50: '#F5F7FA',
          100: '#E8ECF1',
          200: '#CBD4DF',
          300: '#A3B1C2',
          400: '#71839A',
          500: '#516179',
          600: '#3D4A5F',
          700: '#2E3A4C',
          800: '#1E2838',
          900: '#131B27',
        },
        surface: '#F6FAFD',
        background: '#FFFFFF',
        success: { DEFAULT: '#1F9D6B', 50: '#EAFBF3', 100: '#CFF4E3', 600: '#187E55' },
        warning: { DEFAULT: '#DA9A2B', 50: '#FDF6E8', 100: '#FAEAC4', 600: '#AE7B22' },
        error: { DEFAULT: '#E0473E', 50: '#FDEDEC', 100: '#FBD3D1', 600: '#B93831' },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(13, 83, 165, 0.12)',
        'soft-lg': '0 20px 45px -12px rgba(13, 83, 165, 0.22)',
        glow: '0 0 0 1px rgba(0, 173, 239, 0.15), 0 8px 30px -4px rgba(0, 173, 239, 0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0D53A5 0%, #1671C4 45%, #00ADEF 100%)',
        'brand-radial': 'radial-gradient(circle at 30% 20%, rgba(0,173,239,0.25), transparent 55%)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [typography],
}
