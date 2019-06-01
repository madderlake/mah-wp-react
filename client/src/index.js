//import {MuiThemeProvider} from '@material-ui/core/styles';
//import {createMuiTheme} from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
// import { baseTheme } from './themes/themes';
import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store";
import App from "./App";

// const muiTheme = createMuiTheme({
// 		typography: {
// 			useNextVariants: true,
// 		},
// 		palette: {
// 			//type: 'dark',
// 		  }
// 	});
if (process.env.NODE_ENV === "production") {
  const store = configureStore(window.PAGE_STATE || {});

  window.onload = () => {
    Loadable.preloadReady().then(() => {
      ReactDOM.hydrate(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
        document.getElementById("root")
      );
    });
  };
} else {
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,

    document.getElementById("root")
  );
}
