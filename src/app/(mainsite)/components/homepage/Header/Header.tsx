"use client"
import Shader from "../../misc/Shader/Shader"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Crave-Worthy Cookies,<br />Pies & <span className="underline">One-of-a-Kind</span><br />Cinnamon Rolls</h1>

        <p>Baked fresh with bold flavors and creative twists you won’t find in any store—treat yourself to something truly unforgettable.</p>
        

        <Link href="/order" className="main-link">Order Now</Link>

        <img src="/img/header-bg.png" alt="image of people cooking" className="bg-img" />
        <Shader opacity={.46} />

    </header>
  )
}
