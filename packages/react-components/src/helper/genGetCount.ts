/**
 * @description 返回一个函数,每次调用返回一个递增的数字。
 * @description_en Returns a function that returns an increasing number each time it is called.
 */
export function genGetCount() {
  let count = 0
  return function () {
    return count++
  }
}
