import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductsTable from '../../components/ProductsTable'
import { graphql } from 'graphql'
import Schema from '../../graphql/Schema'


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: []
    }
  }

  componentWillMount() {
    var products = [
      {
        id: "1231sdsd",
        category: "LED",
        brand: "Sony",
        name: "55 inch",
        purchase_date: "23-12-2016",
        seller_name: "Amazon",
        barcode: "sdfsdf23424"
      },{
        id: "1231sdsd",
        category: "LED",
        brand: "Sony",
        name: "40 inch",
        purchase_date: "23-12-2016",
        seller_name: "Flipkart",
        barcode: "sdfsdf131234"
      }
    ];
    var query = 'query{ products {id, name, category, brand} }'
    graphql(Schema, query).then(result => this.setState({products: products}))
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          <ProductsTable products={this.state.products}/>
        </Col>
      </Row>
    );
  }
}

export default Products
