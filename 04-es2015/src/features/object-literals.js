export function es5() {
  return {
    i: 0,
    next: function() {
      return this.i += 1
    }
  }
}

export function es6() {
  let i = 0;
  function next() {return this.i+=1;}

  // shortcut
  return {
    i,
    next
  }

}
