import React from 'react'
import styles from './Button.module.css'

const Button = ({ textButton }) => {
  return (
    <button className={styles.button}>
      {textButton}
    </button>
  )
}

export default Button