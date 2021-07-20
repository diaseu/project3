import './ProjectIssueModal.css'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import Spacer from '../../components/Spacer'
import MenuItem from '@material-ui/core/MenuItem';
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
    margin: 10,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 20,
  },
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


const issueexamples = [
  {
    title: 'Why do I get “Reducer […] returned undefined during initialization” despite providing initialState to createStore() ?',
    body: "I have a constructor function which registers an event handler: However, I'm not able to access the data property of the created object inside the callback. It looks like this does not refer to the object that was created but to an other one. I also tried to use an object method instead of an anonymous function: but it exhibits the same problems. How can I access the correct object ?",
    status: "Open",
    priority: "High",
    author: "John Doe",
    replies: []
  },
  {
    title: 'Home button missing from nav',
    body: "There is no home button on the navigation bar",
    status: "Open",
    priority: "Low",
    author: "Susan Doe",
    replies: []
  }
]

const ProjectCard = props => {
  const classes = useStyles();

  const [issueState, setIssueState] = useState({
    title: '',
    body: '',
    status: '',
    priority: '',
    issue: []
  })

  const [openStatus, setStatusOpen] = useState(false);

  const handleInputChange = ({ target }) => {
    setIssueState({ ...issueState, [target.name]: target.value })
  }

  const handleStatusOpen = () => {
    setStatusOpen(true);
  };

  const handleClose = () => {
    setStatusOpen(false);
  };

  return (
    <Dialog maxWidth='lg' fullWidth='true' open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" className='dialogtitle'>{issueexamples[0].title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid className={classes.issueleft} item xs={9}>
              <Typography className={classes.mb} variant="p" component="p">
                {issueexamples[0].body}
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
                label={issueexamples[0].author}
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
                onDelete={props.handleDelete}
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
                onClick={handleInputChange}
                endIcon={<Icon>expand_more</Icon>}
              >
                {issueexamples[0].status}
              </Button>

              <FormControl className={classes.formControl}>
                <Select
                  id="status"
                  defaultValue="Open"
                  value={issueState.issue.status}
                  onChange={handleInputChange}
                  fullWidth
                  open={openStatus}
                  onClose={handleClose}
                  onOpen={handleStatusOpen}
                  value={issueState.issue.status}
                  onChange={handleInputChange}
                >
                  <MenuItem value="Open">
                    <Icon className={classes.openstatus}>radio_button_unchecked</Icon> Open
                  </MenuItem>
                  <MenuItem value="In Progress">
                    <Icon className={classes.ipstatus}>radio_button_unchecked</Icon> In Progress</MenuItem>
                  <MenuItem value="Closed">
                    <Icon className={classes.closedstatus}>radio_button_unchecked</Icon> Closed</MenuItem>
                </Select>
              </FormControl>
              <Spacer y={2} />


              <Typography color="textSecondary" gutterBottom>
                Priority
              </Typography>

              <FormControl className={classes.formControl}>
                <Select
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
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ProjectCard