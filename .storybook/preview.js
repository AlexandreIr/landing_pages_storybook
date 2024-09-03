/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds:{
      default: 'dark',
      values: [
        {
          name:'dark',
          value:'#000000'
        },
        {
          name:'light',
          value:'#ffffff'
        },
        {
          name:'blue',
          value:'#0066CC'
        },
        {
          name:'green',
          value:'#1E4620'
        },
        {
          name:'purple',
          value:'purple'
        },
        {
          name:'grey',
          value:'grey'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
