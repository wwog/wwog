import { genGetCount } from '@/helper'
import { createContext, useContext } from 'react'

export interface ConfigContextProps {
  id?: string | number
}

export interface Tokens {
  primaryColor?: string
}

export const configContext = createContext<ConfigContextProps>({})

export const useConfigContext = () => useContext(configContext)

export const getConfigId = genGetCount()
