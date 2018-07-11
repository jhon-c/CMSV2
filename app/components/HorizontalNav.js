var React = require('react');
var NavLink = require('react-router-dom').NavLink;



function HorizontalNav () {
  return (
    <div>
    <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="/"><span className="glyphicon glyphicon-eject"></span></a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Hi User!</a></li>
                        <li><a href="#">Preview</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                    <form className="navbar-form" role="search">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"  id="srch-term-header"></input>
                      </div>
                  </form>
                </div>
            </nav>
    </div>
  )
}

module.exports = HorizontalNav;