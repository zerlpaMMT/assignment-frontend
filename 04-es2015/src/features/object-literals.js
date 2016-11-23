export function es5() {
  return {
    i: 0,
    next: function() {
      return this.i += 1
    }
  }
}

export function es6() {
  return { i: 1, next: () => {
      return this.i += 1;
    }
  };
}
