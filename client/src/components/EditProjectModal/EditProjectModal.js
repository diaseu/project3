import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FaceIcon from '@material-ui/icons/Face';
import Spacer from '../Spacer'
import ProjectAPI from '../../utils/ProjectAPI'
import {
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minWidth: 175,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 200,
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
  issuerightchip: {
    marginBottom: 20,
    borderLeft: '1px solid #ccc',
  },
  projectcard: {
    marginRight: 20,
    marginBottom: 20,
  },
  codebox: {
    border: '1px solid #ddd',
    borderLeft: '3px solid blue',
    padding: 20,
    fontFamily: 'monospace',
    backgroundColor: '#eee'
  },
  priority: {
    fontSize: 12,
    textAlign: 'center',
    marginRight: 10,
    color: 'red',
    fontWeight: '800'
  },
  ask: {
    backgroundColor: 'red',
    width: '90%',
    marginLeft: 12,
  },
  addbtn: {
    textAlign: 'center',
    margin: 'auto'
  },
  editbtn: {
    textAlign: 'right',
  },
  right: {
    textAlign: 'right',
  }
});





const EditProjectModal = props => {
  const classes = useStyles();

  
  const [status, setStatus] = useState({ isLoading: true });
  const params = useParams();
  // console.log(params, 'these are params');
  
  const [projectTitle, setProjectTitle] = useState(props.title);
  const [projectDescription, setProjectDescription] = useState(props.description)

  useEffect(() => {
    ProjectAPI.getById(`${params.projectId}`)
      .then(res => {
        // console.log(res, 'useEffect response')
        // setProjectState(data.data.projects)
        setStatus({ project: res.data })
      })
      .catch(err => setStatus({ err: err }))
    // eslint-disable-next-line
  }, [])

  function handleProjectTitle(e) {
    // console.log(e.target.value)
    setProjectTitle(e.target.value)
  }

  function handleProjectDescription(e) {
    // console.log(e.target.value)
    setProjectDescription(e.target.value)
  }


  function handleEditProject(e) {
    // e.preventDefault();
    ProjectAPI.update({
      title: projectTitle,
      description: projectDescription
    },
      params.projectId
    )
    // console.log('project updated :)')
    // console.log(projectTitle)
    // console.log(projectDescription)
    window.location.reload()
  }

  function handleDeleteProject(e) {
    e.preventDefault()
    let doomedProject = params.projectId
    // console.log(doomedProject, 'this project is going to be deleted')
    ProjectAPI.delete(params.projectId)
    }

  return (
    <Dialog maxWidth='sm' fullWidth open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid className={classes.issueleft} item xs={12} lg={9}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                name='title'
                fullWidth
                defaultValue={props.title}
                onChange={handleProjectTitle}
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                type="text"
                variant="outlined"
                defaultValue={props.description}
                onChange={handleProjectDescription}
                multiline
                rows={6}
                fullWidth
              />
              
              <Spacer y={2} />
            </Grid>
            <Grid className={classes.issueright} item xs={12} lg={3}>
              <Typography className={classes.title} color="textSecondary">
                Project Lead
              </Typography>
              <Chip
                icon={<FaceIcon />}
                label={props.owner}
                variant="outlined"
              />
              <Spacer y={2} />


              <Typography className={classes.title} color="textSecondary">
                Project Members
              </Typography>
              {props.members.map((members) => (
                <Chip
                  key={members.id}
                  icon={<FaceIcon />}
                  label={members.name}
                  color="default"
                  variant="outlined"
                />
              ))}
              <Spacer y={2} />

            </Grid>
          </Grid>

        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.ask}
              onClick={handleDeleteProject}
            >
              Delete Project
            </Button>
          </Grid>
          <Grid item xs={12} md={8} className={classes.right}>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEditProject}  color="primary" variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
        
      </DialogActions>
    </Dialog>
  )
}

export default EditProjectModal