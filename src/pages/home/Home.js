import styles from './Home.module.css'
import React from 'react'
//componentns
import Navbar from '../../../src/components/Navbar.js'
import TransactionForm from './TransactionForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>

      <div className={styles.sidebar}>
        <TransactionForm/>
      </div>
    </div>
  )
}
