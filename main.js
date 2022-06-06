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

let owc = false;
function onwu() {
  let ofs = 0;
  let a = window.pw;
  owc=true
  console.log("changed")
  for (const word of a) {
    ofs+=1000
    setTimeout(()=>{
      document.querySelector("#formChat").children[0].value = word;
      document.querySelector("#formChat").requestSubmit()
    }, ofs)
  }
}

let wl = []
window.pw = []
document.querySelector("#currentWord").addEventListener("DOMCharacterDataModified", function (event) { onwu() });
fetch("https://raw.githubusercontent.com/qaiik/skribblack/main/words.json", { mode: "no-cors" }).then(res=>res.json()).then((data)=>{
  wl = data
  check()
})
function check() {
  requestAnimationFrame(check)
  let w = document.querySelector("#currentWord").innerText;
  let tt = ttr(w)
  let p = f(wl,tt)
  window.pw = p;
  if (owc===false){
    onwu()
  }
}
check();



