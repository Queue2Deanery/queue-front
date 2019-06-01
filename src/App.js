import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SingInRoute from "./components/SingInRoute";
import DashboardRoute from "./components/DashboardRoute";
import StudentAppBar from "./components/AppBar";

function App() {
  return (
      <Router>
        <div className="container">
          <StudentAppBar/>
          <Route exact path="/singin" component={SingInRoute} />
          <Route exact path="/dashboard" component={DashboardRoute} />

        </div>
      </Router>
  );
}

export default App;
