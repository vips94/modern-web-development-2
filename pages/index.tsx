import Head from 'next/head'
import styles from '@/styles/Home.module.scss';
import HeroBanner from '@/components/hero-banner';
import NavBar from '@/components/nav-bar';
import React,{ useLayoutEffect} from 'react';
import { mouseFollower, makeMagnet, hoverWithMediaCircle, imageEffect } from '@/utils/effects';
import Featured from '@/components/featured';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles1 from '@/components/featured/featured.module.scss';

gsap.registerPlugin(ScrollTrigger);

let loaded = false;

export default function Home() {

  useLayoutEffect(()=>{
    if(!loaded){
      console.log("hi2")
      mouseFollower();
      makeMagnet('.magnet')
      hoverWithMediaCircle(".hvr", {
        videos: ["/videos/0.mp4", "/videos/2.mp4", "/videos/3.mp4"],
      });

      // console.log(`.${styles1['fleftelm']}`)
      

      gsap.to(`.${styles1['fleftelm']}`, {
        scrollTrigger: {
          trigger: "#fimgages",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          endTrigger: "#last",
          scrub: 1,
          // markers: true
        },
        y: "-300%",
        ease: 'power1',
      });

      ScrollTrigger.refresh();

    let sections = document.querySelectorAll(`.${styles1['fleftelm']}`);
    imageEffect(`.${styles1['featured-Ritems']}`, {
    style: 1,
    // dubug :true,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll:any) => {
        sections.forEach(function (section, index) {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function (prog) {
                setScroll(prog.progress + index);
            },
        });
        });
    },
    });
    }
    loaded = true;
  },[]) 

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main}`} id='main'>
        <NavBar/>
        <HeroBanner/>
        <Featured/>
      </main>
    </>
  )
}



