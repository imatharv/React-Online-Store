import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Access from "./pages/access/access";

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path = "/app" component = {Access} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
