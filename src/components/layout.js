import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import * as styles from './layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}