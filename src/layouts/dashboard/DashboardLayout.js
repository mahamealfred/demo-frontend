import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';
import AuthContext from '../../context';
import { useSelector } from 'react-redux';
import { Box, Button, Modal, Typography } from '@mui/material';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({...props}) {
  const [open, setOpen] = useState(false);
  const { auth,setAuth }=useContext(AuthContext)
  const login=useSelector((state)=>state.login)
  const [agentName,setAgentName]=useState("");
  const [username,setUsername]=useState("")
const [brokering,setBrokering]=useState("")
const [userGroup,setUserGroup]=useState("");
  const {children}=props
  const navigate=useNavigate();

  const [openPageReflesh, setOpenPageReflesh] = useState(false)
const handleClosePageReflesh = () => setOpenPageReflesh(false);

const getDocDetails = useSelector((state) => state.getDocDetails);
const rraPayment = useSelector((state) => state.rraPayment);
//fecth 
useEffect(()=>{
  async function fecthData(){
    getDocDetails.details=['']
    rraPayment.details=['']
   
  }
  fecthData()
   },[
 
    getDocDetails.details,
    rraPayment.details,
   
  ])

useEffect(()=>{
  if(login.details.length === 0){
    setOpenPageReflesh(true)
  }
 },[])

 const handleLogoutPage=()=>{
  localStorage.removeItem('quantum-auth');
  sessionStorage.removeItem('quantum-auth')
 return navigate('/')
}



  useEffect(() => {
    async function fetchData() {
      if (!login.loading) {
        if (login.details.length !== 0) {
          if (login.details.resData.statusCode === 200) {
            setAuth({
           username:login.details.resData.data.username,
            brokering:login.details.resData.data.brokering,
            usergroup:login.details.resData.data.group,
            password:login.details.password,
            email:login.details.resData.data.email,
            names:login.details.resData.data.fullName,
            phonenumber:login.details.resData.data.phoneNumber,
            brokering:login.details.resData.data.brokering,
            group:login.details.resData.data.group,
            token:login.details.resData.data.token
          
          })
         
          
          } else {
           
            return  null
          }
        
        }
      
      }
    }
    fetchData();
   
  }, [login.details]);
  console.log("deta:",auth)
  return (
    <StyledRoot>
      <Modal
        open={openPageReflesh}
       // onClose={handleClosePageReflesh}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" textAlign="center" variant="h6" component="h2">
         Your session has timed out!
          </Typography>
          <Typography id="modal-modal-description" textAlign="center" sx={{ mt: 2 }}>
         Please Login
          </Typography>
          <Button
              sx={{
                width:"100%",
                height:"30px",
                borderRadius: 0.5
              }}
          onClick={handleLogoutPage} variant="contained">
            Login</Button>
        </Box>
      </Modal>
      <Header onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
