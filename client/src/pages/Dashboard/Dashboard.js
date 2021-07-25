import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectIssue from '../../components/ProjectIssue'
import CommunityIssueCard from '../../components/CommunityIssueCard'
import CommunityIssueModal from '../../components/CommunityIssueModal'
import ProjectCard from '../../components/ProjectCard'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import Spacer from '../../components/Spacer'
import UserAPI from '../../utils/UserAPI'
import IssueAPI from '../../utils/IssueAPI'
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

  const [communityissue, setCommunityIssue] = useState(false);
  const handleCommunityIssueOpen = _id => {
    let issues = issueState

    issues = issues.map(issue => {
      if (_id === issue._id) {
        issue.openCommunity = !issue.openCommunity
      }
      return issue
    })

    const project = communityissue.project
    project.issues = issues
    setCommunityIssue({ project })
  }

  const handleClose = () => {
    setOpen(false);
    setStatus(false)
    setCommunityIssue(false)
  };

  // Get Info


  const [projectState, setProjectState] = useState([])
  const [issueState, setIssueState] = useState([])
  const [projectIssueState, setProjectIssueState] = useState([])

  const [myid, setMyId] = useState('');


  useEffect(() => {
    IssueAPI.getAll()
      .then(({ data: issues }) => {
        issues.map(issue => ({
          ...issue,
          isOpen: false,
          openCommunity: false
        }))
        console.log(issues)
        setIssueState(issues)
      })
      .catch(err => console.log(err))
    
    UserAPI.me()
      .then(res => {
        console.log('this is res in Dashboard', res)
        const project = res.data
        project.issues = res.data.issues.map(issues => ({
          ...issues,
          isOpen: false,
          openCommunity: false
        }))
        setStatus({ project })
        setCommunityIssue({ project })
        setProjectIssueState(project.issues)
        setProjectState(res.data.projects)
        setMyId(res.data._id)
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
          {/* Project Issues */}
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

          {projectIssueState.filter(issue => issue.status === 'Open').slice(0, 8).map(issueData => (
            <>
              <Link onClick={() => handleIssueOpen(issueData._id)}>
                <ProjectIssue
                  key={issueData.id}
                  id={issueData._id}
                  title={issueData.title}
                  body={issueData.body}
                  priority={issueData.priority}
                  author={issueData.author.name}
                  project={issueData.pid}
                  // date={issueData._id.getTimestamp}
                />
              </Link>

              {/* See Project Page for how to call ProjectIssueModals properly */}
              <ProjectIssueModal 
                id={issueData._id}
                title={issueData.title}
                body={issueData.body}
                author={issueData.author.name}
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

        {/* Community Issues */}
        <Grid item xs={12} lg={3} md={3} sm={3}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>

          {issueState.filter(issue => issue.isPublic === true && issue.status !== 'Closed' && issue.author._id !== myid).slice(0, 8).map(issueData => (
            <>
              <Link onClick={() => handleCommunityIssueOpen(issueData._id)}>
                <CommunityIssueCard
                  key={issueData.id}
                  id={issueData._id}
                  title={issueData.title}
                  status={issueData.status}
                  date={issueData.createdAt}
                  author={issueData.author.name}
                  replycount={issueData.replies.length}
                />
              </Link>

              <CommunityIssueModal
                id={issueData._id}
                title={issueData.title}
                body={issueData.body}
                author={issueData.author.name}
                open={issueData.openCommunity}
                handleClose={() => handleCommunityIssueOpen(issueData._id)}
              />
            </>
          ))}

          <Spacer y={1} />
          

        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard