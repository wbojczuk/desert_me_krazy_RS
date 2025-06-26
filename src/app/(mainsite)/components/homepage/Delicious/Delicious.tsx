"use client"

import Link from 'next/link';
import styles from './delicious.module.css';

export default function Delicious(){
return (
 <div className={styles.find}>

    <div className="center"><h2>Delicious & Baked to Order</h2></div>

    <h3>Our catering menu features our signature cookies, pies, and exotic cinnamon rolls—customized to fit your theme, size, and sweet tooth. Let us make your next event unforgettable, one bite at a time.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/order`}>Order Now</Link>
    </div>
 
    <img src='/img/delicious.png' alt='Image of food' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.7)"}} className='shader'></div>
 </div>
)};