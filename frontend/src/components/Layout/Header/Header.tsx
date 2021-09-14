import React from 'react'
import * as styles from '@components/Layout/Header/Header.module.scss'

import Navigation from '@components/Layout/Navigation'
import BurgerMenu from '@components/Layout/BurgerMenu'
import LanguageDropdown from '@components/Layout/LanguageDropdown'

const Header = () => {
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={`${styles.component__container} ${styles.header__container}`}>
          <div className={styles.header__bar}>
            <LanguageDropdown />
            <BurgerMenu />
          </div>
          <Navigation />
        </div>
      </header>
    </>
  )
}

export default Header