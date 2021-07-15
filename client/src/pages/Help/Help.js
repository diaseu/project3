import './Help.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

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
      <h1>Answer Others' Issues - Public Issues</h1>
      <div className='contactcontainer'>

        <Card className={classes.cardinfo}>
          <CardContent>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Put stuff here
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Put stuff here
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </div>
    </>
  )
}

export default Help