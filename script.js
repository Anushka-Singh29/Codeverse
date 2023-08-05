// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();



const lerp = (x, y, a) => x * (1 - a) + y * a;

var frame = document.querySelector(".frame");



frame.addEventListener("mousemove", function (dets) {

  dullandbright();
  var dims = frame.getBoundingClientRect();

  var xstart = dims.x;

  var xend = dims.x + dims.width;

  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);



  gsap.to('.frame span', {
    x: lerp(10, -500, zeroone),
    duration: .5,
  })

  gsap.to(this.children, {
    opacity: 1,
  })
})


frame.addEventListener("mouseleave", function (dets) {
  dullandbright();

  gsap.to('.frame span', {
    x: 0,
    duration: 1,
  })
})

function dullandbright(val) {
  gsap.to(".frame span", {
    opacity: .4,
  })
}


var h1 = document.querySelector("#page2-center h1");
var clutter = "";

h1.textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`;
})

h1.innerHTML = clutter;

var counter = 0;

gsap.to(".info-item h3 span",{
    scrollTrigger: {
        trigger: "#page2",
        start: "top top"
    },
    onStart: function(){
        setInterval(function(){
            if(counter <= 3){
                document.querySelectorAll(".info-item h3 span")[0].textContent = "0"+counter+"+"
            }
            if(counter <= 170){
                document.querySelectorAll(".info-item h3 span")[1].textContent = counter+"+"
            }
            if(counter <=200){
                document.querySelectorAll(".info-item h3 span")[2].textContent = counter+"+"
            }
            counter++
        }, 50)
    }
})

gsap.from("#h3-wrapper>h3",{
    scrollTrigger:{
        trigger:"#page2",
        start:"top top",
    },
    transform: "translateY(100%)",
    ease: Expo.easeOut,
    duration: 1
})

gsap.from("#page2-center>h1 span",{
    scrollTrigger:{
        trigger:"#page2",
        start:"top top",
        end: "bottom -200%",
        scrub:2,
        pin:true,
    },
    stagger: .1,
    opacity:0.2,
})

gsap.from("#page2-center svg",{
    scrollTrigger:{
        trigger:"#page2 #h3-wrapper",
        start:"top -110%",
        scrub: true,
    },
    opacity: 0,
    duration: 2,
})


var cont1 = document.querySelectorAll(".cont1");
var container = document.querySelector("#container");
var h2 = document.querySelectorAll("#page3 #container .cont1 .cont1-right .h2");
var h6 = document.querySelectorAll("#page3 #container .cont1 .cont1-right .h6")
var btn = document.querySelectorAll("#page3 #container .cont1  .cont-left .btn");
var image = document.querySelectorAll("#page3 #container .cont1  .cont-left .image")

Array.from(cont1).forEach((element, index) => {
  element.addEventListener("mouseenter", () => {
    h2[index].style.fontSize = "3vw";
    h2[index].style.marginTop = "5%";
    h2[index].style.marginLeft = "-25%";
  
    h6[index].style. marginTop="20%";
    h6[index].style. fontSize="1.3vw";
    h6[index].style.width="500px";
    h6[index].style.marginLeft="-75%";
    h6[index].style.Color="black";

btn[index].style.display="block";
btn[index].style.marginTop="13%";
 btn[index].style.marginLeft="-10%";

 image[index].style.display="block";
image[index].style.marginLeft="10%";



  });

  element.addEventListener("mouseleave", () => {
    h2[index].style.fontSize = "4vw";
    h2[index].style.marginTop = "4%";
    h2[index].style.marginLeft = "-10%";
   

    h6[index].style. marginTop="6%";
    h6[index].style. fontSize="1.4vw";
    h6[index].style.width="750px";
    h6[index].style. marginLeft="14%";


    btn[index].style.display="none";
    // btn[index].style.marginTop="18%";
    // btn[index].style.marginLeft="-150%";

    
 image[index].style.display="none";
  });
});



var tl = gsap.timeline({
  scrollTrigger:{
      trigger: "#page4",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom -400%",
      scroller: "body"
  }
})

tl
.to(".c1", {
  top: "-40%",
  duration: 5
}, "same")
.to(".c2", {
  top: "-20%",
  duration: 5
}, "same")
.to(".c3", {
  top: "25%",
  duration: 5
}, "same")
.to(".s1", {
  left: "7%",
  duration: 3
})
.to(".s2", {
  left: "7%",
  duration: 3
})
.to(".s3", {
  left: "7%",
  duration: 3
})


const showAnim = gsap.from('#nav', {
  y: -100,
  paused: true,
  duration: 0.5,
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: "bottom -2000%",
  onUpdate: (self) => {
      if(self.direction === -1){
          showAnim.play()
      }else{
          showAnim.reverse()
      }
  }
});


