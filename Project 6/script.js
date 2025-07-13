window.addEventListener("wheel",function(dets)
{
    if(dets.deltaY > 0)
    {
        gsap.to("#mar",{
            Transform:"translateX(-200%)",
            repeat:-1,
            duration:4,
            ease:"none"
        })

        gsap.to("#mar img",{
            rotate:180
        })
    }
    else{
        gsap.to("#mar",{
            Transform:"translateX(100%)",
            repeat:-1,
            duration:4,
            ease:"none"
        })

        gsap.to("#mar img",{
            rotate:0
        })
    }
})