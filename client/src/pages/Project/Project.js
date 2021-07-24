import './Project.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import Issue from '../../components/Issue'
import EditProjectModal from '../../components/EditProjectModal'
import AddMember from '../../components/AddMember'
import AddIssue from '../../components/AddIssue'
import ProjectIssueModal from '../../components/ProjectIssueModal'
import ProjectAPI from '../../utils/ProjectAPI'
import { DragDropContext } from 'react-beautiful-dnd';
import {
  Link,
  useParams
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  mb: {
    marginBottom: 20,
  },
  issueleft: {
    paddingRight: 20,
  },
  issueright: {
    paddingLeft: 20,
    borderLeft: '1px solid #ccc',
  },
  members: {
    // paddingLeft: 20,
    borderLeft: '1px solid #fff',
  },
  issuerightchip: {
    marginBottom: 20,
    borderLeft: '1px solid #ccc',
  },
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  column: {
    marginRight: 20,
    marginBottom: 20,
  },
  right: {
    textAlign: 'right',
    paddingRight: 20,
    marginBottom: 20,
  },
  columntest: {
    backgroundColor: '#ddd'
  }, 
  allmembers: {
    marginBottom: 12,
  }
});

const Project = () => {
  const classes = useStyles();

  // ====================== Modals ======================
  // Modal: Open an issue 
  const [openIssue, setIssueOpen] = useState(false);
  const handleIssueOpen = _id => {
    let issues = status.project.issues
    issues = issues.map(issue => {
      if (_id === issue._id) {
        issue.isOpen = !issue.isOpen
      }
      return issue
    })
    const project = status.project
    project.issues = issues
    setStatus({ project })
  }

  //  Modal: Edit Project
  const [openEditProject, setEditProjectOpen] = useState(false);
  const handleEditProjectOpen = () => {
    setEditProjectOpen(true);
  };

  // Modal: Add Issue
  const [openAddIssue, setAddIssueOpen] = useState(false);
  const handleAddIssueOpen = () => {
    setAddIssueOpen(true);
  };

  // Modal: Add Member
  const [openAddMember, setAddMemberOpen] = useState(false);
  const handleAddMemberOpen = () => {
    setAddMemberOpen(true);
  };
  
  // Modal: Close all Modals
  const handleClose = () => {
    setIssueOpen(false);
    setAddIssueOpen(false);
    setAddMemberOpen(false);
    setEditProjectOpen(false)
    
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  // Get Project Info
  const [status, setStatus] = useState({ isLoading: true });
  const params = useParams();
  const { isLoading, project, err } = status;

  useEffect(() => {
    ProjectAPI.getById(params.projectId)
      .then(res => {
        const project = res.data
        project.issues = res.data.issues.map(issue => ({
          ...issue,
          isOpen: false
        }))
        setStatus({ project })
        // console.log('this is the project data', project)
      })
      .catch(err => setStatus({ err: err }))
  // eslint-disable-next-line
    }, [])

  return  isLoading ? <span>loading...</span> : err ? <h1>{err.message}</h1> : (
    <>
      <Grid container>
        {/* Project Title */}
        <Grid className={classes.columngrid} item xs={12} md={11}>
          <Typography className={classes.mb} variant="h3" component="h2">
              {project.title}
          </Typography>
        </Grid>
        {/* Edit Project Button */}
        <Grid className={classes.columngrid} item xs={1}>
          <div className={classes.editbtn}>
            <Link onClick={handleEditProjectOpen}>
              <Chip
              clickable
              label="Edit Project"
              variant="outlined"
              size='small'
              onClickEditProject={() => setEditProjectOpen(true)}
            />
            </Link>
            <EditProjectModal 
              open={openEditProject} 
              title={project.title}
              description={project.description}
              owner={project.owner.name}
              members={project.members}
              handleClose={() => setEditProjectOpen(false)}
            />
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={12}>
          <Grid container className={classes.allmembers}>
            {/* Project Owner Chip */}
            <Grid item xs={12} md={3}>
              <span className={classes.title} color="textSecondary" gutterBottom>
                Project Lead <Chip
                  icon={<FaceIcon />}
                  label={project.owner.name}
                  variant="outlined"
                />
              </span>
            </Grid>
            {/* Project Members Chips */}
            <Grid itemxs={12} md={9}>
              <span className="members">Project Members 
                {project.members.map((members) => (
                    <Chip
                      icon={<FaceIcon />}
                      clickable
                      label={members.name}
                      onDelete={handleDelete}
                      color="default"
                      variant="outlined"
                    />
                ))}
                {/* Add Member Chip */}
                <Link onClick={handleAddMemberOpen}>
                  <Chip
                    icon={<AddIcon />}
                    clickable
                    className={classes.addbtn}
                    label="Add Member"
                    variant="outlined"
                    onClickAddMember={() => setAddMemberOpen(true)}
                  />
                </Link>
                <AddMember
                  open={openAddMember}
                  handleClose={() => setAddMemberOpen(false)}
                  projectId={params.projectId}
                />
              </span>
            </Grid>
          </Grid>
          
          {/* Project Description */}
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Typography variant="p" component="p">
                 {project.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

    <DragDropContext>
      <Grid container>
        <Grid className={classes.right} item xs={12}>
          {/* Add Issue Chip */}
          <Link onClick={handleAddIssueOpen}>
            <Chip
              icon={<AddIcon />}
              clickable
              className={classes.addbtn}
              label="Add Issue"
              // variant="outlined"
              color="primary"
              onClickAddIssue={() => setAddIssueOpen(true)}
            />
          </Link>
          <AddIssue
            open={openAddIssue}
            handleClose={() => setAddIssueOpen(false)}
          />
        </Grid>

        {/* Open Issues column */}
        {['Open', 'In Progress', 'Closed'].map(column => (
          <Grid className={classes.columngrid} item xs={12} lg={4}>
            <div className={classes.column}>
              <Card className={classes.columntest}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography className={classes.mb} variant="h5" component="h5">
                        {column}
                      </Typography>
                    </Grid>
                  </Grid>

                  {project.issues.filter(issue => issue.status === column).map((issueData) => (
                    <>
                      <Link onClick={() => handleIssueOpen(issueData._id)}>
                        <Issue
                          title={issueData.title}
                        />
                      </Link>
                      <ProjectIssueModal
                        key={issueData._id}
                        open={issueData.isOpen}
                        title={issueData.title}
                        body={issueData.body}
                        status={issueData.status}
                        priority={issueData.priority}
                        author={issueData.author.name}
                        handleClose={() => handleIssueOpen(issueData._id)}
                      />
                    </>
                  ))}


                  {/* <Link onClick={handleIssueOpen} i={1}>
                  <Issue />
                </Link>
                <ProjectIssueModal 
                  open={openIssue}
                  handleClose={handleClose}
                /> */}

                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}

      </Grid>
    </DragDropContext>
    </>
  )
}

export default Project