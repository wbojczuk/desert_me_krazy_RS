"use client"

import Link from 'next/link';
import styles from './good.module.css';

export default function Good(){
return (
 <div className={styles.deserves}>
    <h2>What Makes Us<br /><span className="underline underline2">Krazy</span> Good</h2>
    <p>At Dessert Me Krazy, we don’t just bake—we create bold, unforgettable flavors you won’t find anywhere else. Our cookies, pies, and especially our exotic cinnamon rolls are made fresh with love and creativity. We’re all about quality, fun, and desserts that leave you wanting more. That’s what makes us krazy good!</p>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/order'>Order Now</Link>
    </div>
 </div>
)};