import { cva } from '@css/css'

export const buttonRecipes = cva({
  base: {
    fontSize: '14px',
    rounded: 'md',
    color: 'white',
    cursor: 'pointer',
  },
  variants: {
    size: {
      xs: {
        px: 2,
        py: 1,
      },
      sm: {
        px: 3,
        py: 1.5,
      },
      md: {
        px: 4,
        py: 2,
      },
      lg: {
        px: 5,
        py: 2.5,
      },
      xl: {
        px: 5,
        py: 3,
      },
    },
  },
})
