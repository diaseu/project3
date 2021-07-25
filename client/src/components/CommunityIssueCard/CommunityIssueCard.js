import './CommunityIssueCard.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line
import {
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


const CommunityIssue = props => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component={'span'}>
          {props.title}
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <span className={classes.secondary} color="textSecondary">
              asked on 7/16/21 @ 1:15 PM</span>
          </Grid>
          <Grid className={classes.answer} item xs={4}>
            <Badge badgeContent={props.replycount} color="secondary">
              <Button size="small" variant="contained" color="primary" href="#contained-buttons">
                Answer
              </Button>
            </Badge>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CommunityIssue