import Link from 'next/link';
import styles from './sweet.module.css';

export default function Sweet(){
return (
 <div className={styles.sweet}>
    <h4>Need Something Sweet? Get It Now!</h4>
    <h2>Contact Us Today!</h2>
    <Link href={"/contact"} className='main-link main-link-outline-light'>Contact Now</Link>
 </div>
)};