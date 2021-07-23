import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import emailjs from "emailjs-com";

function App() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8q9l0zs', 'contact_form', e.target, 'user_vZh74YVKSJ1YNAd3JfGIx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you as soon as possible.
                        </Typography>
                        <form onSubmit={sendEmail}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={12} item>
                                    <TextField placeholder="Enter your full name" label="Full name" variant="outlined" name='name' fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" name ='email' variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="subject" placeholder="Enter subject" label="Subject" variant="outlined" name='subject' fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" name='message' fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" value='Send Message' variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default App;