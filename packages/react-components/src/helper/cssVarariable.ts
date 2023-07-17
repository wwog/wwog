import { CSSLayer, CSSRuleBlock } from '@wwog/css'

export class CSSVariable {
  public styleElement

  protected cssLayer: CSSLayer
  protected ruleBlock: CSSRuleBlock

  private req = false

  constructor() {
    this.cssLayer = new CSSLayer({
      name: 'dynamic-css-variable',
    })
    this.ruleBlock = new CSSRuleBlock(':root')
    this.cssLayer.addRuleBlock(this.ruleBlock)
    this.styleElement = document.createElement('style')
    this.styleElement.setAttribute('type', 'text/css')
    this.styleElement.setAttribute('id', 'dynamic-css-variable')
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
  /**
   * @example
   * useLayoutEffect(() => {
   *  cssVariable.addVar({ '--primary-color': primaryColor })
   *  cssVariable.update()
   * }, [primaryColor])
   * @description 样式更新提交到页面。
   * 如果位于`useEffect`调用,可能会遇到丢失更新,因为它不阻塞浏览器绘制。
   * 优先考虑单独的`useLayoutEffect`中使用它,内部通过`requestAnimationFrame`在单帧内的多次调用会合并在重绘前与react渲染组件完成后提交更新于同一帧执行。
   * @description_en Style update submitted to the page.
   * If it is called in `useEffect`, you may encounter a lost update because it does not block the browser drawing.
   * It is preferred to use it in a separate `useLayoutEffect`, and the multiple calls within it through `requestAnimationFrame` 
   * will be merged and submitted for update in the same frame after the react rendering component is completed.
   */
  update() {
    //合并更新任务于下一次重绘前
    if (this.req) return
    this.req = true

    requestAnimationFrame(() => {
      this.styleElement.innerHTML = this.cssLayer.valueOf()
      this.req = false
    })
  }
}
