const scroll = new LocomotiveScroll({
    el: document.querySelector("#outer"),
    smooth: true
});

/*page1 rotate and call*/
var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0
})

tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})