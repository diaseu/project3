import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
    marginBottom: 12,
  },
});

const PubIssue = () => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
    
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          How to fix missing dependency warning when using useEffect React Hook?
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          asked by <Chip
            icon={<FaceIcon />}
            label="Joe Doe"
          />
          <Badge badgeContent={4} color="secondary">
            <Button size="small" variant="contained" color="primary" href="#contained-buttons">
            Answer
          </Button>
          </Badge>
        </Typography>
      </CardContent>
      
    </Card>
  )
}

export default PubIssue