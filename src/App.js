import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Access from "./pages/access/access";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./components/authenticate/authenticate"

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path = "/account" component = {Access} />
            {/* <Route exact path = "/dashboard" component = {Dashboard} /> */}
            <ProtectedRoute  path = "/dashboard" component = {Dashboard} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
