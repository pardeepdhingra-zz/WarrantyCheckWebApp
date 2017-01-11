import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Header from './containers/Header'
import Footer from './components/Footer'

let actions = {}

class App extends Component {
  render() {
    return (
      <DocumentTitle title="Warranty Check">
        <div>
          <Header  />
          {this.props.children}
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default App
