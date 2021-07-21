import './Help.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  contactcontainer: {
    maxWidth: 1200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  cct: {
    marginBottom: 40,
  },
  ccinfo: {
    marginLeft: 40,
    marginBottom: 20,
  },
  ccicon: {
    marginRight: 40,
  },
  cardinfo: {
    
  }
});

const Help = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Community Issues </h1>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
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

export default Help