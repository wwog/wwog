# DynamicCss


## Install

### npm

```bash
  npm install @wwog/css
```

### pnpm

```bash
  pnpm install @wwog/css
```

### yarn

```bash
  yarn add @wwog/css
```

## Exports

| Export                         | Type  | Description           |
| ------------------------------ | ----- | --------------------- |
| CSSRuleBlock                   | Class | Gennerate Css Block   |
| CSSLayer                       | Class | Gennerate Layer Block |
| createStyleElement             | Func  | -                     |
| createStyleElementWithCSSLayer | Func  | -                     |

## Usage

### Gennerate CSS

```typescript

import { CSSRuleBlock } from './cssRuleBlock'
import { CSSLayer } from './cssLayer'
const cssRule = new CSSRuleBlock('h1', {
  defualtRules: {
    color: 'red',
    'font-size': '20px',
  },
})

cssRule.addNestBlock(
  new CSSRuleBlock('&.test', {
    space: 2,
  }),
)

const cssLayer = new CSSLayer({
  name: 'base',
})
cssLayer.addRuleBlock(cssRule)

console.log(cssLayer.valueOf())

/*
@layer base {
  h1 {
    color: red;
    font-size: 20px;

    &.test {

    }
  }
}
*/
```
