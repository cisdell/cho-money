
import {useAuthContext} from '../../hooks/useAuthContext'
//styles
import styles from './Home.module.css'
import React from 'react'
//componentns
import Navbar from '../../../src/components/Navbar.js'
import TransactionForm from './TransactionForm'

export default function Home() {
  const {user} = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
