import React, { useState, PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from "prop-types";
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import Spacer from '../Spacer'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


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
  right: {
    textAlign: 'right',
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
    marginRight: 10,
    color: 'red',
    fontWeight: '800'
  },
  highpriority: {
    fontSize: 12,
    textAlign: 'center',
    marginRight: 10,
    color: 'red',
    fontWeight: '800'
  },
  mediumpriority: {
    fontSize: 12,
    textAlign: 'center',
    marginRight: 10,
    color: '#f79d0c',
    fontWeight: '800'
  },
  lowpriority: {
    fontSize: 12,
    textAlign: 'center',
    marginRight: 10,
    color: '#14a7fc',
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
  },
  formControl: {
    marginBottom: 10,
    // minWidth: 220,
    width: '100%',
    fontSize: 12,
    textAlign: 'left',
  },
  selectEmpty: {
    marginTop: 20,
  },
});



const SetModal = props => {
  const classes = useStyles();

  // issueState
  const [issueState, setIssueState] = useState({
    title: '',
    body: '',
    status: 'Open',
    priority: '',
    issue: []
  })

  const handleInputChange = ({ target }) => {
    setIssueState({ ...issueState, [target.name]: target.value })
  }

  const handleAddIssue = event => {
    event.preventDefault();
    const issue = [...issueState.issue]
    issue.push({
      title: issueState.title,
      body: issueState.body,
      status: 'Open',
      priority: issueState.priority
    })
  }

  return (
    <Dialog maxWidth='sm' fullWidth='true' open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Issue</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid className={classes.issueleft} item xs={12}>
              <Typography className={classes.mb} variant="p" component="p">
                <form>
                  <p>
                    <TextField
                      id="title"
                      label="Title"
                      variant="outlined"
                      name='title'
                      fullWidth
                      value={issueState.title}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <TextField 
                      id="outlined-basic" 
                      label="Description" 
                      variant="outlined" 
                      name='body'
                      multiline
                      rows={6}
                      fullWidth
                      value={issueState.body}
                      onChange={handleInputChange}
                    />
                  </p>
                </form>
              </Typography>

            <div className={classes.right}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority"
                  defaultValue="Medium"
                  value={issueState.issue.priority}
                  onChange={handleInputChange}
                  fullWidth
                >
                  <MenuItem value="High">
                    <Icon className={classes.highpriority}>radio_button_unchecked</Icon> High
                  </MenuItem>
                  <MenuItem value="Medium">
                    <Icon className={classes.mediumpriority}>radio_button_unchecked</Icon> Medium</MenuItem>
                  <MenuItem value="Low">
                    <Icon className={classes.lowpriority}>radio_button_unchecked</Icon> Low</MenuItem>
                </Select>
              </FormControl>
            </div>
            </Grid>
          </Grid>
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddIssue} onClick={props.handleClose} color="primary" variant="contained">
          Add Issue
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SetModal