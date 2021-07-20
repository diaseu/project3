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
import Spacer from '../Spacer'


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


const EditProjectModal = props => {
  const classes = useStyles();

  const [issueState, setIssueState] = useState({
    title: '',
    body: '',
    priority: '',
    issue: []
  })

  const handleInputChange = ({ target }) => {
    setIssueState({ ...issueState, [target.name]: target.value })
  }

  return (
    <Dialog maxWidth='sm' fullWidth='true' open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid className={classes.issueleft} item xs={9}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                name='title'
                fullWidth
                value={issueState.title}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                id="body"
                label="Description"
                type="text"
                variant="outlined"
                value={issueState.body}
                onChange={handleInputChange}
                multiline
                rows={6}
                fullWidth
              />
              
            </Grid>
            <Grid className={classes.issueright} item xs={3}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project Lead
              </Typography>
              <Chip
                icon={<FaceIcon />}
                clickable
                label="Susan Doe"
                variant="outlined"
              />
              <Spacer y={2} />


              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Project Members
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
                icon={<FaceIcon />}
                clickable
                label="Simon Cowell"
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


          




            </Grid>
          </Grid>

        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.handleClose} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditProjectModal