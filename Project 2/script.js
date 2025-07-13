
gsap.to("#page-1 h1",
    {

        transform:"translateX(-150%)",
        scrollTrigger:{
            trigger:"#page-1",
            scroller:"body",
            markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true
        }
        
    }
)

