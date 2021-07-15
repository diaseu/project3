import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Spacer from '../../components/Spacer'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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


const Issue = () => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Button variant="contained" color="primary" href="#contained-buttons">
            Open
          </Button>
          <Spacer x={2} />
          <Grid item xs>
            <Typography className={classes.pos} color="textSecondary">
              <Chip label="Study Blog App" size="small" component="a" href="#chip" clickable />
            </Typography>
            <Typography variant="body2" component="p">
              Error: Node Sass version 5.0.0 is incompatible with ^4.0.0
            </Typography>
            
            <Spacer y={2} />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              posted by <Chip
                icon={<FaceIcon />}
                label="Jake Doe"
                variant="outlined"
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      
    </Card>
  )
}

export default Issue