import React, {Component} from 'react'

import './app.scss'
import bgImg from './bg.png'

export default class App extends Component {
  state = {
    name: 'app'
  }

  render() {
    return (
      <div className="main">
        Hello, driver.
        <section>
          <img src={bgImg} alt=""/>
        </section>
      </div>
    )
  }
}
