import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './react-bootstrap-table.css'

const ProductsTable = ({products}) => {
	return (
			<BootstrapTable data={products} striped={false} hover={false}>
				 <TableHeaderColumn dataField="barcode" isKey={true} dataAlign="center" dataSort={false}>Barcode</TableHeaderColumn>
				 <TableHeaderColumn dataField="name" dataSort={false}>Product Name</TableHeaderColumn>
				 <TableHeaderColumn dataField="category" dataSort={false}>Category</TableHeaderColumn>
				 <TableHeaderColumn dataField="brand" dataSort={false}>Brand</TableHeaderColumn>
				 <TableHeaderColumn dataField="seller_name" dataSort={false}>Seller Name</TableHeaderColumn>
				 <TableHeaderColumn dataField="purchase_date" dataSort={false}>Purchase Date</TableHeaderColumn>
			</BootstrapTable>
	)
}

export default ProductsTable
