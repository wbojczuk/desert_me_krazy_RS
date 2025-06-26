"use client"
import Link from "next/link"
import styles from "./aboutus.module.css"
import Shader from "../../misc/Shader/Shader"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/aboutus.png" width={360} height={600} alt="Image of cookies" />
            <Shader zIndex={1} background="var(--primary-color)" opacity={.6} />
        </div>
        

        <div className={styles.content}>
            <h4>Meet Us</h4>
            <h2>Meet Dessert<br />Me Krazy</h2>

            <p>At Dessert Me Krazy, we believe dessert should do more than just satisfy your sweet tooth—it should make a difference. That’s why 15% of all our profits go toward our bigger mission: launching Mercy & Grace, a mobile food bank that helps families in Montgomery, Alabama access good quality food in times of crisis.<br /><br />We’re not just baking cookies, pies, and cinnamon rolls—we’re baking with purpose. When you support us, you’re helping build a future where no one has to choose between feeding their family and making it to the next paycheck. Let’s be Krazy—and fix this, together.
            </p>
            <Link className='main-link' href='/order'>Order Now</Link>

        </div>
    </section>
  )
}
