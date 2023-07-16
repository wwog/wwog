export function changeLine(origin: string, callback: (lineStr: string) => string) {
  return origin.split('\n').map(callback).join('\n')
}

export function addStrToBeforeEachLine(origin: string, beforeStr: string) {
  return changeLine(origin, (lineStr) => `${beforeStr}${lineStr}`)
}

export function addStrToAfterEachLine(origin: string, afterStr: string) {
  return changeLine(origin, (lineStr) => `${lineStr}${afterStr}`)
}
