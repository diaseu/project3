import './Project.css';
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import Issue from '../../components/Issue'
import CommunityIssue from '../../components/CommunityIssue'
import ProjectIssue from '../../components/ProjectIssue'
import ProjectCard from '../../components/ProjectCard'
import Spacer from '../../components/Spacer'
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
  },
  columntest: {
    backgroundColor: '#ddd'
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
    width: '90%'
  },
  addbtn: {
    textAlign: 'center',
    margin: 'auto'
  }, 
  editbtn: {
    textAlign: 'right',
  }
});

const myHTML = `
function MyConstructor(data, transport) {
                              this.data = data;
                            transport.on('data', function () {
                              alert(this.data);
    });
}

                            // Mock transport object
                            var transport = {
                              on: function(event, callback) {
                              setTimeout(callback, 1000);
    }
};

                            // called as
                            var obj = new MyConstructor('foo', transport);`;
const myHTML2 = `
function MyConstructor(data, transport) {
                              this.data = data;
                            transport.on('data', this.alert);
}

                            MyConstructor.prototype.alert = function() {
                              alert(this.name);
};`;


const Project = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return(
    <>
      <Grid container>
        <Grid className={classes.columngrid} item xs={11}>
          <Typography className={classes.mb} variant="h3" component="h2">
                Project: Gantt Museum
          </Typography>
        </Grid>
        <Grid className={classes.columngrid} item xs={1}>
          <div className={classes.editbtn}>
            <Chip
              clickable
              label="Edit Project"
              variant="outlined"
              size='small'
            />
          </div>
        </Grid>
        <Grid className={classes.columngrid} item xs={12}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                
                <Typography variant="p" component="p">
                  The Gantt Museum (Baltimore, MD) aims to redesign its website. The museum contains the world's largest collection of gantt charts created by project managers from around the world. The Museum has begun digitizing and cataloging each piece and would like to display them on their website, along with other pertinent Museum information and content.
                </Typography>
                
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.mb} variant="h5" component="h5">
                      Open
                    </Typography>
                  </Grid>
                  <Grid className={classes.right} item xs={6}>
                    <Chip
                      icon={<AddIcon />}
                      clickable
                      className={classes.addbtn}
                      label="Add Issue"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                
              
                <Link onClick={handleClickOpen}>
                  <Issue />
                </Link>

                <Dialog maxWidth='lg' fullWidth='true' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Why do I get “Reducer […] returned undefined during initialization” despite providing initialState to createStore()?</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      <Grid container>
                        <Grid className={classes.issueleft} item xs={9}>
                          <Typography className={classes.mb} variant="p" component="p">
                            I have a constructor function which registers an event handler:
                            <div className={classes.codebox}>{myHTML}</div>
                            
                            However, I'm not able to access the data property of the created object inside the callback. It looks like this does not refer to the object that was created but to an other one.

                            I also tried to use an object method instead of an anonymous function:
                            <div className={classes.codebox}>{myHTML2}</div>

                            
                            but it exhibits the same problems.

                            How can I access the correct object?
                          </Typography>

                          <TextField
                            margin="dense"
                            id="comment"
                            label="Comment"
                            type="comment"
                            fullWidth
                          />
                          <Button color="primary" variant="contained">Submit</Button>
                        </Grid>
                        <Grid className={classes.issueright} item xs={3}>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Posted by
                          </Typography>
                          <Chip
                            icon={<FaceIcon />}
                            clickable
                            label="Susan Doe"
                            variant="outlined"
                          />
                          <Spacer y={2} />


                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Assigned
                          </Typography>
                          <Chip
                            icon={<FaceIcon />}
                            clickable
                            label="Matt Bitt"
                            onDelete={handleDelete}
                            color="default"
                            variant="outlined"
                          />
                          <Chip
                            icon={<AddIcon />}
                            label="Add"
                            clickable
                            variant="outlined"
                          />
                          <Spacer y={2} />


                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Status
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Icon>expand_more</Icon>}
                          >
                            Open
                          </Button>
                          <Spacer y={2} />


                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Priority
                          </Typography>
                          <Icon className={classes.priority}>radio_button_unchecked</Icon>
                          <span className={classes.priority}>High Priority</span>
                          <Spacer y={4} />


                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Ask the Community
                          </Typography>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.ask}
                            endIcon={<Icon>expand_more</Icon>}
                          >
                            Ask the Community
                          </Button>
                        </Grid>
                      </Grid>
                      
                    </DialogContentText>
                    
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
                
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
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={classes.mb} variant="h5" component="h5">
                    In Progress
                  </Typography>
                </Grid>
                <Grid className={classes.right} item xs={6}>
                  <Chip
                    icon={<AddIcon />}
                    clickable
                    className={classes.addbtn}
                    label="Add Issue"
                    variant="outlined"
                  />
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
        <Grid className={classes.columngrid} item xs={4}>
          <div className={classes.column}>
            <Card className={classes.columntest}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.mb} variant="h5" component="h5">
                      Closed
                    </Typography>
                  </Grid>
                  <Grid className={classes.right} item xs={6}>
                    <Chip
                      icon={<AddIcon />}
                      clickable
                      className={classes.addbtn}
                      label="Add Issue"
                      variant="outlined"
                    />
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