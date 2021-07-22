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
import ProjectIssueModal from '../../components/ProjectIssueModal'
import EditProjectModal from '../../components/EditProjectModal'
import AddIssue from '../../components/AddIssue'
import AddMember from '../../components/AddMember'
import ProjectAPI from '../../utils/ProjectAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
});

const Project = () => {
  const classes = useStyles();

  // Modals
  const [open, setOpen] = useState(false);
  const [openEditProject, setEditProjectOpen] = useState(false);
  const [openAddIssue, setAddIssueOpen] = useState(false);
  const [openAddMember, setAddMemberOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEditProjectOpen = () => {
    setEditProjectOpen(true);
  };
  
  const handleAddIssueOpen = () => {
    setAddIssueOpen(true);
  };

  const handleAddMemberOpen = () => {
    setAddMemberOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setAddIssueOpen(false);
    setAddMemberOpen(false);
    setEditProjectOpen(false)
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  // Get Project Info
  const [projectState, setProjectState] = useState([])

  useEffect(() => {
    // same thing as 
    // axios.get(`/api/projects/${id}`, {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   }
    // }),

    ProjectAPI.getById('how do I get an id here?')
      .then(data => {
        console.log(data)
        setProjectState(data.data.projects)
      })
      .catch(err => console.log(err))
  }, [])

  return(
    <>
      <Grid container>
        <Grid className={classes.columngrid} item xs={12} md={11}>
          <Typography className={classes.mb} variant="h3" component="h2">
              {projectState.title}
          </Typography>
        </Grid>
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
              handleClose={() => setEditProjectOpen(false)}
            />
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={12}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <span className={classes.title} color="textSecondary" gutterBottom>
                Project Lead <Chip
                  icon={<FaceIcon />}
                  clickable
                  label="Susan Doe"
                  variant="outlined"
                />
              </span>
            </Grid>
            <Grid itemxs={12} md={9}>
              <span className="members">Project Members <Chip
                icon={<FaceIcon />}
                clickable
                label="Matt Bitt"
                onDelete={handleDelete}
                color="default"
                variant="outlined"
              />
                <Chip
                  icon={<FaceIcon />}
                  clickable
                  label="Simon Cowell"
                  onDelete={handleDelete}
                  color="default"
                  variant="outlined"
                />

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
                />
              </span>
            </Grid>
          </Grid>
          
          
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Typography variant="p" component="p">
                  Project Apollo Titus aims to redesign its website. The museum contains the world's largest collection of gantt charts created by project managers from around the world. The Museum has begun digitizing and cataloging each piece and would like to display them on their website, along with other pertinent Museum information and content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad temporibus beatae quas pariatur, nemo nobis quis sit eaque neque qui, nihil eveniet praesentium sunt aspernatur eius omnis harum et placeat.
                </Typography>
                
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className={classes.right} item xs={12}>
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
        <Grid className={classes.columngrid} item xs={12} lg={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.mb} variant="h5" component="h5">
                      Open
                    </Typography>
                  </Grid>
                  
                </Grid>
              


              
                <Link onClick={handleClickOpen} i={1}>
                  <Issue />
                </Link>
                <ProjectIssueModal 
                  open={open}
                  handleClose={handleClose}
                />

                <Link onClick={handleClickOpen} i={2}>
                  <Issue />
                </Link>
                <ProjectIssueModal 
                  open={open}
                  handleClose={handleClose}
                />

                
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />

              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={12} lg={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={classes.mb} variant="h5" component="h5">
                    In Progress
                  </Typography>
                </Grid>
              </Grid>
              <Issue />
              <Issue />
              <Issue />
              <Issue />
              
            </CardContent>
          </Card>
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={12} lg={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.mb} variant="h5" component="h5">
                      Closed
                    </Typography>
                  </Grid>
                </Grid>
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />
                <Issue />

              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Project