const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/ui/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
       colors : {
        background: 'rgb(255, 255, 255)',
        foreground: 'rgb(10, 9, 9)',
        card: 'rgb(255, 255, 255)',
        card_foreground: 'rgb(10, 9, 9)',
        popover: 'rgb(255, 255, 255)',
        popover_foreground: 'rgb(10, 9, 9)',
        primary: 'rgb(24, 23, 23)',
        primary_foreground: 'rgb(250, 250, 250)',
        secondary: 'rgb(244, 244, 244)',
        secondary_foreground: 'rgba(15,	23,	41 , 0.6)',
        muted: 'rgb(244, 244, 244)',
        muted_foreground: 'rgb(118, 118, 118)',
        accent: 'rgb(244, 244, 244)',
        accent_foreground: 'rgb(24, 23, 23)',
        destructive: 'rgb(154, 25, 25)',
        destructive_foreground: 'rgb(250, 250, 250)',
        border: 'rgb(230, 230, 230)',
        input: 'rgb(230, 230, 230)',
        ring: 'rgb(24, 23, 23)',
        radius: '0.4rem',
      },
      
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};