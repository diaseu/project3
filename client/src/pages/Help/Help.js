import './Help.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import ProjectIssue from '../../components/ProjectIssue'
import Spacer from '../../components/Spacer';
import CommunityIssueCard from '../../components/CommunityIssueCard'
import CommunityIssueModal from '../../components/CommunityIssueModal'
import ProjectCard from '../../components/ProjectCard'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import UserAPI from '../../utils/UserAPI'
import IssueAPI from '../../utils/IssueAPI'
import {
  Link
} from "react-router-dom";

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
    
  },
  right: {
    textAlign: 'right',
  }
});

const Help = () => {
  const classes = useStyles();

  const [issueState, setIssueState] = useState([])
  

  const [communityissue, setCommunityIssue] = useState(false);
  const handleCommunityIssueOpen = _id => {
    // console.log('this is plain communityissue', communityissue)
    let issues = communityissue.project.issues

    // console.log('this is issues set to communityissue', issues)
    issues = issues.map(issue => {
      if (_id === issue._id) {
        issue.openCommunity = !issue.openCommunity
      }
      return issue
    })

    // console.log('what happens when i click handleIssueOpen', { communityissue })
    const project = communityissue.project
    project.issues = issues
    setCommunityIssue({ project })
  }

  const handleClose = () => {
    setCommunityIssue(false)
  };

  const [myid, setMyId] = useState('');

  useEffect(() => {
    IssueAPI.getAll()
      .then( ({ data: issues}) => {
        setIssueState(issues)
        console.log(issueState)
      })
      .catch(err => console.log(err ))

    UserAPI.me()
      .then(res => {
        console.log('this is res in Dashboard', res)
        const project = res.data
        project.issues = res.data.issues.map(issues => ({
          ...issues,
          isOpen: false,
          openCommunity: false
        }))
        setCommunityIssue({ project })
        // setIssueState(res.data.issues)
        setMyId(res.data._id)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h1>Community Issues </h1>
      <Grid container>
        <Grid item xs={12} md={6} lg={6} sm={6}>
          <Typography variant="h6" component="h2">
            Help Answer Others' Issues
          </Typography>
        </Grid>
        <Grid item className={classes.right} xs={12} md={6} lg={6} sm={6}>
          <Button size="small" variant="contained" href="#sort-project">
            Show Open Only
          </Button>
          {/* <Button size="small" variant="contained" href="#sort-project">
            Sort by Recent
          </Button> */}
        </Grid>
      </Grid>
      <Spacer y={1} />
      <div>
        <Grid container>
          <Grid item xs={12} lg={12} md={12} sm={12}>

            {issueState.filter(issue => issue.isPublic === true && issue.author._id !== myid).slice(0, 8).map((issueData) => (
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
      </div>
    </>
  )
}

export default Help