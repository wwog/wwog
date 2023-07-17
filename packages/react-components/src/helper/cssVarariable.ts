import { CSSLayer, CSSRuleBlock } from '@wwog/css'

export interface CSSVariableOptions {
  /**
   * @description 将某个时间段内的更新合并为一次更新
   * @description_en Merge updates within a certain period of time into one update
   * @default 15
   */
  mergeUpdate?: number
}

export class CSSVariable {
  public styleElement

  protected cssLayer: CSSLayer
  protected ruleBlock: CSSRuleBlock
  protected updateTime: number
  protected updateTimer: any

  constructor(options: CSSVariableOptions = {}) {
    const { mergeUpdate = 15 } = options
    this.cssLayer = new CSSLayer({
      name: 'dynamic-css-variable',
    })
    this.ruleBlock = new CSSRuleBlock(':root')
    this.cssLayer.addRuleBlock(this.ruleBlock)
    this.styleElement = document.createElement('style')
    this.styleElement.setAttribute('type', 'text/css')
    this.styleElement.setAttribute('id','dynamic-css-variable')
    this.updateTime = mergeUpdate
    document.head.appendChild(this.styleElement)
  }

  addVar(vars: Record<string, string>): void
  addVar(key: string, value: string): void
  addVar(key: Record<string, string> | string, value?: string) {
    if (typeof key === 'string') {
      this.ruleBlock.addRule({ [key]: value! })
    } else {
      this.ruleBlock.addRule(key)
    }
  }

  removeVar(key: string) {
    this.ruleBlock.removeRule(key)
  }

  getVar(key: string) {
    return this.ruleBlock.rules[key]
  }

  update() {
    console.log('update call')
    if (this.updateTime > 0) {
      clearTimeout(this.updateTimer)
      this.updateTimer = setTimeout(() => {
        this.styleElement.textContent = this.cssLayer.valueOf()
        console.log('update cssVar')
      }, this.updateTime)
    } else {
      this.styleElement.textContent = this.cssLayer.valueOf()
    }
  }
}
