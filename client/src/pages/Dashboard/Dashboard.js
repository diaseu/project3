import './Dashboard.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Issue from '../../components/Issue'
import PubIssue from '../../components/PubIssue'
import Project from '../../components/Project'
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'

const Dashboard = () => {

  return(
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            My Projects
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
          <Spacer x={2} />
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} />
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} />
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
        <Spacer x={2} />
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
      </Grid>
      <Spacer y={4} />
      <Grid container>
        <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" component="h2">
                Recent Issues
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button size="small" variant="contained" href="#contained-buttons">
                Only My Issues
              </Button>
              <Button size="small" variant="contained" href="#contained-buttons">
                Recently Updated
              </Button>
            </Grid>
          </Grid>

          <Issue />
          <Spacer y={1} />
          <Issue />
          <Spacer y={1} />
          <Issue />
          <Spacer y={1} />
          <Issue />
          <Spacer y={1} />
          <Issue />
          
        </Grid>
        <Spacer x={2} />
        <Grid item xs={3}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
          <PubIssue />
          <Spacer y={1} />
          <PubIssue />
          <Spacer y={1} />
          <PubIssue />
          <Spacer y={1} />
          <PubIssue />
          <Spacer y={1} />
          <PubIssue />

        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard