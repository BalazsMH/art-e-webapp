import './App.css';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import UserGeneral from './components/user/UserGeneral';
import UserStats from './components/user/UserStats';
import UserSecurity from './components/user/UserSecurity';
import UserLogin from './components/user/UserLogin';
import UserRegistration from './components/user/UserRegistration';
import ArtBrowser from './components/BrowseComponent/ArtBrowser';
import {ArtDataProvider} from './components/BrowseComponent/ArtBrowserContext';
import Scoreboard from './components/quiz/Scoreboard';
import PageNotFound from './components/PageNotFoundComponent/PageNotFound';


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Landing page</h1>
          </Route>
          <Route exact path="/browse">
            <ArtDataProvider>
              <ArtBrowser></ArtBrowser>
            </ArtDataProvider>
          </Route>
          <Route exact path="/quiz">
            <h1>Quizzes</h1>
          </Route>
          <Route exact path="/register-user">
            <UserRegistration />
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
            <Scoreboard />
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
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
