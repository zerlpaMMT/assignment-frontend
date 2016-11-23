export function es5() {
  function d(spec) {
    var x = spec.x || 0
    var y = spec.y || 0
    var z = spec.z || 0

    return x + y + z
  }

  return d
}

export function es6() {
  return (object) => {
    let {x=0, y=0, z=0} = object;
    return x+y+z;
  }
}
