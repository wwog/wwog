import { createContext, useContext } from 'react'

export interface ConfigContextProps {
  tokens?: Tokens
}

export interface Tokens {
  primaryColor?: string
}

export const configContext = createContext<ConfigContextProps>({})

export const useConfigContext = () => useContext(configContext)
