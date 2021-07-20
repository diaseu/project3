import './Dashboard.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import CommunityIssue from '../../components/CommunityIssue'
import Project from '../../components/Project-candelete'
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'

const Dashboard = () => {

  return(
    <>
      <h1>Dashboard</h1>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            My Projects
          </Typography>
        </Grid>
        <Grid item xs={12} lg={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} y={1} />
        <Grid item xs={12} lg={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} y={1} />
        <Grid item xs={12} lg={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} y={1} />
        <Grid item xs={12} lg={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} y={1} />
        <Grid item xs={12} lg={2}>
          <ProjectCard />
        </Grid>
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