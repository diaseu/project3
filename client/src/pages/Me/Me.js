import './Me.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import Spacer from '../../components/Spacer';
import UserAPI from'../../utils/UserAPI'
import { Link}  from "react-router-dom";
import ProjectCard from '../../components/ProjectCard'



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  right: {
    textAlign: 'right',
  }
});



const Me = () => {
  const classes = useStyles();

  const [issueState, setIssueState] = useState([])

  useEffect(() => {
    UserAPI.me()
      .then(data => {
        
        console.log(data, 'this is data')
        setIssueState(data.data.issues)

      })
      
      .catch(err => console.log(err))
  }, [])




  return (
    <>
      <h1 align="left">My Issues</h1>
      <Grid container>
        <Grid item xs={12} md={6} sm={6}>
          <Typography variant="h6" component="h2">
            Issues Reported By Me
          </Typography>
        </Grid>
        <Grid item className={classes.right} xs={12} md={6} sm={6}>
          <Button size="small" variant="contained" href="#sort-project">
            Sort by Project
          </Button>
          <Button size="small" variant="contained" href="#sort-project">
            Sort by Recent
          </Button>
        </Grid>
      </Grid>
      <Spacer y={1} />

      <div>
        <Grid container>
          <Grid item xs={12}>
            <h1>Put Project Issues Here</h1>
            {issueState.map((issueData) => (
              <Grid  item xs={12} sm={4} lg={2}>
                {/* <Link to={`/projects/${id}`}> */}
                <Link>
                  <ProjectCard
                    key={issueData.title}
                    title={issueData.title}
                    
                  />
                </Link>
              </Grid>
            ))}

        

           
               

         






          </Grid>

        </Grid>     
      </div>
    </>
  )
}

export default Me