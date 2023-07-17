import { FC, useEffect } from 'react'
import { ConfigContextProps, configContext } from './context'
import { CSSVariable } from '@/helper/cssVarariable'

//#region component Types
export interface ConfigProviderProps {
  children?: React.ReactNode
  config: ConfigContextProps
}
//#endregion component Types

const cssVar = new CSSVariable()

//#region component
export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const {
    children,
    config,
  } = props


  useEffect(() => {
    cssVar.addVar({
      [`--primary-color-${config.id}`]: config.tokens!.primaryColor!,
    })
    cssVar.update()
  }, [])
  return <configContext.Provider value={config}>{children}</configContext.Provider>
}
//#endregion component
