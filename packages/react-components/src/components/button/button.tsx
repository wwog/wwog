import { forwardRef } from 'react'
import { useButton } from '@mui/base'
import { ButtonProps } from './button.types'
import { buttonRecipes } from './button.styles'
import { css, cx } from '@css/css'
import { useConfigContext } from '..'
import { genGetCSSVariableName } from '../configProvider/cssVariableNameMap'

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const { children, size = 'md' } = props
  const { id } = useConfigContext()

  const getCSSVarName = genGetCSSVariableName(id)

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
        css({
          bg: `var(${getCSSVarName('primaryColor')})`,
        }),
      )}
    >
      {children}
    </button>
  )
})
