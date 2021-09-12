import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer>
        &copy; {currentYear.toString()} - <span>vanilla beats</span>
      </footer>
    </>
  )
}

export default Footer