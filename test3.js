let a = 0
const b = setInterval(function() {
  a++
  console.log(a)
  if (a === 60){
    clearInterval(b);
  }
}, 16)