import React, { ReactNode, FC } from 'react'

import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

import * as styles from '@layouts/Default/Default.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Default: FC<LayoutProps> = ({children}) => (
  <>
    <Header />
    <main className={styles.layout}>
      {children}
    </main>
    <Footer />
  </>
)

export default Default
