import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { key: 1 }
  }

  handleSelect(key){
    this.setState({key})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
