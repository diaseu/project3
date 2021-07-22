import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Spacer from '../Spacer'
import Icon from '@material-ui/core/Icon';
import IssueDetail from '../IssueDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  secondary: {
    fontSize: 11,
    textAlign: 'right',
  },
  priority: {
    fontSize: 12,
    textAlign: 'center',
    marginRight: 10,
    color: 'red',
    fontWeight: '800'
  },
  center: {
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: 'center',
  },
});


const ProjectIssue = props => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <IssueDetail />
          
          <Grid item className={classes.center} xs={12}>
            <Icon className={classes.priority}>radio_button_unchecked</Icon>
            
              Error: Node Sass version 5.0.0 is incompatible with ^4.0.0
            
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProjectIssue