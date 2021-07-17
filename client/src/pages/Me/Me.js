import './Me.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Issue from '../../components/Issue'
import ProjectIssue from '../../components/ProjectIssue'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  right: {
    textAlign: 'right',
  }
});

const Me = () => {
  const classes = useStyles();

  return (
    <>
      <h1 align="center">My Issues</h1>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h6" component="h2">
            Issues Reported By Me
          </Typography>
        </Grid>
        <Grid item className={classes.right} xs={3}>
          <Button size="small" variant="contained" href="#sort-project">
            Sort by Project
          </Button>
          <Button size="small" variant="contained" href="#sort-project">
            Sort by Recent
          </Button>
        </Grid>
      </Grid>

      <div>
        <Grid container>
          <Grid item xs={12}>
            <ProjectIssue />
          </Grid>

          <Grid item xs={12}>
            <ProjectIssue />
          </Grid>

          <Grid item xs={12}>
            <ProjectIssue />
          </Grid>

          <Grid item xs={12}>
            <ProjectIssue />
          </Grid>

        </Grid>     
      </div>
    </>
  )
}

export default Me