import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Me from './pages/Me'
import Help from './pages/Help/Index'
import ProjectIssue from './pages/ProjectIssue/Index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar
        />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Dashboard />
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
              <Route path="/projectIssue">
                <ProjectIssue />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;