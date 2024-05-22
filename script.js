function locogsap(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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
    var page2s =document.querySelector("#page2")
    document.querySelector("#con1").addEventListener("click",function(){
        locoScroll.scrollTo(page2s)
 
    })
    
    
   
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
locogsap()


// const themeSwitcher = document.getElementById('theme-switcher');
// const body = document.body;

// themeSwitcher.addEventListener('click', () => {
//     var body =document.querySelector("#main")
//     body.style.backgroundColor="white"
//   body.classList.toggle('dark-mode');
//   console.log("clickk")
// });

var span =document.querySelector("#page6 h1 span")
var img =document.querySelector("#page6 #img")

span.addEventListener("mouseenter",function(){
   
        img.style.backgroundImage = "url(Picsart_23-05-23_22-58-06-883.jpg)"


})
span.addEventListener("mouseleave",function(){
    img.style.backgroundImage = "url(Picsart_23-05-23_23-04-25-712.jpg)"

})


var N= document.querySelector("#page1  #N")
var H= document.querySelector("#page1  #H")
var A= document.querySelector("#page1  #A")
var I= document.querySelector("#page1  #I")
var S= document.querySelector("#page1  #S")
var S2= document.querySelector("#page1  #S2")

var img1= document.querySelector(" #page1 #img1")
var img2= document.querySelector(" #page1 #img2")
var img3= document.querySelector(" #page1 #img3")
var img4= document.querySelector(" #page1 #img4")
var img5= document.querySelector(" #page1 #img5")
S.addEventListener("mousemove" ,function(){
   
        img1.style.opacity= "1"
   
})
S.addEventListener("mouseleave" ,function(){
   
    img1.style.opacity= "0"

})



A.addEventListener("mousemove" ,function(){
   
    img2.style.opacity= "1"

})
A.addEventListener("mouseleave" ,function(){

img2.style.opacity= "0"

})
// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
I.addEventListener("mousemove" ,function(){
   
    img3.style.opacity= "1"

})
I.addEventListener("mouseleave" ,function(){

img3.style.opacity= "0"

})
// ssssssssssssssssssssssssssssssssssssssss
H.addEventListener("mousemove" ,function(){
   
    img4.style.opacity= "1"

})
H.addEventListener("mouseleave" ,function(){

img4.style.opacity= "0"

})


S2.addEventListener("mousemove" ,function(){
   
    img5.style.opacity= "1"

})
S2.addEventListener("mouseleave" ,function(){

img5.style.opacity= "0"

})

N.addEventListener("mousemove" ,function(){
   
    img6.style.opacity= "1"

})
N.addEventListener("mouseleave" ,function(){

    img6.style.opacity= "0"

})


var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

window.addEventListener("mousemove" , function(dets){
    
    cursor.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    
    // cursor.style.top=dets.y+10+"px"
    // cursor.style.left=dets.x+10 +"px"
})


var page5 = document.querySelector("#page5 h1")
var cursorimg = document.querySelector("#cursor img")

page5.addEventListener("mouseenter",function(){
    cursor.style.height = "130px"
    cursor.style.width = "130px"

})
page5.addEventListener("mouseleave",function(){
    cursor.style.height = "20px"
    cursor.style.width = "20px"

})


var link =document.querySelector("#page6 h3 a")
link.addEventListener("mouseenter",function(){
    cursor.style.height = "100px"
    cursor.style.width = "100px"
    cursor.style.top=dets.y+"px"
    cursor.style.left=dets.x+"px"
    arrow.style.height= "50px"



})
link.addEventListener("mouseleave",function(){
    cursor.style.height = "20px"
    cursor.style.width = "20px"
    
    cursor.style.top=dets.y+10+"px"
    cursor.style.left=dets.x+10+"px"


})
// project ka hovor mouse animation


document.querySelectorAll(".pro").forEach((pro)=>{
    console.log(pro)
    pro.addEventListener("mouseenter",function(){
        cursor.style.height = "140px"
        cursor.style.width = "140px"
        cursorimg.style.height= "80px"
    })
    pro.addEventListener("mouseleave",function(){
        cursor.style.height = "20px"
        cursor.style.width = "20px"
        cursorimg.style.height= "5px"
    })
})

console.log(pro1)
// ------------------------------------------------------------------------
// var pro2= document.querySelector(".pro1")
// pro2.addEventListener("mouseenter",function(){
//     cursor.style.height = "140px"
//     cursor.style.width = "140px"
//     cursorimg.style.height= "80px"
// })
// pro2.addEventListener("mouseleave",function(){
//     cursor.style.height = "20px"
//     cursor.style.width = "20px"
//     cursorimg.style.height= "5px"
// })
// page5
// cursor









// var btn = document.querySelector("#page1 #content button h3")
// var cur =document.querySelector("#page1 #cursor")


// btn.addEventListener("mousemove", function(){
//     cur.style.backgroundColor= "red"
    
   
// })  


// heading animation
var tl=gsap.timeline()
gsap.set('.text-anime',{
    y:"-20%",
    opacity:0
})
gsap.set('#page1 .i',{
    y:"-20%",
    opacity:0
})
tl.to('#page1 .i',{
    delay:1,
    opacity:1,
    y:0,
    ease:Power1
})
tl.to('.text-anime',{
    // delay:1,
    opacity:1,
    y:0,
    stagger:0.3,
    ease:Power1
},"<50%")

// Page----->5 animation 
var page5heading=document.querySelector('#page5>h1').textContent
var splittedText= page5heading.split("")
// console.log(splittedText)
var clutter=``
var newelm;
splittedText.forEach(function(elem){
    clutter+=`<span class='wordsanime span-space'> ${elem}</span>`
    
 
})
newelm = document.createElement('div');
newelm.innerHTML = clutter;

// Replace the h1 content with the new span elements
document.querySelector('#page5>h1').textContent = "";
document.querySelector('#page5>h1').appendChild(newelm);

gsap.from('.wordsanime',{

    scrollTrigger:{
        trigger:'#page5',
        scroller:'#main',
        start:'top 70%',
        end:"top 5%",
        // markers:true,
        scrub:2,
        yoyo:true
    },
    opacity:0,
    rotate:"-360deg",
    stagger:0.3,
    duration:1,
    ease:Power1


})


tl.from("#page6 h1",{
    opacity:0,
    x:500,

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        // markers:true,
        start:"top 30%",
        end:"top 5%",
        scrub:3,
        yoyo:true
   
    }
    
})

