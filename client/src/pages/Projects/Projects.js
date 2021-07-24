import './Projects.css'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../../components/ProjectCard'
import MoreCard from '../../components/MoreCard'
import UserAPI from '../../utils/UserAPI'
import NewProjectModal from '../../components/NewProjectModal'
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
  title: {
    fontSize: 14,
  },
  cct: {
    marginBottom: 40,
  },
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
});

const Projects = () => {
  const classes = useStyles();

  const [openNewProjectModal, setNewProjectModalOpen] = useState(false);

  const [projectState, setProjectState] = useState([])

  const handleNewProjectModalOpen = () => {
    setNewProjectModalOpen(true);
  };

  useEffect(() => {
    UserAPI.me()
      .then(data => {
        setProjectState(data.data.projects)
        // console.log('this is the projects page', data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    <h1>View My Projects</h1>
      <Grid container>
        <Grid item xs={12} lg={12}>
        </Grid>
        {projectState.map((projectData) => (
          <Grid className={classes.projectcard} item xs={12} sm={4} lg={2}>
            {/* <Link to={`/projects/${id}`}> */}
            <Link to={`/project/${projectData._id}`}>
            <ProjectCard 
              title={projectData.title}
              description={projectData.description}
              owner={projectData.owner.name}
            />
          </Link>
          </Grid>
        ))}
        
        <Grid className={classes.projectcard} item xs={12} sm={4} lg={2}>
          <Link onClick={handleNewProjectModalOpen}>
            <MoreCard
              clickable
              onClickAddIssue={() => setNewProjectModalOpen(true)}
            />
          </Link>
          <NewProjectModal
            open={openNewProjectModal}
            handleClose={() => setNewProjectModalOpen(false)}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Projects