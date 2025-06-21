"use client"
import Link from "next/link"
import styles from "./catering.module.css"
import Shader from "../../misc/Shader/Shader"

export default function Catering() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/catering.png" width={360} height={600} alt="Image of catering food" />
            <Shader zIndex={1} background="var(--primary-color)" opacity={.36} />
        </div>
        

        <div className={styles.content}>
            <h4>Dessert Me Krazy</h4>
            <h2>Catering And Events</h2>

            <p>Planning a special event? Let Dessert Me Krazy bring the sweet! We offer delicious cookies, pies, and our famous cinnamon rolls that are perfect for parties, weddings, work events, and more. Whether you need a full dessert table or a custom order, we’ll make sure your guests remember the treats long after the event is over.
            </p>


        </div>
    </section>
  )
}
