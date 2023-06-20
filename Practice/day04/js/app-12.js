let img=document.getElementById("lamp")
document.getElementById("on").addEventListener("click",()=>{
   img.src= "/day04/img/lamba_on.gif"
})
document.getElementById("off").addEventListener("click",()=>{
    img.src= "/day04/img/lamba_off.gif"
})
img.addEventListener("mouseover",()=>{
    img.src= "/day04/img/lamba_on.gif"
})
img.addEventListener("mouseleave",()=>{
    img.src= "/day04/img/lamba_off.gif"
})