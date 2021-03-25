import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

export default function Post(props) {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <article dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
        </Layout>
    )
}