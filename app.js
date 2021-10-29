const btn = document.getElementById('meme')
const span = document.getElementById('span') 

var containingData
btn.addEventListener('click', () => {
span.innerText = ''
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(datam => containingData = datam)
  //  console.log(containingData.data.memes[]);
setTimeout(() => { 
//for( var i = 0 ; i < containingData.data.memes.length ; i++) {
    var i = Math.floor(Math.random() * 100)
     var imgs =  containingData.data.memes[i].url 
span.innerHTML = `<p>${containingData.data.memes[i].name}</p><div class='hello'><img style='border:1px solid black; 'src = '${imgs}' height=${(containingData.data.memes[i].height)/2}  width = ${(containingData.data.memes[i].width)/2}  ></div>` 
//} 
//console.log(i)
},1000)

span.innerText = 'Loading...'
})

const reset = document.getElementById('reset')

reset.addEventListener('click', () => {
    span.innerHTML = ''
})