import './Me.css';
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
import {
  Link
} from "react-router-dom";


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
        // console.log('projectState in Dashboard', projectState)
        // console.log('issueState in Dashboard', issueState)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])




  // const [status, setStatus] = useState(false);
  const [myid, setMyId] = useState('');
  // const [issueState, setIssueState] = useState([])

  // const handleIssueOpen = _id => {
  //   // console.log('this is plain status', status)
  //   let issues = status.project.issues

  //   // console.log('this is issues set to status', issues)
  //   issues = issues.map(issue => {
  //     if (_id === issue._id) {
  //       issue.isOpen = !issue.isOpen
  //     }
  //     return issue
  //   })

  //   // console.log('what happens when i click handleIssueOpen', { status })
  //   const project = status.project
  //   project.issues = issues
  //   setStatus({ project })
  // }

  useEffect(() => {
    UserAPI.me()
      .then(res => {
        // console.log('this is res', res.data)
        // my id is res.data._id
        const project = res.data
        project.issues = res.data.issues.map(issues => ({
          ...issues,
          isOpen: false
        }))
        setStatus({ project })
        setIssueState(res.data.issues)
        setMyId(res.data._id)
        // console.log('issueState', issueState)
        // console.log('this should be my id ->', myid)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
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
            {issueState.filter(issue => issue.author._id === myid).map((issueData) => (
              <>
                <Link onClick={() => handleIssueOpen(issueData._id)}>
                  <ProjectIssue
                    key={issueData.id}
                    id={issueData._id}
                    title={issueData.title}
                    priority={issueData.priority}
                    author={issueData.author.name}
                    project={issueData.pid.title}
                    body={issueData.body}
                  />
                </Link>

                {/* See Project Page for how to call ProjectIssueModals properly */}
                <ProjectIssueModal
                  id={issueData._id}
                  title={issueData.title}
                  body={issueData.body}
                  author={issueData.author.name}
                  status={issueData.status}
                  priority={issueData.priority}
                  open={issueData.isOpen}
                  handleClose={() => handleIssueOpen(issueData._id)}
                />
              </>
            ))}
          </Grid>

        </Grid>     
      </div>
    </>
  )
}

export default Me