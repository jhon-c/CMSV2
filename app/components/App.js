var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var HorizontalNav = require('./HorizontalNav');
var Dashboard = require('./Dashboard');
var Profile = require('./Profile');
var Themes = require('./Themes');
var Locations = require('./Locations');
var Promos = require('./Promos');
var Notifications = require('./Notifications');
var Users = require('./Users');
var Products = require('./Products');
var Add = require('./Add');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/themes' component={Themes} />
            <Route path='/locations' component={Locations} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/products/add' component={Add} />
            <Route path='/promos' component={Promos} />
            <Route path='/notifications' component={Notifications} />
            <Route path='/users' component={Users} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;