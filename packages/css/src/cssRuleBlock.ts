export interface Rules {
  [key: string]: string
}

interface CSSRuleBlockOptions {
  defualtRules?: Rules
  defaultNestBlocks?: CSSRuleBlock[]
  space?: number
}

export class CSSRuleBlock {
  selector: string
  rules: Rules
  nestBlocks: CSSRuleBlock[]
  space: string

  constructor(selector: string, options?: CSSRuleBlockOptions) {
    const { defaultNestBlocks = [], defualtRules = {}, space = 0 } = options ?? {}
    this.selector = selector
    this.rules = defualtRules
    this.nestBlocks = defaultNestBlocks
    this.space = ' '.repeat(space)
  }

  valueOf(): string {
    const ruleString = Object.entries(this.rules)
      .map(([key, value]) => {
        return `${this.space}  ${key}: ${value};`
      })
      .join('\n')

    let nestBlockString = ''
    if (this.nestBlocks.length > 0) {
      nestBlockString = '\n' + this.nestBlocks.map((block) => block.valueOf()).join('\n') + '\n'
    }

    return `${this.space}${this.selector} {\n${ruleString}\n${nestBlockString}${this.space}}`
  }

  addRule(rule: Rules) {
    this.rules = { ...this.rules, ...rule }
  }

  addNestBlock(block: CSSRuleBlock | CSSRuleBlock[]) {
    if (Array.isArray(block)) {
      this.nestBlocks.push(...block)
    } else {
      this.nestBlocks.push(block)
    }
  }

  removeRule(key: string) {
    delete this.rules[key]
  }

  removeNestBlock(selector: string) {
    this.nestBlocks = this.nestBlocks.filter((block) => block.selector !== selector)
  }
}
