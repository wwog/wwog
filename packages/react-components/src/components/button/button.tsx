import { forwardRef } from 'react'
import { useButton } from '@mui/base'
import { ButtonProps } from './button.types'
import { buttonRecipes } from './button.styles'
import { cx } from '@css/css'

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const { children, size = 'md' } = props
  const { getRootProps } = useButton({
    ...props,
    rootRef: ref,
  })
  return (
    <button
      {...getRootProps()}
      className={cx(
        buttonRecipes({
          size,
        }),
      )}
    >
      {children}
    </button>
  )
})
