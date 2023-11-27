import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from '@/components/Layout/layout.module.css'

export default function Layout(props) {
  return (
    <>
    <Navbar />
        <div className={styles.layout}>   
            {props.children}
        </div>
    </>
  )
}
