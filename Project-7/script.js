var h1=document.querySelector("h1")
var h1Text=h1.textContent

var splited=h1Text.split("")
var half=Math.floor(splited.length/2)

var cut=""

splited.forEach(function(elem,ind)
{
    if(ind<half)
    {
        cut +=`<span class="a"> ${elem} </span>`
          
    }

    else
    {
        cut +=`<span class="b">${elem} </span>`
        
    }
})

h1.innerHTML=cut





gsap.from("h1  .a",{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:0.15
    
})

gsap.from("h1 .b",{
    y:-50,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})