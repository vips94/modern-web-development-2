import gsap from "gsap";
import { lerp } from "./support";

var globalMouseFollower = null
var picchemousefollower = null
var main = null

export function mouseFollower(opts = {} as any) {
    main = document.querySelector('#main');
    globalMouseFollower = document.createElement("div")
    picchemousefollower = document.createElement("div")
    globalMouseFollower.classList.add("mousefollower")
    picchemousefollower.classList.add("mousefollower")
    picchemousefollower.id = "behindmouse"
    var posx = 0
    var diff = 0
    addEventListener("mousemove", function (dets) {
      if (opts.skew) {
        diff = gsap.utils.clamp(15, 35, dets.clientX - posx)
        posx = dets.clientX
        gsap.to(".mousefollower", {
          width: diff + "px",
          ease: opts.ease || Expo.easeOut,
          duration: opts.duration || 1,
        })
      }
      // difference nikaalo
      gsap.to(".mousefollower", {
        top: dets.clientY,
        left: dets.clientX,
        duration: opts.duration || 1,
        ease: opts.ease || 'expo.out',
      })
    })
  
    addEventListener("mouseenter", function () {
      gsap.to(".mousefollower", {
        opacity: 1,
      })
    })
    addEventListener("mouseleave", function () {
      gsap.to(".mousefollower", {
        opacity: 0,
        duration: opts.duration || 1,
        ease: opts.ease || Expo.easeOut,
      })
    })
    main?.appendChild(picchemousefollower)
    main?.appendChild(globalMouseFollower)
  } //!SECTION

  export function makeMagnet(element:any, opts = {} as any) {
    document.querySelectorAll(element).forEach(function (elem) {
      elem.addEventListener("mousemove", function (dets:any) {
        var bcr = elem.getBoundingClientRect()
        var zeroonex = gsap.utils.mapRange(
          0,
          bcr.width,
          0,
          1,
          dets.clientX - bcr.left
        )
        var zerooney = gsap.utils.mapRange(
          0,
          bcr.height,
          0,
          1,
          dets.clientY - bcr.top
        )
  
        gsap.to(".mousefollower", {
          scale: 4,
          ease: 'Power2.out',
          duration: 0.5,
        })
  
        gsap.to(elem, {
          x: lerp(-20, 20, zeroonex),
          y: lerp(-20, 20, zerooney),
          duration: opts.duration || 1,
          ease: opts.ease || 'expo.out',
          z:10
        })
      })
      elem.addEventListener("mouseleave", function (dets:any) {
        gsap.to(".mousefollower", {
          scale: 1,
          ease: 'Power2.out',
          duration: 0.5,
        })
        gsap.to(elem, {
          x: 0,
          y: 0,
          duration: opts.duration || 1,
          ease: opts.ease || 'expo.out',
        })
      })
    })
  }

  export function hoverWithMediaCircle(element:any, opts:any) {
    function calculateMedia(indexofelem:any) {
      var lengthofres = opts.images ? opts.images.length : opts.videos.length
      return indexofelem % lengthofres
    }
  
    var parent = document.querySelector('#main');
    var parentDiv = document.createElement("div")
    parentDiv.classList.add("just-a-white-blend-screen")
    parentDiv.classList.add("movercirc")
  
    var circle = document.createElement("div")
  
    // <video preload="auto" muted="" loop="" autoplay="" src="blob:https://cuberto.com/e9ebb315-eef6-42b5-982d-53eb983c272f"></video>
    var media:any = null
    document.body.click()
    if (opts.images) {
      var img = document.createElement("img")
      media = img
    } else if (opts.videos) {
      var vid = document.createElement("video")
      vid.preload = "auto"
      vid.autoplay = true
      vid.muted = true
      vid.loop = true
      media = vid
    }
  
    circle.appendChild(media)
    parent?.appendChild(parentDiv)
    parent?.appendChild(circle)
  
    circle.classList.add("movercirc")
  
    document.querySelectorAll(element).forEach(function (elem, index) {
      var prevx = 0
      var prevy = 0
  
      elem.classList.add("hovercircle")
      elem.addEventListener("mouseenter", function (dets:any) {
        media.setAttribute(
          "src",
          opts.images
            ? opts.images[calculateMedia(index)]
            : opts.videos[calculateMedia(index)]
        )
      })
  
      var timer:any
      elem.addEventListener("mousemove", function (dets:any) {
        var trans = gsap.utils.pipe(
          gsap.utils.clamp(-1, 1),
          gsap.utils.mapRange(-1, 1, 0.8, 1.2)
        )
        var diffx = trans(dets.clientX - prevx)
        var diffy = trans(dets.clientY - prevy)
        prevx = dets.clientX
        prevy = dets.clientY
  
        clearTimeout(timer)
        timer = setTimeout(function () {
          gsap.to(".movercirc", {
            transform: `translate(-50%,-50%)`,
          })
        }, 500)
  
        gsap.to(".movercirc", {
          left: dets.clientX,
          top: dets.clientY,
          width: "20vw",
          height: "20vw",
          transform: `translate(-50%,-50%) scale(${diffx}, ${diffy})`,
          ease: 'circ.out',
          duration: 0.4,
          opacity: 1,
        })
        circle.classList.add("blend")
      })
  
      elem.addEventListener("mouseleave", function (dets:any) {
        gsap.to(".movercirc", {
          width: "0",
          height: "0",
          ease: 'power2.out',
          duration: 0.4,
          opacity: 0,
        })
        circle.classList.remove("blend")
      })
    })
  } //!SECTION

  