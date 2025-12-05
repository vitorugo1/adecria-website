import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#162A41',
          navy: '#114252',
          teal: '#32859C',
          gray: '#849695',
          light: '#CCE7E3',
          orange: '#E59854',
          peach: '#FDD59C',
        },
      },
      fontFamily: {
        //aplicando montserrat por padrão
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
