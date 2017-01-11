import React from 'react'
import { connect } from 'react-redux'
import './notauthenticated.css'

class NotAuthenticated extends React.Component {
  render() {
    let content = null;
    if(!this.props.authenticate) {
      content = this.props.children
    }
    return (
      <div className={this.props.className}>{content}</div>
    )
  }
}

NotAuthenticated.defaultProps = { className: '' };

function mapStateToProps(state){
  return {
    authenticate: state.auth.authenticated
  }

}
export default connect(mapStateToProps)(NotAuthenticated)
