import React,{lazy} from "react"
import {  Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
// import startimage from "../../assets/images/startimage.png";
import startimage from "../../assets/images/bcitylogo.png";
import { useNavigate } from "react-router-dom";
import {CssBaseline} from "@mui/material";
const AppBar = lazy(() => import('../../components/appbar'))
// const Footer = lazy(() => import('../../components/footer'))
export default function Banner() {
const navigate=useNavigate()
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
const handleClient=()=>{
  navigate("/authentication-create-client")
}
const handleContact=()=>{
  navigate("/create-contact")
}
  return (
    <>
    <AppBar/>
    {/* <Footer/> */}
    <BannerContainer >
      <BannerContent>
        <Typography variant="h6">Client & Conatct Form</Typography>
        <BannerTitle variant="h6">
    Binary City Test
        </BannerTitle>
        <BannerDescription variant="subtitle">
        {/* Mobishuli is a payment system that helps parents and students to pay school fees.  */}
        </BannerDescription>
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={handleClient} variant="contained" >Client</Button>
              <Button onClick={handleContact} variant="outlined" >Contact</Button>
            </Stack>
      </BannerContent>
    </BannerContainer>
    {/* <Footer/> */}
    </>
   
  );
}