tl.from("#page6 h1 span",{
    opacity:0,
    x:-1000,

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        // markers:true,
        start:"top 30%",
        end:"top 5%",
        scrub:3  ,
        yoyo:true 
    }
    
})
tl.from("#page6 #img",{
    opacity:0,

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        // markers:true,
        start:"top 40%",
        end:"top 7%",
        scrub:3  ,
        yoyo:true 
    }
    
})


// PLay and pause js--->
var videoplay=document.querySelectorAll('.videoplay')
videoplay.forEach(function(video){
    video.addEventListener('mouseenter',()=>{
        // console.log("helloo video")
        video.play()
    
    
    })
    video.addEventListener('mouseleave',()=>{
        // console.log("helloo video")
        video.currentTime=0
        video.pause()
    
    
    })
    
})

// navbar anime--->

var navKai=document.querySelector("#nav2>i")
var uppermenu=document.querySelector(".nav-menu")
navKai.addEventListener("click",()=>{
    uppermenu.style.transform="translateY(0)"
    
})

var close=document.querySelector(".nav-top>i")
close.addEventListener('click',()=>{
    uppermenu.style.transform="translateY(-100%)"
    
})
document.querySelectorAll("#menucontent a").forEach(function(close2){
    close2.addEventListener('click',()=>{
        uppermenu.style.transform="translateY(-100%)"
        
    })

})



// var aaa=document.querySelectorAll("#menucontent>h2>span")
//  .forEach(function(spanh2){
//     spanh2.addEventListener("mouseenter",()=>{
//         console.log("span chlgya")
//         spanh2.style.rotate="-16deg"
//     })

// })


// document.querySelectorAll("#menucontent h2").forEach(function(elem){
   
//         elem.addEventListener("mouseenter",function(){
//         // spanh2.style.transform="rotate(40deg)",
//         elem.style.color='red',
//         aaa.style.rotate = "-90deg",
    
        
//         // stagger=1,
//         console.log("hogya hover")
//     })

// })

uppermenu.addEventListener("mouseenter",function(){
    cursor.style.backgroundColor="#2c3123",
    cursor.style.mixBlendMode="color-burn",
    cursor.style.height="50px",
    cursor.style.width="50px"


})
uppermenu.addEventListener("mouseleave",function(){
    cursor.style.backgroundColor="palevioletred",
    cursor.style.mixBlendMode="difference";
    cursor.style.height="50px",
    cursor.style.width="50px"


})