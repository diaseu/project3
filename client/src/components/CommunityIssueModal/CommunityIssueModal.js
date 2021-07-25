import './CommunityIssueModal.css'
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
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import Spacer from '../../components/Spacer'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import ReplyAPI from '../../utils/ReplyAPI'
import IssueAPI from '../../utils/IssueAPI'
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

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
  hidden: {
    display: 'none'
  },
  comments: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
  }
});




const CommunityIssueModal = props => {
  const classes = useStyles();

  const [issueState, setIssueState] = useState({
    title: '',
    body: '',
    status: '',
    priority: '',
    issue: []
  })

  const [replies, setReplies] = useState([]);

  useEffect(() => {
    IssueAPI.getById(props.id)
      .then((res) => {
        setReplies(res.data.replies)
      })
      .catch(e => console.error(e))
  }
    // eslint-disable-next-line
    , [])


  // For the Status dropdown
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

  const [issueReply, setIssueReply] = useState("");

  function handleIssueReply(e) {
    setIssueReply(e.target.value)
  }

  function submitIssueReply(e) {
    ReplyAPI.create({
      text: issueReply,
      pid: props.id
    })
  }

  // priority
  const [issuePriority, setIssuePriority] = useState(props.priority);
  const handlePriorityChange = ({ target }) => {
    setIssuePriority({ ...issuePriority, [target.name]: target.value })
  }

  const [issueStatus, setIssueStatus] = useState(props.status);

  function handleIssuePriority(e) {
    setIssuePriority(e.target.value)
  }

  const handleUpdateIssue = () => {
    IssueAPI.update(props.id, {
      status: 'Closed',
      priority: 'Low'
    })
      .then(res => {
        console.log('issue allegedly updated - ProjectIssueModal', res)
      })
      .catch(err => console.log('Problem in the ProjectIssueModal', err))
    // window.location.reload()
  }

  useEffect(() => {
    IssueAPI.getById(props.id)
      .then((res) => {
        setReplies(res.data.replies)
      })
      .catch(e => console.error(e))
  }
    // eslint-disable-next-line
    , [])


  return (
    <Dialog maxWidth='lg' fullWidth open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" className='dialogtitle'>
        {props.title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid className={classes.issueleft} item xs={12} lg={9}>

              <Typography className={classes.mb}>
                {props.body}
              </Typography>

              <TextField
                margin="dense"
                id="comment"
                label="Comment"
                type="comment"
                fullWidth
                onChange={handleIssueReply}
              />
              <Button color="primary" variant="contained" onClick={submitIssueReply}>Submit</Button>
              <Spacer y={4} />
              <Paper style={{ maxHeight: 200, overflow: 'auto', boxShadow: 'none' }}>
                <List >
                  {
                    replies && replies.map((index, key) => {
                      return (
                        <div key={key}>
                          <Card className={classes.comments}>
                            {index.author.name}: {index.text}
                          </Card>
                        </div>
                      )
                    })
                  }
                </List>
              </Paper>
            </Grid>
            <Grid className={classes.issueright} item xs={12} lg={3}>
              <Spacer y={1} />
              <Typography className={classes.title} color="textSecondary">
                Posted by
              </Typography>
              <Chip
                icon={<FaceIcon />}
                clickable
                label={props.author}
                variant="outlined"
              />
              <Spacer y={2} />


              {/* <Typography className={classes.title} color="textSecondary">
                Mark as Solved
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.ask}
                endIcon={<Icon>expand_more</Icon>}
              >
                Mark as Solved
              </Button> */}
            </Grid>
          </Grid>

        </DialogContentText>

      </DialogContent>
      <DialogActions>
        {/* <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUpdateIssue} color="primary">
          Save
        </Button> */}
      </DialogActions>
    </Dialog>
  )
}

export default CommunityIssueModal