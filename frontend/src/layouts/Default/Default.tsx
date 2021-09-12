import React, { ReactNode, FC } from 'react'

import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

import styles from './Default.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Default: FC<LayoutProps> = ({children}) => (
  <>
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

export default Default
