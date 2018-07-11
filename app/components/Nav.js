var React = require('react');
var NavLink = require('react-router-dom').NavLink;

const NavStyle = {
  width:'10%'

}
function Nav () {
  return (
    <div>
        <div className="icon-bar">
                <a href="/"><i className="fa fa-home"></i><div className="title">Dashboard</div></a>
                <a href="/profile"><i className="fa fa-user"></i><div className="title">Profile</div></a>
                <a href="/themes"><i className="fa fa-gears"></i><div className="title">Themes</div></a>
                <a  href="/locations"><i className="fa fa-map-marker"></i><div className="title">Location</div></a>
                <a className="active" href="/products"><i className="fa fa-briefcase"></i><div className="title">Products</div></a>
                <a href="/promos"><i className="fa fa-star"></i><div className="title">Promos</div></a>
                <a href="/notifications"><i className="fa fa-exclamation"></i><div className="title">Notifications</div></a>
                <a href="/users"><i className="fa fa-users"></i><div className="title">Users</div></a>
            </div>
    </div>
  )
}

module.exports = Nav;