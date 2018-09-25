
var React = require('react'); //required for webpack to understand
var ReactDOM = require('react-dom'); //required for webpack to understand
var WeatherMain = require('WeatherMain');

ReactDOM.render(
    <WeatherMain />,
    document.getElementById('app')
);