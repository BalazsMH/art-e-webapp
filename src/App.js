import './App.css';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import UserGeneral from './components/user/UserGeneral';
import UserStats from './components/user/UserStats';
import UserSecurity from './components/user/UserSecurity';
import UserLogin from './components/user/UserLogin';


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
          <UserLogin />
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
        <Route exact path="/user">
          <Redirect to="/user/general" />
        </Route>
        <Route exact path="/user/general">
          <UserGeneral />
        </Route>
        <Route exact path="/user/game">
          <UserStats />
        </Route>
        <Route exact path="/user/security">
          <UserSecurity />
        </Route>
      </div>
    </Router>
  );
}

export default App;
