import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import SignupPage from "./pages/signup/sign";
// import SigninPage from './pages/signin/signin';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path = "/app/signup" component = {SignupPage} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
