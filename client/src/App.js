import './App.css';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Me from './pages/Me'
import Help from './pages/Help'
import ProjectIssue from './pages/ProjectIssue'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import About from './pages/About'
import User from './utils/UserAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#cccccc',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


function App() {
  const classes = useStyles();

  // const history = useHistory()
  const [meState, setMeState] = useState({
    me: {},
    isLoggedIn: true
  })

  const getMe = () => {
    User.me()
      .then(({ data: me }) => {
        if (me) {
          setMeState({ me, isLoggedIn: true })
        } else {
          getMe()
        }
      })
      .catch(err => {
        console.error(err)
        setMeState({ ...meState, isLoggedIn: false })
      })
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setMeState({ me: {}, isLoggedIn: false })
    window.location = '/login'
  }

  useEffect(() => {
    getMe()
  }, [])

  const updateMe = () => {
    User.me()
      .then(({ data: me }) => {
        console.log(me)
        setMeState({ me, isLoggedIn: true })
      })
      .catch(err => {
        console.error(err)
        setMeState({ ...meState, isLoggedIn: false })
      })
  }
  
  function navbar () {
    if (document.location.pathname !== "/login" && document.location.pathname !== "/signup") {
      return (
        <Navbar 
          me={meState.me}
          isLoggedIn={meState.isLoggedIn}
          handleLogOut={handleLogOut}
        />
      )
    }
  }
  
  return (

    <Router>
      <div className={classes.root}>
        <CssBaseline />
       {navbar()}
       
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/me">
                <Me />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route path="/projectIssue">
                <ProjectIssue />
              </Route>
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;