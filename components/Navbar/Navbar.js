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
                    <Image src="/images/logo.png" width={92} height={92} alt='Logo du site'/>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
