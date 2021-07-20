import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import Dia from '../../images/Snapchat-2077905771_1.jpg'
import Joon from '../../images/Joon2.jpeg'
import Mike from '../../images/IMG_0003.PNG'
import Chip from '@material-ui/core/Chip';
import ContactModal from '../../components/ContactModal'
import ContactForm from '../../components/ContactForm'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  brand: {
    textTransform: 'uppercase',
    fontFamily: 'Days One',
    fontSize: '64px'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    maxWidth: 275,
  },
  media: {
    height: 140,
  },
}));



export default function About() {
  const classes = useStyles();

  const [openEditProject, setEditProjectOpen] = useState(false);
  const handleEditProjectOpen = () => {
    setEditProjectOpen(true);
  };
  const handleClose = () => {
    setEditProjectOpen(false)
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>


          

        



          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About <span className={classes.brand}>ZAP</span>
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
              Zap is an app created to combine the project management and bug tracking aspects of app development. You can ask for help both within your group or ask the community. Our goal is to streamline the process of app development by giving you one place to manage projects and ask any and all questions related to development. Let's get Zapping!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                 
                    
                  
                    <ContactModal
                      open={openEditProject}
                      handleClose={() => setEditProjectOpen(false)}
                      
                    />
                 
                </Grid>
                <Grid item>
               
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
          {/* End hero unit */}
        <Box m={3.2} />

      

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.root}>
              <CardActionArea>

                <CardContent>
                  <img src={Dia} width="240" height="240" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Diana Seung
          </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                    
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://www.linkedin.com/in/dianaseung/" target="_blank">
                   LinkedIn
  </Link>
        </Button>
                <Button size="small" color="primary">
                  <Link href="https://github.com/diaseu" >
                    GitHub
  </Link>
                  
        </Button>

              </CardActions>
            </Card>

            <Box m={0.5} />
          
            <br/>

            <Card className={classes.root}>
              <CardActionArea>



                <CardContent>
                  <img src={Joon} width="240" height="240" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Sle Ahn
          </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                   
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://www.linkedin.com/in/sle-ahn" target="_blank">
                    LinkedIn
  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href="https://github.com/silentsonata92" target="_blank" >
                    GitHub
  </Link>

                </Button>

              </CardActions>
            </Card>

            <Box m={0.5} />
            
            <br/>

            <Card className={classes.root}>
              <CardActionArea>



                <CardContent>
                  <img src={'https://i.imgur.com/AlYe5XY.jpeg'} width="255" height="240" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Jake Eckfeldt
          </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                    
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               
                <Button size="small" color="primary">
                  <Link href="https://github.com/JEckfeldt" target="_blank" >
                    GitHub
  </Link>

                </Button>

              </CardActions>
            </Card>


            <Box m={.5}  />
            
            <br/>
            

            <Card className={classes.root}>
              <CardActionArea>



                <CardContent>
                  <img src={Mike} width="255" height="240" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Michael Scharf
          </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                   
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://www.linkedin.com/in/michael-scharf-398899111" target="_blank">
                    LinkedIn
  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href="https://github.com/2017mike" target="_blank">
                    GitHub
  </Link>

                </Button>

              </CardActions>
            </Card>
            






          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}