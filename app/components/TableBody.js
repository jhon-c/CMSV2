var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
import * as firebase from 'firebase';

class TableBody extends React.Component {
  
    constructor(){
        super();
        this.state = {
             productDetails: []
        }
    }

    componentDidMount(){
   
        const rootref = firebase.database().ref().child('Store A');
        const PreviousDetail  = this.state.productDetails;
        rootref.on('child_added', snap => {
            console.log(snap.val())
            console.log(snap.child('Description').val());
            console.log(snap.child('Name').val());
            console.log(snap.child('Value').val());
            PreviousDetail.push(
                {
                name: snap.child('Name').val(),
                description: snap.child('Description').val(),
                value: snap.child('Value').val()
            })
            this.setState({
             productDetails: PreviousDetail
            }
            )
        })
    
    }

  render() {
     const productDetails = this.state.productDetails.map(detail => 
            <tr key ={detail.name}>
            <td >{detail.name}</td>
            <td >{detail.description}</td>
            <td >{detail.value}</td>
            <td >*Buttons*</td>
            </tr>  
    );
    
    return(
        <tbody>
        {productDetails}
        </tbody>
    )
    }
    
  
}
module.exports = TableBody;