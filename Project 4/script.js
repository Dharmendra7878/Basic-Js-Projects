var tl=document.querySelector("#name")


tl.addEventListener("mousemove" ,function(dets)
{
    gsap.to("h1" ,{
        duration:0.5,
        x: dets.x,
        y: dets.y,
        ease:"power3.out"
    })
    
})