import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './footer.module.scss'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <footer className={styles.mainFooter}>
            <div className={styles.contentFooter}>
                <span>Creado con amor usando:</span>
                <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>
                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a>
                <p>&copy; {data.site.siteMetadata.title}.</p>
            </div>
        </footer>
    )
}