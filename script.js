function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// --- PURPLE/GREEN PANEL ---




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()


document.querySelector("#pg1")

.addEventListener("mousemove", function(dets){
    document.querySelector(".b").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.02 }px, ${dets.clientY * 0.02}px)`
    document.querySelector(".b2").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.02 }px, ${dets.clientY * 0.02}px)` 
    document.querySelector(".b3").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.02 }px, ${dets.clientY * 0.02}px)` 
    document.querySelector(".w").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.02 }px, ${dets.clientY * 0.02}px)`
    document.querySelector(".w2").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.02 }px, ${dets.clientY * 0.02}px)` 
    document.querySelector(".w3").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.02 }px, ${dets.clientY * 0.02}px)` 
})


document.querySelector("#pg1")

.addEventListener("mousemove", function(dets){
    document.querySelector(".yb").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.022 }px, ${dets.clientY * 0.022}px)`
    document.querySelector(".bb").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.022 }px, ${dets.clientY * 0.022}px)` 
    document.querySelector(".pb").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.022 }px, ${dets.clientY * 0.022}px)` 
    document.querySelector(".yw").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.022 }px, ${dets.clientY * 0.022}px)`
    document.querySelector(".bw").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.022 }px, ${dets.clientY * 0.022}px)` 
    document.querySelector(".pw").style.transform =`translate(-50%,-50%) translate(${dets.clientX * 0.022 }px, ${dets.clientY * 0.022}px)` 
})

var tl = gsap.timeline();

tl.from("#line,#line2",{
    width:"0%",
    left:"0%",
    duration:1,
    ease:Expo.easeInOut
});

tl.from("#cml",{
    width:"0%",
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#right",{
    x:-20,
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("#cml2",{
    width:"0%",
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("h3",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#i",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#tomb",{
    left:-500,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#tomb2",{
    left:1290,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#h1",{
    right:-380,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#h2",{
    left:-380,
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("#circle",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("#c2",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#c3",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("#c4",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("#sr",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});


tl.from("#sy",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});

tl.from("#crr",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeInOut
});


gsap.from("#pg2 #l1",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:0.5,
    },
    left:"10%",
    width:"0vw",
    opacity:0,
});

gsap.from("#pg2 #l2",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:1,
    },
    width:"0vw",
    opacity:0,
});


gsap.from("#pg2 #l3",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:1,
    },
    width:"0vw",
    opacity:0,
});


gsap.from("#pg2 #l4",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
      
    },
    x:0,
    width:"0vw",
    opacity:0,
});



gsap.from("#pg2 #orange",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg2",
    start:"top 40%",
    end:"bottom 1%",
    // markers:true,
  duration:"2.5",
  //   scrub:5,
  },
  height:"0vh",
  width:"0vw",
  duration:"1",
  opacity:0,
});

gsap.from("#pg2 #ib",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    duration:"2.5",
    //   scrub:5,
    },
    height:"0vh",
    width:"0vw",
    duration:"1",
    opacity:0,
});

gsap.from("#pg2 #clr",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    width:"0vw",
    duration:"1",
    opacity:0,
});


gsap.from("#pg2 #l5",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:0.5,
    },
    x:0,
    width:"0vw",
    opacity:0,
});

gsap.from("#pg2 #l6",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:1,
    },
    width:"0vw",
    opacity:0,
});


gsap.from("#pg2 #l7",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:1,
    },
    width:"0vw",
    opacity:0,
});


gsap.from("#pg2 #l8",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 50%",
      end:"bottom 1%",
      // markers:true,
      
    },
    x:0,
    width:"0vw",
    opacity:0,
});


gsap.from("#pg2 #iyl",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    width:"0vw",
    duration:"1",
    opacity:0,
});


gsap.from("#pg3 #dkit",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg3",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",
});



gsap.from("#pg3 #l1",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg3",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});



gsap.from("#pg3 #l2",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg3",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg3 #l3",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg3",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg3 #l4",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg3",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});


gsap.from("#pg3 #temper",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg3",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",
});

gsap.from("#pg3 #posterclr",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg3",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",
});


gsap.from("#pg4 #clrpencil",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg4",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",
});


gsap.from("#pg4 #l1",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg4 #l2",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});


gsap.from("#pg4 #l3",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg4 #l4",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg4 #waterclr",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg4",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",
});


gsap.from("#pg4 #l5",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});



gsap.from("#pg4 #l6",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});



gsap.from("#pg4 #l7",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});



gsap.from("#pg4 #l8",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg4",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg4 #sbook",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg4",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",
});



gsap.from("#pg5 #brushpen",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg5",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",

});

gsap.from("#pg5 #pinkimg",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg5",
      start:"top 40%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    height:"0vh",
    // width:"0vw",
    opacity:0,
    duration:"1",

});

gsap.from("#pg5 #l1",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg5",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg5 #l2",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg5",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg5 #l3",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg5",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg5 #l4",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg5",
    start:"top 50%",
    end:"bottom 1%",
    // markers:true,
  //   scrub:0.5,
  },
  x:0,
  width:"0vw",
  opacity:0,
});

gsap.from("#pg5 #purple",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg5",
    start:"top 40%",
    end:"bottom 1%",
    // markers:true,
  duration:"2.5",
  //   scrub:5,
  },
  height:"0vh",
  width:"0vw",
  duration:"1",
  opacity:0,
});


gsap.from("#pg6 #l1",{
 
    stagger:{
      amount:1
    },
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg6",
      start:"top 70%",
      end:"bottom 1%",
      // markers:true,
    //   scrub:5,
    },
    width:"0%",
    opacity:0,
    duration:"1",
});




gsap.from("#pg6 #liney",{
 
  stagger:{
    amount:1
  },
  scrollTrigger:{
    scroller:"#main",
    trigger:"#pg6",
    start:"top 7%",
    end:"bottom 1%",
    // markers:true,
    // scrub:1,
  },
  // width:"0%",
  opacity:0,
  duration:"1",
});



// gsap.from("h1",{

//   onStart:function(){
//     $('#center').textillate({ in: { effect: 'rollIn' } });
//   }
// })
// $(function(){
  
//       out:{
//     effect:`bounce`
// }
// loop:true
// });
// });
