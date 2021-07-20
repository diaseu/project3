import './Projects.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../../components/ProjectCard'
import MoreCard from '../../components/MoreCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  contactcontainer: {
    maxWidth: 1200,
  },
  title: {
    fontSize: 14,
  },
  cct: {
    marginBottom: 40,
  },
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  ccicon: {
    marginRight: 40,
  },
  cardinfo: {

  }
});

const Projects = () => {
  const classes = useStyles();

  return (
    <>
    <h1>View My Projects</h1>
      <Grid container>
        <Grid item xs={12} lg={12}>
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <Link to="/project"><ProjectCard /></Link>
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} md={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} md={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} md={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} md={5} lg={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={12} md={5} lg={2}>
          <MoreCard />
        </Grid>
      </Grid>
      
    </>
  )
}

export default Projects