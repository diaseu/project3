import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import IssueDetail from '../IssueDetail'
import IssueAPI from '../../utils/IssueAPI'
// eslint-disable-next-line
import {
  Route,
  Link,
  useParams
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
    fontSize: 13,
    textAlign: 'center',
    marginRight: 10,
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

  const obj = {
    Medium: "#f79d0c",
    High: "red",
    Low: "#14a7fc"
  }

  return (

    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <IssueDetail 
            author={props.author}
            project={props.project}
          />

          <Grid item className={classes.center} xs={12}>
            <Icon className={classes.priority} style={{ color: obj[props.priority] }} >radio_button_unchecked</Icon>

            {props.title}

          </Grid>
        </Grid>
      </CardContent>
    </Card>

  )
}

export default ProjectIssue