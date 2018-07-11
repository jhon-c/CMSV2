var React = require('react');
var Link = require('react-router-dom').Link;
import * as firebase from 'firebase';
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Description:'',
      Value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        Name: event.target.name,
        Description: event.target.value
      }
    
    );
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.Value + this.state.Name + this.state.Description );
     const rootref = firebase.database().ref().child('Store A');
     rootref.push({
        Name: this.state.Name,
        Description: this.state.Description,
        Value: '300'
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={this.state.Name} name = "Name" onChange={this.handleChange} />
        </label>
        <label>
          Product Description:
          <input type="text" value={this.state.Description} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = Add;