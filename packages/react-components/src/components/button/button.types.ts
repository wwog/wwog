import { BaseSize } from '@/types'

export type ButtonSize = BaseSize


export interface ButtonProps {
  children?: React.ReactNode
  /**
   * @description 是否禁用
   * @description_en is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * @description 按钮大小
   * @description_en button size
   * @default 'md'
   */
  size: ButtonSize
}