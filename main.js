import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';

import store from './core/store';
import router from './core/router';
import history from './core/history';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {grey300, white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

let routes = require('./routes.json'); // Loaded with utils/routes-loader.js
const container = document.getElementById('container');
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#365EBF",
    primary2Color: "#365EBF",
    primary3Color: "#365EBF",
    accent1Color: "#365EBF",
    accent2Color: "#365EBF",
    accent3Color: "#365EBF",
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: "#365EBF",
    shadowColor: fullBlack
  }
});

function renderComponent(component) {
  ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><Provider store={store}>{component}</Provider></MuiThemeProvider>, container);
}

// Find and render a web page matching the current URL path,
// if such page is not found then render an error page (see routes.json, core/router.js)
function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error }).then(renderComponent));
}

// Needed for onTouchTap
injectTapEventPlugin();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
history.listen(render);
render(history.getCurrentLocation());

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes.json', () => {
    routes = require('./routes.json'); // eslint-disable-line global-require
    render(history.getCurrentLocation());
  });
}
