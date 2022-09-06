let count = 0
setInterval(()=>{
  count++
  console.log(count)
  if(count === 50){
    return count = 0;
  }
}, 100)