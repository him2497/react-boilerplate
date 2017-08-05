const React = require('react');
const Navigation = require('Navigation');

class Main extends React.Component{
  render() {
      return (
        <div>
          <Navigation/>
          <div>
            <div >
              <p>Main.jsx Rendered</p>
              {this.props.children}
            </div>
          </div>
        </div>
      );
  }
}

module.exports = Main;
