import React from 'react'
import { Link } from 'gatsby'

import * as styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.contentHeader}>
                <h1><Link to="/">maabro</Link></h1>
                <nav>
                    <ul>
                        <li><Link className={styles.navItems} to="/">Home</Link></li>
                        <li><Link className={styles.navItems} to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}