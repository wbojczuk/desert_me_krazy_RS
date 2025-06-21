import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>Serving<br />Montgomery ,AL And Surrounding Areas</h2>
        <Link href={"/contact"} className='main-link' >Contact Now</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216854.48925909091!2d-86.25608044999998!3d32.344207999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888e8194b0d481f9%3A0x8e1b511d354285ff!2sMontgomery%2C%20AL%2C%20USA!5e1!3m2!1sen!2suk!4v1750527964328!5m2!1sen!2suk" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};