import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import CommunityIssue from '../../components/CommunityIssue'
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
});

const Dashboard = () => {
  const classes = useStyles();

  const [projectState, setProjectState] = useState([])

  useEffect(() => {
    // console.log('hello')
    axios.get('/api/projects',{
      params: {
        _limit: 3
      }
    })
      .then(data => {
        console.log(data)
        setProjectState(data.data)
      })
      .catch(err => console.log(err))
  }, [])

  return(
    <>
      <h1>Dashboard</h1>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            My Projects
          </Typography>
        </Grid>
        {projectState.map((projectData) => (
          <Grid className={classes.projectcard} item xs={12} sm={5} lg={2}>
            <Link to="/project">
              <ProjectCard
                projectData={projectData}
                title={projectData.title}
                description={projectData.description}
                owner={projectData.owner}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Spacer y={4} />
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Typography variant="h6" component="h2">
                Project Issues
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Button size="small" variant="contained" href="#contained-buttons">
                Only My Issues
              </Button>
              <Button size="small" variant="contained" href="#contained-buttons">
                Recently Updated
              </Button>
            </Grid>
          </Grid>

          <ProjectIssue />
          <Spacer y={1} />
          <ProjectIssue />
          <Spacer y={1} />
          <ProjectIssue />
          <Spacer y={1} />
          <ProjectIssue />
          <Spacer y={1} />
          <ProjectIssue />
          
        </Grid>
        <Spacer x={2} />
        <Grid item xs={12} lg={3}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
          <CommunityIssue />
          <Spacer y={1} />
          <CommunityIssue />
          <Spacer y={1} />
          <CommunityIssue />
          <Spacer y={1} />
          <CommunityIssue />
          <Spacer y={1} />
          <CommunityIssue />

        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard