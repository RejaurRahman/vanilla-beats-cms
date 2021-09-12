import React from 'react'
import * as styles from '@components/Layout/Footer/Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__bg}></div>
        <div className={styles.component}>
          <div className={styles.component__container}>
            <div className={styles.component1}>
              <p className={`${styles.footer__text} ${styles.textWhite}`}>
                Copyright &copy; {currentYear.toString()}. Vanilla Beats. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer