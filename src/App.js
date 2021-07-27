import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PeopleDetails from "./components/PeopleDetails/PeopleDetails";

function App() {
  // state for search value
  const [people, setPeople] = useState("");
  return (
    <div className="App">
      <Router>
        {/* router switch for route */}
        <Switch>
          <Route exact path="/">
            <Link to="/api/people">See all people list</Link>
          </Route>
          <Route exact path="/api/people">
            <Home people={people} setPeople={setPeople} />
          </Route>
          <Route path="/api/people/:id">
            <PeopleDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
