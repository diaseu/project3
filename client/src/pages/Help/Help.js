import './Help.css';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CommunityIssue from '../../components/CommunityIssue'
import Spacer from '../../components/Spacer';
import IssueAPI from '../../utils/IssueAPI'

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
    
  },
  right: {
    textAlign: 'right',
  }
});

const Help = () => {
  const classes = useStyles();

  useEffect(() => {
    IssueAPI.getAll()
      .then(issues => console.log(issues))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Community Issues </h1>
      <Grid container>
        <Grid item xs={12} md={6} lg={6} sm={6}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
        </Grid>
        <Grid item className={classes.right} xs={12} md={6} lg={6} sm={6}>
        </Grid>
      </Grid>
      <Spacer y={1} />
      <div>
        <Grid container>
          <Grid item xs={12}>
            <CommunityIssue />
          </Grid>

          <Grid item xs={12}>
            <CommunityIssue />
          </Grid>

          <Grid item xs={12}>
            <CommunityIssue />
          </Grid>

          <Grid item xs={12}>
            <CommunityIssue />
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Help