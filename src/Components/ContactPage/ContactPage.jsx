import React from 'react';
import { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Link, Card, CardActionArea, CardContent, Divider, IconButton, Snackbar, Alert } from '@mui/material';
import { Facebook, Instagram, LinkedIn, LocationOn, Phone, Email, YouTube } from '@mui/icons-material';

const ContactPage = () => {

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 50, color: '#FFC107', mb: 2 }} />,
      title: 'Email Us',
      link: 'mailto:info@jhzunet.com',
      text: 'info@jhzunet.com',
    },
    {
      icon: <Phone sx={{ fontSize: 50, color: '#FFC107', mb: 2 }} />,
      title: 'Call Us',
      link: 'tel:+1-555-123-4567',
      text: '+1 (555) 123-4567',
    },
    {
      icon: <LocationOn sx={{ fontSize: 50, color: '#FFC107', mb: 2 }} />,
      title: 'Location',
      text: '147 Avenue, San Francisco, CA 94107, United States',
    },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setAlert({ open: true, message: 'All fields are required!', severity: 'error' });
      return;
    }

    setAlert({ open: true, message: 'Message sent successfully!', severity: 'success' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };


  return (
    <Container maxWidth="xl" sx={{ py: 8, bgcolor: 'background.paper' }}>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' },
        }}
      >
        {contactInfo.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkgray',
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                p: 2,
              }}
            >
              <CardActionArea sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ textAlign: 'center' }}>
                    {item.icon}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {item.title}
                    </Typography>
                    {item.link ? (
                      <Link
                        href={item.link}
                        underline="none"
                        color="inherit"
                        sx={{
                          display: 'block',
                          '&:hover': { color: '#FFC107' }
                        }}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 6 }} />

      <Typography variant="h3" component="h1" gutterBottom sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        mt: 10,
        mb: 7,
        color: '#616161'
      }}>
        Contact  Movie<span style={{ color: '#FFC107' }}>Nest</span>
      </Typography>

      <Grid container spacing={8}>
    
        <Grid item xs={12} md={6}>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
            <TextField label="Subject" name="subject" value={formData.subject} onChange={handleChange} fullWidth required />
            <TextField label="Message" name="message" multiline rows={5} value={formData.message} onChange={handleChange} fullWidth required />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#616161' }} size="large">Send Message</Button>
          </Box>
          <Snackbar open={alert.open} autoHideDuration={3000} onClose={() => setAlert({ ...alert, open: false })}>
            <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity} sx={{ width: '100%' }}>
              {alert.message}
            </Alert>
          </Snackbar>
        </Grid>


       
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
         
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Get in Touch
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ fontSize: 30, color: ' #FFC107' }} />
                <Typography>
                  147 Avenue ,
                  San Francisco, CA 94107<br />
                  United States
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ fontSize: 30, color: ' #FFC107' }} />
                <Typography>+1 (555) 123-4567</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ fontSize: 30, color: ' #FFC107' }} />
                <Typography>support@movieNest.com</Typography>
              </Box>
            </Box>

           
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link color="inherit" href="https://www.facebook.com/" target="_blank">
                  <Facebook sx={{ fontSize: 40, color: '#616161', '&:hover': { color: ' #344CB7' } }} />
                </Link>
                <Link color="inherit" href="https://www.instagram.com/" target="_blank">
                  <Instagram sx={{ fontSize: 40, color: '#616161', '&:hover': { color: '#f73378' } }} />
                </Link>
                <Link color="inherit" href="https://www.linkedin.com/" target="_blank">
                  <LinkedIn sx={{ fontSize: 40, color: '#616161', '&:hover': { color: '#2196f3' } }} />
                </Link>
                <Link color="inherit" href="https://www.youtube.com/" target="_blank">
                  <YouTube sx={{ fontSize: 45, color: '#616161', '&:hover': { color: '#F93827' } }} />
                </Link>
              </Box>
            </Box>

            
            <Box sx={{ mt: 4, height: 300, borderRadius: 2, overflow: 'hidden' }}>
              <iframe
                title="Plex Headquarters"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.581674186241!2d-122.406744684685!3d37.78377997975783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d4a0d3f31%3A0x4d8a64b84647d92c!2sPlex!5e0!3m2!1sen!2sus!4v1623862345678!5m2!1sen!2sus"
                allowFullScreen
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;


