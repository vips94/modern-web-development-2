import React from 'react';
import styles from './heroBanner.module.scss';

const HeroBanner = () => {
    return (
        <div className={styles['page-section']}>
            <div className={styles['text-sec']}>
                <h5>We make it happen</h5>
                <div className={styles['title']}>
                    <h1 className='hvr'>Websites</h1>
                    <h1 className='hvr'>Apps</h1>
                    <h1 className='hvr'>Branding</h1>
                </div>
                
            </div>
        </div>
    );
};

export default HeroBanner;