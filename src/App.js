import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/">
          <h1>Landing page</h1>
        </Route>
        <Route exact path="/browse">
          <h1>Browse</h1>
        </Route>
        <Route exact path="/quiz">
          <h1>Quizzes</h1>
        </Route>
        <Route exact path="/register-user">
          <h1>User registration</h1>
        </Route>
        <Route exact path="/login">
          <h1>Login</h1>
        </Route>
        <Route exact path="/logout">
          <h1>Logout</h1>
        </Route>
        <Route exact path="/about">
          <h1>About</h1>
        </Route>
        <Route exact path="/scoreboard">
          <h1>Scoreboard</h1>
        </Route>
      </div>
    </Router>
  );
}

export default App;
