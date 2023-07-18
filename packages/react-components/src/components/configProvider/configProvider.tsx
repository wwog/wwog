import { FC, useLayoutEffect, useRef } from 'react'
import { configContext, getConfigId } from './context'
import { CSSVariable } from '@/helper/cssVarariable'
import { genGetCSSVariableName } from './cssVariableNameMap'

//#region component Types
export interface ConfigProviderProps {
  children?: React.ReactNode
  primaryColor?: string
}
//#endregion component Types

const cssVar = new CSSVariable()

//#region component
export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { children, primaryColor = '#3E4532' } = props

  const { current: id } = useRef(getConfigId())

  useLayoutEffect(() => {
    const getCSSVarName = genGetCSSVariableName(id)
    cssVar.addVar(getCSSVarName('primaryColor'), primaryColor)
    cssVar.update()
  }, [primaryColor, id])

  return (
    <configContext.Provider
      value={{
        id,
      }}
    >
      {children}
    </configContext.Provider>
  )
}
//#endregion component
