import './CommunityIssue.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingBottom: 0,
  },
  secondary: {
    fontSize: 11,
  },
  title: {
    fontSize: 12,
  },
  answer: {
    textAlign: 'right'
  },
});


const CommunityIssue = () => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
          How to fix missing dependency warning when using useEffect React Hook?
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <span className={classes.secondary} color="textSecondary">
              asked on 7/16/21 @ 1:15 PM</span>
          </Grid>
          <Grid className={classes.answer} item xs={4}>
            <Badge badgeContent={4} color="secondary">
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