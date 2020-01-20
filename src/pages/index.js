import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import quotes from '../../data/quotes'
// import almeida from '../../content/images/profile-me.jpeg'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Developer & Writer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>Hi and Welcome</h1>
              <p>I'm a very enthusiastic developer and this is probably a tech related <Link to="/blog">blog</Link>.</p>
              <br />
              <div className="social-buttons">
                <GitHubButton
                  href="https://github.com/almeidacavalcante"
                  data-size="large"
                  data-show-count="true"
                >
                  almeidacavalcante
                </GitHubButton>
              </div>
            </div>

            {/* <div className="newsletter-section">
              <img src={almeida} className="newsletter-avatar" alt="Almeida Cavalcante" />
              <div>
                <h3>Instagram</h3>
                <p>Open source projects and development tutorials</p>
                <a className="button" href="https://www.instagram.com/almeida.cavalcante/">
                  Follow Me
                </a>
              </div>
            </div> */}

          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Latest Articles
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          {/* <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section> */}

        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
