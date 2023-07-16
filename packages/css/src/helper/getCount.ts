export function genGetCount() {
  let count = 0
  return function () {
    return count++
  }
}

