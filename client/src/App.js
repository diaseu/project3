import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Me from './pages/Me'
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
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/me">
                <Me />
              </Route>
            </Switch>
          </Container>
        </main>
        {/* <Section /> */}
      </div>
    </Router>
  );
}

export default App;