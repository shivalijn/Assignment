import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCar from "./components/create-car.component";
import CarsList from "./components/cars-list.component";
import RecommendCar from "./components/recommend-car.component";
import './App.css';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Car Dealer Application</Link>
        <div className="">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Cars</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Car</Link>
            </li>
            <li className="navbar-item">
              <Link to="/recommend" className="nav-link">Recommendations</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={CarsList} />
      <Route path="/create" exact component={CreateCar} />
      <Route path="/recommend" exact component={RecommendCar} />
    </div>
    </Router>
  );
  }
}

export default App;
