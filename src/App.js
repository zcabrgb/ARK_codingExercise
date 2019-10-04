import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/*" component={props => <Table {...props} />} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
