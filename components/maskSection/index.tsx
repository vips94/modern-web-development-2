'use client'
import React, { useState,useEffect, useRef } from 'react';
import styles from './heroBanner.module.scss';
import useMousePosition from '@/utils/useMousePosition';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const MaskSection = () => {
    const maskRef = useRef<HTMLInputElement>(null);
    const [isMouseHover, setIsMouseHover] = useState(false)
    const {x,y} = useMousePosition()
    let maskSize = isMouseHover ?  400 : 40;

    const updateMousePosition = ()=>{
        if(!maskRef.current) return;
        gsap.to(maskRef.current,{
            "-webkit-mask-position":`${x-maskSize/2 - maskRef.current.getBoundingClientRect().left}px ${y-maskSize/2 - maskRef.current.getBoundingClientRect().top}px`,
            ease: 'power1.out',
            "-webkit-mask-size": `${maskSize}px`,
            duration: 0.5,
            opacity:1,
        })
    }

    const updateMouseOpacity = () => {
        gsap.to(maskRef.current,{
            ease: 'power1.out',
            duration: 0.5,
            opacity:0,
        })
    }

    return (
        <div className={styles['page-section']} onMouseMove={updateMousePosition} onMouseLeave={updateMouseOpacity}>
            <div className={styles['mask-sec']} ref={maskRef} >
                <p onMouseEnter={()=>{setIsMouseHover(true)}} onMouseLeave={()=>setIsMouseHover(false)}>A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.</p>
            </div>
            <div className={styles['body-sec']}>
                <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience all around.</p>
            </div>
        </div>
    );
};

export default MaskSection;