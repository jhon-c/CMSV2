var React = require('react');
var Link = require('react-router-dom').Link;
import * as firebase from 'firebase';
var TableBody = require('./TableBody')


class Tables extends React.Component {
  

  render() {
    
    return (
      <div className='home-container'>
         <a href = '/products/add'  className="btn btn-danger levelit">Add Product</a>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="description">Description</th>
            <th className="price">Price</th>
            <th className="buttons"></th>
          </tr>
        </thead>
          <TableBody/>
      </table>
      </div>
    )
  }
}

module.exports = Tables;