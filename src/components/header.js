import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as styles from './header.module.scss'

export default function Header() {
    const data = useStaticQuery(graphql`
        query titleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={styles.mainHeader}>
            <div className={styles.contentHeader}>
                <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
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