import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button, CardActionArea, CardMedia, CardContent, Card, IconButton } from '@mui/material';
import rraLogo from "../assets/images/rra.png"
import mutuwelLogo from "../assets/images/rssb.avif";
import electricityLogo from "../assets/images/electricity.png";
import ejohezaLogo from "../assets/images/ejoheza.jpg";
import { useNavigate } from "react-router-dom";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import RraPage from "../pages/services/rra";
// components
import Iconify from '../components/iconify';
import CloseIcon from '@mui/icons-material/Close';
// sections
import {

  AppWidgetSummary,
 
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRRaServicesPage=()=>{
  //  navigate("/dashboard/services/rra-service" )
  setOpen(true);
  }

  return (
    <>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          {"RRA Payment Service"}
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <RraPage/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      <Helmet>
        <title> Quantum Solutions </title>
      </Helmet>
      <Container maxWidth="xl" >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hello, Welcome back
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <Card 
           raised
           sx={{
             maxWidth: 345,
             margin: "0 auto",
             padding: "0.1em",
           }}
          >
            <CardActionArea
            onClick={handleRRaServicesPage}
            >
                 <CardMedia
                component="img"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                height="140"
                image={rraLogo}
                alt="rra logo"
                   />
                 <CardContent>
                 <Typography gutterBottom variant="h5" textAlign="center" component="div">
                 RRA Payment Service
                </Typography>
               <Typography variant="body2" textAlign="center" color="text.secondary">
                By using this service you will be able to pay RRA tax.
                </Typography>
                </CardContent>
              </CardActionArea>
               </Card> 
             </Grid>
            <Grid item xs={12} sm={6} md={3}>
          <Card 
       raised
       sx={{
         maxWidth: 345,
         margin: "0 auto",
         padding: "0.1em",
       }}
          >
            <CardActionArea>
                 <CardMedia
                component="img"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                height="140"
                image={mutuwelLogo}
                alt="rra logo"
                   />
                 <CardContent>
                 <Typography gutterBottom variant="h5" textAlign="center" component="div">
                 Mituwel Payment Service
                </Typography>
               <Typography variant="body2" color="text.secondary" textAlign="center">
                By using this service you will be able to pay MITUWEL.
                </Typography>
                </CardContent>
              </CardActionArea>
               </Card> 
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
          <Card  raised
           sx={{
             maxWidth: 345,
             margin: "0 auto",
             padding: "0.1em",
           }}>
            <CardActionArea>
                 <CardMedia
                component="img"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                height="140"
                image={electricityLogo}
                alt="rra logo"
                   />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="div" textAlign="center">
                 Electricty Payment Service
                </Typography>
               <Typography variant="body2" color="text.secondary" textAlign="center">
                By using this service you will be able to pay ELECTRICITY.
                </Typography>
                </CardContent>
              </CardActionArea>
               </Card> 
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
          <Card  raised
           sx={{
             maxWidth: 345,
             margin: "0 auto",
             padding: "0.1em",
           }}>
            <CardActionArea>
                 <CardMedia
                component="img"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                height="140"
                image={ejohezaLogo}
                alt="rra logo"
                   />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="div" textAlign="center">
                 Ejehoze Payment Service
                </Typography>
               <Typography variant="body2" color="text.secondary" textAlign="center">
                By using this service you will be able to pay EjoHeza.
                </Typography>
                </CardContent>
              </CardActionArea>
               </Card> 
             </Grid>
        </Grid>
      </Container>
    </>
  );
}
