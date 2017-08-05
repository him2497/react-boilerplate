const React = require('react');
const {Link, NavLink, withRouter} = require('react-router-dom');


class Navigation extends React.Component {

constructor(props){
  super(props);
}
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Boilerplate App</li>
            
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = withRouter(Navigation);
