"use client"
import Link from "next/link"
import styles from "./catering.module.css"
import Shader from "../../misc/Shader/Shader"

export default function Truck() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/truck.png" width={360} height={600} alt="Image of catering food Truck" />
            <Shader zIndex={1} background="var(--primary-color)" opacity={.36} />
        </div>
        

        <div className={styles.content}>
            <h4>Catering</h4>
            <h2>Full Catering Food Truck</h2>

            <p>Take your event to the next level with our Dessert Me Krazy food truck! We offer full-service catering, bringing our fresh cookies, pies, and famous cinnamon rolls directly to you. Our dessert truck is a fun, eye-catching addition to any party, wedding, festival, or corporate event—serving up sweet treats and unforgettable experiences right on site. Let us roll in and make your event a little more Krazy (in the best way).
            </p>


        </div>
    </section>
  )
}
