import React from 'react'

import Layout from '../components/layout'
import * as styles from './index.module.scss'

export default function Home() {
    return (
        <Layout>
            <section className={styles.homeContent}>
            <h2>Home Page</h2>
            <p>Some text here</p>
            </section>
        </Layout>
    )
}