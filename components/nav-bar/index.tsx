import React, { useEffect } from 'react';
import styles from './navBar.module.scss';
import Link from 'next/link';
import {HiOutlineMenuAlt4} from 'react-icons/hi';

const NavBar = () => {
    
    return (
        <nav className={styles['nav-section']}>
            <img src="/images/cuberto.svg" className='magnet'/>
            <div className={styles['right-sec']}>
                <Link href="#">our showreel</Link>
                <div className={styles['menu-icon']}>
                    <p>menu</p>
                    <button className='magnet'>
                        <HiOutlineMenuAlt4 size={25}/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;