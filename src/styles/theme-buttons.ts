import ThemeColors from './theme-colors';

const { gray50, gray800, blue1 } = ThemeColors;
const commonStyles = {
  padding: '0.5rem 1.85rem',
  textTransform: 'none',
  color: gray800,
  fontSize: '0.75rem',
  fontWeight: '700',
};

export const themeButtons = {
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        ...commonStyles,
        textTransform: 'uppercase',
        height: '2.75rem',
        border: `2px solid ${blue1}`,
        '&:hover': {
          backgroundColor: blue1,
          color: gray50,
          borderColor: blue1,
        },
        '@media (min-width: 600px)': {
          fontSize: '0.875rem',
          padding: '0.5rem 1.625rem',
          height: '3.75rem',
        },
      },
    },
    {
      props: { variant: 'contained' },
      style: {
        ...commonStyles,
        textTransform: 'uppercase',
        height: '2.75rem',
        border: 0,
        backgroundColor: gray50,
        boxShadow: 'none',
        '& .MuiButton-startIcon': {
          marginRight: '1.5rem',
        },
        '&:hover': {
          backgroundColor: gray50,
          border: `2px solid ${blue1}`,
          borderColor: blue1,
        },
        '@media (min-width: 600px)': {
          fontSize: '0.875rem',
          padding: '0.5rem 1.625rem',
          height: '3.75rem',
        },
      },
    },
  ],
};
