import { CSSRuleBlock } from './cssRuleBlock'
import { addStrToBeforeEachLine, genGetCount } from './helper'

const getCount = genGetCount()

interface CSSLayerOption {
  name?: string
}

export class CSSLayer {
  name: string
  ruleBlocks: CSSRuleBlock[] = []

  constructor(options: CSSLayerOption) {
    this.name = options.name ?? `layer${getCount()}`
  }

  addRuleBlock(ruleBlock: CSSRuleBlock) {
    this.ruleBlocks.push(ruleBlock)
  }
  addRuleBlocks(ruleBlocks: CSSRuleBlock[]) {
    this.ruleBlocks = [...this.ruleBlocks, ...ruleBlocks]
  }
  removeRuleBlock(selector: string) {
    this.ruleBlocks = this.ruleBlocks.filter((ruleBlock) => ruleBlock.selector !== selector)
  }

  valueOf() {
    const ruleBlocksStr = this.ruleBlocks
      .map((ruleBlock) => addStrToBeforeEachLine(ruleBlock.valueOf(), '  '))
      .join('\n\n')
    return `@layer ${this.name} {\n${ruleBlocksStr}\n}`
  }
}
