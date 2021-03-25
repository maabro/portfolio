import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

export default function Blog() {
    const data = useStaticQuery(graphql`
        query postsQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <h2>Blog Page</h2>
            <ul>
                {data.allMarkdownRemark.edges.map( (edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
                            </Link>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}