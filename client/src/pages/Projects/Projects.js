import './Projects.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'


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
        <Grid item xs={12}>
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid className={classes.projectcard} item xs={2}>
          <ProjectCard />
        </Grid>
      </Grid>
      
    </>
  )
}

export default Projects