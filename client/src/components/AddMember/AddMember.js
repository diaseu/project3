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
import SearchIcon from '@material-ui/icons/Search';
import Spacer from '../Spacer'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Autocomplete from '@material-ui/lab/Autocomplete';


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
      priority: issueState.priority
    })
  }

  return (
    <Dialog maxWidth='sm' fullWidth='true' open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Member to Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid className={classes.issueleft} item xs={12}>
              
              <Autocomplete
                freeSolo
                id="add-member"
                disableClearable
                options={sampleusers.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Member to Add"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />

            </Grid>
          </Grid>
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddIssue} onClick={props.handleClose} color="primary" variant="contained">
          Add Member
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const sampleusers = [
  { name: 'Adam Doe', email: 'adamdoe@gmail.com' },
  { name: 'Andy Doe', email: 'andydoe@gmail.com' },
  { name: 'Alan Doe', email: 'alandoe@gmail.com' },
  { name: 'Amber Doe', email: 'amberdoe@gmail.com' },
  { name: 'Aspen Doe', email: 'aspendoe@gmail.com' },
  { name: "Anthony Doe", email: 'anthonydoe@gmail.com' },
  { name: 'Akon Doe', email: 'akondoe@gmail.com' },
];

export default SetModal