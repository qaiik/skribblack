//text to regex filter
function ttr(t) {
  return {
    e: new RegExp(t.split("_").join(".")),
    l: t.length
  }
}

function f(wl,ttro) {
  return wl.filter(v=>ttro.e.test(v)&&v.length==ttro.l)
}
