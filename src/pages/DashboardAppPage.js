import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button, CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import rraLogo from "../assets/images/rra.png"
import mutuwelLogo from "../assets/images/mutuwel.jpg";
import electricityLogo from "../assets/images/electricity.png";

// components
import Iconify from '../components/iconify';
// sections
import {

  AppWidgetSummary,
 
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
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
            <CardActionArea>
                 <CardMedia
                component="img"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                height="140"
                image={rraLogo}
                alt="rra logo"
                   />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 RRA payament Service
                </Typography>
               <Typography variant="body2" color="text.secondary">
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
                 <Typography gutterBottom variant="h5" component="div">
                 MUTUWEL payament Service
                </Typography>
               <Typography variant="body2" color="text.secondary">
                By using this service you will be able to pay MUTUWEL.
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
                 <Typography gutterBottom variant="h5" component="div">
                 ELECTRICITY  Service
                </Typography>
               <Typography variant="body2" color="text.secondary">
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
                image={mutuwelLogo}
                alt="rra logo"
                   />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 MITUWEL payament Service
                </Typography>
               <Typography variant="body2" color="text.secondary">
                By using this service you will be able to pay MITUWEL.
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
