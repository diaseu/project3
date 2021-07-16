import './ProjectIssue.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Icon';

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

const ProjectIssue = () => {
  const classes = useStyles();

  return (
    <>
     
      <div className='contactcontainer'>

        <Card className={classes.cardinfo}>
          <CardContent>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" component="h2" gutterBottom>
                 
                  <h3>Issue Title</h3>
                  <h3>Description</h3>
                  <h3>Status (unanswered, in progress, closed)</h3>
                  <h3>Asker</h3>
                  
                  <h3>comments</h3>
                 
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                

                  <Button variant="contained" color="primary" href="#contained-buttons">
                    Make Issue Public
                  </Button>
                  <h3>Assignees</h3>
                  <h3>Priority</h3>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </div>
    </>
  )
}

export default ProjectIssue