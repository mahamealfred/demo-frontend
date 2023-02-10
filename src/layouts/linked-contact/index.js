import React,{lazy} from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider, Paper, CssBaseline } from "@mui/material";
import styled from "@emotion/styled";
import CreateContactForm from "../../components/forms/CreateContactForm";
import LinkedContact from "../../components/forms/LinkedContact";
// import Logo from "../../components/";
import { motion } from "framer-motion";
import ContactList from "../../components/forms/ContactList";
const AppBar =lazy(() => import('../../components/appbar'))

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "auto",
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

const CreateContact = ({ setAuth }) => {
  return (
    <React.Fragment>
    <AppBar/>
    <CssBaseline/>
    <RootStyle>
    <Paper elevation={2}
     style={{ borderRadius: 15 }}
    >
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            {/* <Logo /> */}
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Link Contact To Client
              <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}/>
            </Typography>
          </HeadingStyle>
          <LinkedContact setAuth={setAuth} />
          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
     
            <Link variant="subtitle2" component={RouterLink} to="/">
     Go Back
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
      </Paper>
    </RootStyle>

    </React.Fragment>
  
  );
};

export default CreateContact;