/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#ffccd8',
          300: '#ffa3ba',
          400: '#ff6b95',  // 主色調
          500: '#aa285c',
          600: '#aa285c',
          700: '#e60d47',
          800: '#bd0c3c',
          900: '#9c0f37',
        },
        secondary: {
          50: '#f3f4ff',
          100: '#e9eaff',
          200: '#d5d7ff',
          300: '#b3b7ff',
          400: '#8a8eff',
          500: '#6366f1',  // 次要色調
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
