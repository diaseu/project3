import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

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
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
  secondary: {
    fontSize: 11,
    textAlign: 'right',
  }
});


const IssueDetail = props => {
  const classes = useStyles();

  return(
    <>
      <Grid item xs={9}>
        <Typography className={classes.pos} color="textSecondary">
          <Chip label={props.project} size="small" component="a" href="/project" clickable />
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.secondary} color="textSecondary">
          posted by <Chip
            label={props.author}
            variant="outlined"
          />
        </Typography>
      </Grid>
    </>
  )
}

export default IssueDetail