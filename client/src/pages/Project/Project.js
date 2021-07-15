import './Project.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Issue from '../../components/Issue'
import PubIssue from '../../components/CommunityIssue'
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  ccb: {
    marginBottom: 20,
  },
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  column: {
    marginRight: 20,
    marginBottom: 20,
  },
  columngrid: {
    
  },
  columntest: {
    backgroundColor: '#ddd'
  }, 
  addbtn: {
    textAlign: 'center',
    margin: 'auto'
  }
});

const Project = () => {
  const classes = useStyles();

  return(
    <>
      <Typography variant="h3" component="h2">
            Project: Apollo Titan
      </Typography>
      <Grid container>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
            <CardContent>
              <Typography className={classes.ccb} variant="h5" component="h5">
                Open
              </Typography>
              <Issue />
              <Issue />
              <Issue />
              <Issue />
              <Chip
                className={classes.addbtn}
                label="Add Issue"
                variant="outlined"
              />
            </CardContent>
          </Card>
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
            <CardContent>
              <Typography className={classes.ccb} variant="h5" component="h5">
                In Progress
              </Typography>
              <Issue />
              <Issue />
              <Issue />
              <Issue />
              <Chip
                className={classes.addbtn}
                label="Add Issue"
                variant="outlined"
              />
            </CardContent>
          </Card>
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
            <CardContent>
              <Typography className={classes.ccb} variant="h5" component="h5">
                Closed
              </Typography>
              <Issue />
              <Issue />
              <Issue />
              <Issue />
              <Chip
                className={classes.addbtn}
                label="Add Issue"
                variant="outlined"
              />
            </CardContent>
          </Card>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Project