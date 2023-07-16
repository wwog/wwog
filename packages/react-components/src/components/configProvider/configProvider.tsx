import { FC } from 'react'
import { ConfigContextProps, configContext } from './context'

//#region component Types
export interface ConfigProviderProps {
  children?: React.ReactNode
  config?: ConfigContextProps
}
//#endregion component Types

//#region component
export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { children, config = {} } = props

  return <configContext.Provider value={config}>{children}</configContext.Provider>
}
//#endregion component
