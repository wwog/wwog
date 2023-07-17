import { createContext, useContext } from 'react'

export interface ConfigContextProps {
  id?: string
  tokens?: Tokens
}

export interface Tokens {
  primaryColor?: string
}

export const configContext = createContext<ConfigContextProps>({})

export const useConfigContext = () => useContext(configContext)

