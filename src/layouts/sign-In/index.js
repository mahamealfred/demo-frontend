import React,{lazy} from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Button,Typography, Link, Box, Divider, Paper, CssBaseline } from "@mui/material";
import styled from "@emotion/styled";
import CreateContactForm from "../../components/forms/CreateContactForm";
// import Logo from "../../components/";
import { motion } from "framer-motion";
import ContactList from "../../components/forms/ContactList";
import SignInForm from "../../components/forms/SignInForm";
import bgImg from "../../assets/images/bgImg.jpg"

const AppBar =lazy(() => import('../../components/appbar'))
const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '25vh',
    display: 'flex',
    justifyContent: 'center',
 
    flexDirection: 'column',
    padding: 12,
  }));

//////////////////////////////////
const RootStyle = styled("div")({
background:"#000057",
backgroundImage: `url(${bgImg})`,
width: "100%",
// height: "100%",
backgroundPosition: "center",
 backgroundSize: "cover",
//backgroundImage: "url('../../assets/images/bgImg.jpg')",
 backgroundRepeat: "no-repeat",
  height: "75vh",
  display: "grid",
  opacity: 1,
 // placeItems: "center",

});
const SubRootStyle = styled("div")({
  display: "grid",
   placeItems: "center",
  
  });

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const SignIn = ({ setAuth }) => {
  return (
    <React.Fragment>
    
    <CssBaseline/>
    
    <RootStyle>
    <AppBar/>
    < SubRootStyle>
    <Paper elevation={2}
     style={{ borderRadius: 15 }}
    >
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            {/* <Logo /> */}
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Sign In
              <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}/>
            </Typography>
          </HeadingStyle>
          <SignInForm setAuth={setAuth} />
          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
     
            <Link variant="subtitle2" component={RouterLink} to="/">
Forgot Password?
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
      </Paper>
    </SubRootStyle>
    </RootStyle>

    <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h4" paragraph textAlign='center'>
          How can we help you?
          </Typography>

          <Typography sx={{ color: 'text.secondary',textAlign: 'center' }}>
         As guides through the maze of digital change,
         we help our clients deliver the amazing digital customer experiences that their clients demand.
         Different services are necessary for each case.
          </Typography>

          

        
        </StyledContent>
      </Container>

    </React.Fragment>
  
  );
};

export default SignIn;