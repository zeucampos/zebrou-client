import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/signup/SignupPage";
import GroupPage from "./pages/group/GroupPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cadastro" component={SignupPage} />
        <Route path="/jogo" component={GroupPage} />

        <Route path="*">
          <GroupPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
