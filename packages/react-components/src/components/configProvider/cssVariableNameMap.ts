const CSSVariableNameMap = {
  primaryColor: '--primary-color',
}

export type CSSVariableName = keyof typeof CSSVariableNameMap

function getCSSVariableName(key: CSSVariableName, id: string | number | undefined) {
  return id === undefined ? CSSVariableNameMap[key] : `${CSSVariableNameMap[key]}-${id}`
}

export function genGetCSSVariableName(id: string | number | undefined) {
  return function (key: CSSVariableName) {
    return getCSSVariableName(key, id)
  }
}
