import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.github.com/2017mike/project3">
        Zap
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_1280.jpg)',
    padding: '0!important',
    margin: '0!important',
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUp() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleName(e) {
  console.log(e.target.value)
  setName(e.target.value)
}

  function handleUsername(e) {
    console.log(e.target.value)
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3001/api/users/register',{
      method:'POST', 
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:username,
        name:name,
        email:email,
        password:password
      }
      )
    })
    window.location = '/login'
  }

  
  return (
    
    <Grid container component="main" className={classes.root} align="center" justify="center" alignItems="center">
      <CssBaseline />
      <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={2} align="center" justify="center" alignItems="center">
            
            <Grid item xs={10} sm={10}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange = {(e) => handleName(e)}
              />
            </Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="username"
                onChange={(e) => handleUsername(e)}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => handleEmail(e)}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handlePassword(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-center">
            <Grid item>
              <Link href="/login" variant="body2">
                  Already have an account? Sign in‎‏‎ ‎‏‎
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Grid>
      </Grid>
 
  );
}