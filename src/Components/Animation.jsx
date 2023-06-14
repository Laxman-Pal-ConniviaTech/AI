import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Animation(props) {

useEffect(() =>{
  gsap.registerPlugin(ScrollTrigger);

//   gsap.to(".wrapper" , {
//     scrollTrigger:{
//       trigger: ".how_it_works",
//       start: "top top",
//       end:"top top",
//       scrub: 1,
//     },
//     background: "linear-gradient(106deg, rgba(116,177,233,0.5046393557422969) 0%, rgba(243,241,255,0.5438550420168067) 100%)",
//     boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//     duration:1,
//   })

//   gsap.to(".logosvg" , {
//     scrollTrigger:{
//       trigger: ".how_it_works",
//       start: "top top",
//       end:"top top",
//       scrub: 1,
//     },
// fill:"#12192B",
//     duration:1,
//   })

//   gsap.to(".nav-link" , {
//     scrollTrigger:{
//       trigger: ".how_it_works",
//       start: "top top",
//       end:"top top",
//       scrub: 1,
//     },
//     color:"#12192B",
//     duration:1,
//   })

//   gsap.to(".header_btn , .header_btn a" , {
//     scrollTrigger:{
//       trigger: ".how_it_works",
//       start: "top top",
//       end:"top top",
//       scrub: 1,
//     },
//     color:"#12192B",
//     borderColor:"#12192B",
//     duration:1,
//   })



})
  return (
    <div>{props.children}</div>
  )
}

export default Animation