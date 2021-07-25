import './ProjectCard.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Spacer from '../Spacer';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    fontSize: 13,
    marginBottom: 12,
  },
});

const ProjectCard = props => {
  const classes = useStyles();

  return (
    <Card className="root">
      <CardContent>
        <Typography color="textSecondary" align='center' variant="h6">
          Project
        </Typography>
        <Typography variant="h3" component="h2" align='center'>
          {props.title}
        </Typography>
        
        <Typography className="description" color="textSecondary" variant="h6" component="h2" align='center'>
          {props.description}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Spacer y={2}/>
        <Chip
          icon={<FaceIcon />}
          size='small'
          className='ownerName'
          label={props.owner}
        />
      </CardActions>
    </Card>
  )
}

export default ProjectCard