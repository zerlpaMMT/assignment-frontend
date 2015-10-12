export function es5() {
  function includes(arr, val) {
    if (arr.indexOf(val) !== -1) {
      return true
    }
    return false
  }

  var a = [1, 2, 3, 4, 5]
  return includes(a, 3)
}

export function es6() {
}
