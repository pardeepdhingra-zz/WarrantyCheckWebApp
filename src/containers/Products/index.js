import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductsTable from '../../components/ProductsTable'
import { connect } from 'react-redux'
import * as actions from '../../actions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      categories: props.categories
    }
    this.props.protectedTest();
  }

  renderContent() {
    if(this.props.products) {
      return (
        <ProductsTable products={this.state.products}/>
      );
    }
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          {this.renderContent()}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(Products)
