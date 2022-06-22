module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      dark: '#262626',
      'gray-light': '#d3dce6',
      'dark-red': '#750512',
      'primary-dark': '#0F1B4C',
      'primary-light': '#E6F0FF',
      'bg-light': '#E6F0FF',
      'gray-dark': '#687690',
      'secondary-dark': '#3B3C45',
      'blue-primary': '#0689FF',
      'gray-secondary': '#A3A6AB',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
