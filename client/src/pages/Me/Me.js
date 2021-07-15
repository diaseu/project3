import './Me.css';
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
    backgroundColor: '#164a41',
    color: '#ffffff',
    
  }
});

const Me = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Contact Dia</h1>
      <div className='contactcontainer'>
        <Grid container>
          <Grid item xs={4}>
            <Card className={classes.cardinfo}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Contact Dia
                </Typography>
                <Typography className={classes.cct} color="textSecondary">
                  Fill out the form to contact me
                </Typography>
                <Typography className={classes.ccinfo} variant="body2" component="p">
                  <Icon className={classes.ccicon}>perm_phone_msg</Icon> {'+‪1 619 663 5375'}
                </Typography>
                <Typography className={classes.ccinfo} variant="body2" component="p">
                  <Icon className={classes.ccicon}>email</Icon> {'theslowpokie@gmail.com'}
                </Typography>
                <Typography className={classes.ccinfo} variant="body2" component="p">
                  <Icon className={classes.ccicon}>place</Icon> {'Anaheim, CA'}
                </Typography>
                <div className="socialmedia">
                  <Icon className="fab fa-discord" />
                  <Icon className="fab fa-github" />
                  <Icon className="fab fa-linkedin" />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8} spacing={3}>
            Form here
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Me