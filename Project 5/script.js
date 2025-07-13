var time=gsap.timeline()

var menu=document.querySelector("#menu")
var cross= document.querySelector("#cross")


time.to("#full",{
    right:0,
    duration:0.3
})

time.from("#full h4",{
    x:130,
    stagger:0.3,
    opacity:0,
    duration:0.5,

})

time.from("#full i",{
    opacity:0,
    duration:1

})

time.pause()

menu.addEventListener("click",function()
{
    time.play()
})

cross.addEventListener("click",function()
{
    time.reverse()
})