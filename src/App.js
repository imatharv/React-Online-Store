import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Access from "./pages/access/access";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./components/authenticate/authenticate"
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path = "/account" component = {Access} />
              <ProtectedRoute  path = "/dashboard" component = {Dashboard} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
  );
}

export default App;
