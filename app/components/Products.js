var React = require('react');
var Link = require('react-router-dom').Link;
var Table =  require('./Table');
class Products extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Products</h1>
        <Table/>
      </div>
    )
  }
}

module.exports = Products;