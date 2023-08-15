import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';
import AuthContext from '../../context';
import { useSelector } from 'react-redux';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

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
  useEffect(() => {
    async function fetchData() {
      if (!login.loading) {
        if (login.details.length !== 0) {
          if (login.details.resData.statusCode === 200) {
            setAuth({
            username:auth.user,
          //username:login.users.resData.data.phonenumber,
            brokering:login.details.resData.data.brokering,
            usergroup:login.details.resData.data.group,
            password:login.details.password,
            email:login.details.resData.data.email,
            names:login.details.resData.data.fullName,
            phonenumber:login.details.resData.data.phoneNumber,
            basicAuth:login.details.basicAuth,
      
          
          })
           setUsername(auth.user)
           setBrokering(login.details.resData.data.brokering)
           setUserGroup(login.details.resData.data.group)
          
          } else {
           
            return  null
          }
        
        }
      
      }
    }
    fetchData();
   
  }, [login.details]);
  console.log("")
  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
