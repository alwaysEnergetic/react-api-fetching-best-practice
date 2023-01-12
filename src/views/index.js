import React from 'react';
import { Router } from "react-router-dom";
import history from "./history";
import Route from "./routes";

function App() {
  return (
    <Router history={history}>
      <Route />
    </Router>
  );
}

export default App;
