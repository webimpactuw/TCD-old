import Image from 'next/image'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.nav} >
            <div className={styles.innerNav}>
                <div style={{margin: "0 auto 0 0"}}>
                    <Link href="/">
                        <Image src='/logo.svg' width='40' height='40' alt='logo'/>
                    </Link>
                </div>
                <Link className={styles.links} href="/events">Events</Link>
                <Link className={styles.links} href="/team">Meet the Team</Link>
                <Link className={styles.links} href="/about">About</Link>
                <Link className={styles.links} href="/join">Join Now</Link>
            </div>
        </div>
    )
}