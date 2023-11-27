import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/Navbar/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li>
                <Link href="/">
                    <Image src="/images/logo.png" width={56} height={56} alt='Logo du site'/>
                </Link>
            </li>
        </ul>
        <ul className=''>
            <li><Link href="/">All</Link></li>
            <li><Link href="/">Contact</Link></li>
            <li><Link href="/">Home</Link></li>

        </ul>
    </nav>
  )
}
