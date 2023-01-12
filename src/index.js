import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './state/store';
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
