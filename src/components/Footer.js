import React, { Component } from 'react'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.svg'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        {/* <div>
          <a href="https://ko-fi.com/almeidacavalcante" target="_blank" rel="noopener noreferrer">
            Ko-Fi
          </a>
          <a href="https://patreon.com/almeidacavalcante" target="_blank" rel="noopener noreferrer">
            Patreon
          </a>
          <Link to="/newsletter">Newsletter</Link>
          <a href="https://www.almeidacavalcante.com/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div> */}
        <div>
          <a href="https://github.com/almeidacavalcante" title="GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    )
  }
}
