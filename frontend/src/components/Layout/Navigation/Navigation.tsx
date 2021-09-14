import React from 'react'
import * as styles from '@components/Layout/Navigation/Navigation.module.scss'

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li>
            <a href="#home" className={`${styles.navigation__link} ${styles.navigation__linkActive}`}>
              home
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navigation__link}>
              about
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#services" className={styles.navigation__link}>
              services
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#demos" className={styles.navigation__link}>
              demos
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#videos" className={styles.navigation__link}>
              videos
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#home-studio" className={styles.navigation__link}>
              home studio
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#clients" className={styles.navigation__link}>
              clients
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navigation__link}>
              contact
              <div className={styles.navigation__bars}>
                <div className={styles.navigation__barsList}>
                <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem1}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem2}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem3}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem4}`}></div>
                  <div className={`${styles.navigation__barsItem} ${styles.navigation__barsItem5}`}></div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.navigation__overlay}></div>
    </>
  )
}

export default Navigation