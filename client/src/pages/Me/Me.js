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

  const [myid, setMyId] = useState('');

  useEffect(() => {
    UserAPI.me()
      .then(res => {
        console.log('this is res', res.data)
        // my id is res.data._id
        const project = res.data
        project.issues = res.data.issues.map(issues => ({
          ...issues,
          isOpen: false
        }))
        setStatus({ project })
        setIssueState(res.data.issues)
        setMyId(res.data._id)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1 align="left">My Issues</h1>
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
                    project={issueData.pid}
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