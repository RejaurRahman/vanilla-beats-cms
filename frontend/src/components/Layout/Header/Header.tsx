import React from 'react'
import styles from './Header-Main.module.scss'

import Navigation from '@components/Layout/Navigation'
import BurgerMenu from '@components/Layout/BurgerMenu'

const Header = () => {
  return (
    <>
      <div>
        <BurgerMenu />
        <Navigation />
      </div>
    </>
  )
}

export default Header