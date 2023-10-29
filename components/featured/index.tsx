import React, { useEffect } from 'react';
import styles from './featured.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
    return (
        <div className={styles['page-section']}>
            <div className={styles['sections']}>
                <div className={styles['text-sec']}>
                    <h2>featured</h2>
                    <h2 className={styles['stroked-text']}>projects</h2>
                </div>
                <div className={styles['featured-sec']} id='fimgages'>
                    <div className={styles['fLeft']}>
                        <div className={styles['fleftelm']}>
                            <h3>Riyadh</h3>
                            <h2>Official Website of Riyadh Saudi Arabia's Capital.</h2>
                            <h4>design, development, projects</h4>
                        </div>
                        <div className={styles['fleftelm']}>
                            <h3>Riyadh</h3>
                            <h2>Official Website of Riyadh Saudi Arabia's Capital.</h2>
                            <h4>design, development, projects</h4>
                        </div> 
                        <div className={styles['fleftelm']}>
                            <h3>Riyadh</h3>
                            <h2>Official Website of Riyadh Saudi Arabia's Capital.</h2>
                            <h4>design, development, projects</h4>
                        </div>
                        <div className={styles['fleftelm']} id="last">
                            <h3>Riyadh</h3>
                            <h2>Official Website of Riyadh Saudi Arabia's Capital.</h2>
                            <h4>design, development, projects</h4>
                        </div>
                    </div>
                    <div className={styles['fRight']}>
                        <div className={styles['featured-Ritems']}>
                            <img src='/images/1.jpg'/>
                            <img src='/images/3.jpg'/>  
                            <img src='/images/4.jpg'/>
                            <img src='/images/2.jpg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;