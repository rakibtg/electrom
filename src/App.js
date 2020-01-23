import React, { Component } from 'react'
import webEvents from './webEvents'

export default class App extends Component {

  state = {
    response: false
  }

  render() {

    const { response } = this.state

    return (
      <div className='app'>
        <div>
          <button onClick={() => {
            webEvents('HELLO_WORLD', {earth: 'Send help...'})
              .then(response => {
                this.setState({ response })
              })
          }}>Hello World?</button>
          {
            response && <pre>
              {JSON.stringify(response, false, 2)}
            </pre>
          }
        </div>
      </div>
    )
  }
}