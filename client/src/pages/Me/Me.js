import './Me.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Issue from '../../components/Issue'
import CommunityIssue from '../../components/CommunityIssue'


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

const Me = () => {
  const classes = useStyles();

  return (
    <>
      <h1 align="center">My Issues</h1>
      <div className='contactcontainer'>
        
            <Card className={classes.cardinfo}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                <CommunityIssue />
              </Grid>
            </Grid>

            <br/>

            <Grid container>
              <Grid item xs={12}>



                <Issue />
              </Grid>
            </Grid>

            <br/>

            <Grid container>
              <Grid item xs={12}>



                <Issue />
              </Grid>
            </Grid>

            <br />

            <Grid container>
              <Grid item xs={12}>



                <Issue />
              </Grid>
            </Grid>

            <br />

            

            

                    {/* <Typography variant="h5" component="h2" gutterBottom className="center">
                    Latest Issues
                        
                        <Card className={classes.cardinfo}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12}>

                          <Typography variant="h5" component="h2" gutterBottom>
                            Issue Title
                    </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="h5" component="h4" gutterBottom>
                            Poster
                          </Typography>

                          <Typography variant="h5" component="h2" gutterBottom>
                            Issue Body
                    </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  <PubIssue />


                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    {/* <Typography variant="h5" component="h2" gutterBottom>
                      Put stuff here
                    </Typography> */}
                 
              </CardContent>
            </Card>


          
      </div>
    </>
  )
}

export default Me