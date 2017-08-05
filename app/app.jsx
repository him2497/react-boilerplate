const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, BrowserRouter} = require('react-router-dom');
const Main = require('Main');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <BrowserRouter>
      <Main>
        <Route exact path="/" />
      </Main>
    </BrowserRouter>,
      document.getElementById('app'));
