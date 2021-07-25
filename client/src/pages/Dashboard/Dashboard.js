import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import CommunityIssueCard from '../../components/CommunityIssueCard'
import ProjectCard from '../../components/ProjectCard'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import Spacer from '../../components/Spacer'
import UserAPI from '../../utils/UserAPI'
// eslint-disable-next-line
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  right: {
    textAlign: 'right',
  }
})

const Dashboard = () => {
  const classes = useStyles();

  // ===================== Modals =====================
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  // Open Modal Individually
  // status = Modal status if open or closed
  const [status, setStatus] = useState(false);
  const [openIssue, setIssueOpen] = useState(false);

  const handleIssueOpen = _id => {
    // console.log('this is plain status', status)
    let issues = status.project.issues

    // console.log('this is issues set to status', issues)
    issues = issues.map(issue => {
      if (_id === issue._id) {
        issue.isOpen = !issue.isOpen
      }
      return issue
    })
    
    // console.log('what happens when i click handleIssueOpen', { status })
    const project = status.project
    project.issues = issues
    setStatus({ project })
  }

  const handleClose = () => {
    setOpen(false);
    setStatus(false)
  };

  // Get Info


  const [projectState, setProjectState] = useState([])
  const [issueState, setIssueState] = useState([])

  // console.log('issueState', issueState)


  useEffect(() => {
    UserAPI.me()
      .then(res => {
        const project = res.data
        project.issues = res.data.issues.map(issues => ({
          ...issues,
          isOpen: false
        }))
        // console.log('this is project.issues in Dashboard', project.issues)
        setStatus({ project })
        // let issues = Object.values(status.issues)
        // console.log('this is res.data in Dashboard', res.data)
        // console.log('this is res.data.issues in Dashboard', res.data.issues)
        setProjectState(res.data.projects)
        setIssueState(res.data.issues)
        console.log(res.data.projects, 'this is projectstate')
        // console.log('projectState in Dashboard', projectState)
        // console.log('issueState in Dashboard', issueState)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
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

        {projectState.slice(0, 5).map((projectData) => (
          <Grid className={classes.projectcard} item xs={12} sm={4} lg={2}>
            {/* <Link to={`/projects/${id}`}> */}
            <Link to={`/project/${projectData._id}`}>
              <ProjectCard
                key={projectData._id}
                title={projectData.title}
                description={projectData.description}
                owner={projectData.owner.name}
              />
            </Link>
          </Grid>
        ))}
        
      </Grid>
      <Spacer y={4} />
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={8} md={6} sm={6}>
              <Typography variant="h6" component="h2">
                Project Issues
              </Typography>
            </Grid>
            <Grid item className={classes.right} xs={12} lg={4} md={6} sm={6}>
              <Button size="small" variant="contained" href="#contained-buttons">
                My Issues
              </Button>
              <Button size="small" variant="contained" href="#contained-buttons">
                Recently Updated
              </Button>
            </Grid>
          </Grid>
          <Spacer y={1} />

          {issueState.filter(issue => issue.status === 'Open').slice(0, 10).map((issueData) => (
            <>
              <Link onClick={() => handleIssueOpen(issueData._id)}>
                <ProjectIssue
                  key={issueData.id}
                  id={issueData._id}
                  title={issueData.title}
                  priority={issueData.priority}
                  author={issueData.author.name}
                />
              </Link>

              {/* See Project Page for how to call ProjectIssueModals properly */}
              <ProjectIssueModal 
                id={issueData._id}
                title={issueData.title}
                body={issueData.body}
                owner={issueData.author.name}
                status={issueData.status}
                // authorusername={issueData.author.username}
                priority={issueData.priority}
                open={issueData.isOpen}
                handleClose={() => handleIssueOpen(issueData._id)}
              />
            </>
          ))}
          
        </Grid>
        <Spacer x={2} />
        <Grid item xs={12} lg={3}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
          <CommunityIssueCard />
          <Spacer y={1} />
          

        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard