import React, { Component } from 'react'
import tania from '../../content/images/profile.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Tania Rascia" />
            </div>
            <div>
              <p>
                I’m Tania Rascia. I document everything I learn and help thousands of people start
                coding careers.{' '}
                <strong>
                  My site has no ads, sponsors, or bullshit. If you enjoy my content, please
                  consider supporting what I do.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
