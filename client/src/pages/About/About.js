import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dia from '../../images/Snapchat-2077905771_1.jpg'
import Joon from '../../images/Joon2.jpeg'
import Mike from '../../images/IMG_0003.PNG'
import ContactForm from '../../components/ContactForm'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
  },
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
  media: {
    height: 145,
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function About() {
  const classes = useStyles();

  // Modal: Open Contact Form
  const [openContact, setContactOpen] = useState(false);
  
  const handleContactOpen = () => {
    setContactOpen(true);
  };
  
  // eslint-disable-next-line
  const handleClose = () => {
    setContactOpen(false)
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

                  <div>
                    <Link onClick={handleContactOpen}>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        onClickAddIssue={() => setContactOpen(true)}
                        >
                        Contact the ZAP team
                      </Button>
                    </Link>
                    <ContactForm 
                      open={openContact}
                      handleClose={() => setContactOpen(false)}
                    />
                    
                  </div>

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
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent align='center'>
                    <img src={Dia} width="145" height="145" alt="" />
                    <br />
                    <br />
                    <Typography gutterBottom variant="h7" component="h3" align='center'>
                      Diana Seung
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
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
            </Grid>
            <br />
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent align='center'>
                    <img src={Joon} width="145" height="145" alt="" />
                    <br />
                    <br />
                    <Typography gutterBottom variant="h7" component="h3" align='center'>
                      Sle Ahn
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
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
            </Grid>
            <br />

            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent align='center'>
                    <img src={'https://i.imgur.com/AlYe5XY.jpeg'} width="145" height="145" alt="" />
                    <br />
                    <br />
                    <Typography gutterBottom variant="h7" component="h3" align='center'>
                      Jake Eckfeldt
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button size="small" color="primary">
                    <Link href="https://github.com/JEckfeldt" target="_blank" >
                      GitHub
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <br />
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent align='center'>
                    <img src={Mike} width="145" height="145" align='center' alt="" />
                    <br />
                    <br />
                    <Typography gutterBottom variant="h7" component="h3" align='center'>
                      Michael Scharf
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
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
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}