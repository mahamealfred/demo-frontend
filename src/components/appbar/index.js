import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from "../../assets/images/logo.png"
import { Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Index() {
//   const navigate=useNavigate()

//   const handleLogin=()=>{
//     navigate("/authentication-signin")
//   }
//   const handleSignUp=()=>{
//     navigate("/signup-selection")
//   }


  return (
<Box >
<AppBar  
sx={{
 // backgroundColor:"#000057"
  background: 'transparent', 
  boxShadow: 'none'
}} 
position="sticky" elevation={0}>
  <Toolbar>
   
     <Box
            component="img"
            sx={{
            height: "15vh",
            objectFit:"contain",
            flexGrow:{xs:0.5,sm:0.2}
            }}
            alt="Your logo."
            src={logo}
        />
  
    {/* <Box sx={{  flexGrow: 0,marginLeft:{xs:0,sm:20,md:70}}}>
    <Tooltip title="Login">
               <IconButton  sx={{ p: 0 }}>
               <Avatar     size="small" sx={{ bgcolor:"#35A745", fontSize:"12px" }}>Login</Avatar>
               </IconButton>
             </Tooltip>    
    </Box> */}
    {/* <Box sx={{  flexGrow: 0,marginLeft:5,display:{xs:"none",sm:"flex"}}}>
    <Tooltip title="Sign Up">
    <Button   size="medium" onClick={handleSignUp} sx={{  bgcolor:"#35A745", boxShadow: 5,"&:hover": {backgroundColor: "#35A745", } }} variant="contained">SIGN UP</Button>
    </Tooltip>    
    </Box> */}
  </Toolbar>
</AppBar>
</Box>
   
  );
}
export default Index;