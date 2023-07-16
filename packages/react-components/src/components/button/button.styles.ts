import { cva } from '@css/css'

export const buttonRecipes = cva({
  base: {
    fontSize: '14px',
    bg: 'green.400',
    rounded: 'md',
    color: 'white',
    cursor: 'pointer',
  },
  variants: {
    size: {
      xs: {
        px: 0.6,
        py: 0.5,
      },
      sm: {
        px: 1,
        py: 0.8,
      },
      md: {
        px: 1.4,
        py: 1,
      },
      lg: {
        px: 1.25,
        py: 0.625,
      },
      xl: {
        px: 1.5,
        py: 0.75,
      },
    },
  },
})
