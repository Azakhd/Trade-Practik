async function ol() {
   let url = 'https://www.binance.com/api/v1/aggTrades?limit=80&symbol=TRXUSDT';
   let response = await fetch(url);
   let commits = await response.json(); 
   let index = commits[79].p
   let Newcircle = document.createElement('div')
   Newcircle.innerHTML = '<div class="circle"></div>'
   conentgraf.append(Newcircle)
   let i = document.getElementById('conentgraf').children.length
   const content_circle = document.getElementById('conentgraf');
   const a = index.split("").reverse().join("")
   const b  = Math.min(a) -8880 
   const r = b /10000 
   console.log(index)
   Newcircle.style.transform = `translate(0px,-${r}pc)`
   if(i>50){
      content_circle.removeChild(content_circle.childNodes[0]);
   }
   document.querySelector('h1> span').innerHTML = index

}
setInterval(ol,1000)

