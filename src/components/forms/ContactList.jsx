import  React, { useState, useEffect,useRef }  from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import { Button, Container, Grid, Tooltip } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";


import { useDispatch } from "react-redux";
import { clientListAction } from '../../redux/actions/clientListAction';
import PrintIcon from '@mui/icons-material/Print';
import { contactListAction } from '../../redux/actions/contactListAction';
import { Link } from 'react-router-dom';

// export let amountPaid=[]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Transactions() {

 // const todaydate = new Date().toISOString().slice(0, 10);

  const contactList= useSelector((state) => state.contactList);
 const dispatch=useDispatch();
  const [contactDetails, setContactDetails] = useState([]);
  const [limit, setLimit] = useState(40);
  const [selectedExamIds, setSelectedExamIds] = useState([]);
  const [results, setResults] = useState({});
  const [search, setSearch] = useState(false);
  const clientList= useSelector((state) => state.clientList);
  const [clientDetails, setClientDetails] = useState([]);
  const [linkedContact,setLinkedContact]=useState([])
  let numberOfClinkedClient=0
  const trimString = (s) => {
    var l = 0,
      r = s.length - 1;
    while (l < s.length && s[l] === " ") l++;
    while (r > l && s[r] === " ") r -= 1;
    return s.substring(l, r + 1);
  };
  const compareObjects = (o1, o2) => {
    var k = "";
    for (k in o1) if (o1[k] !== o2[k]) return false;
    for (k in o2) if (o1[k] !== o2[k]) return false;
    return true;
  };
  const itemExists = (haystack, needle) => {
    for (var i = 0; i < haystack.length; i++)
      if (compareObjects(haystack[i], needle)) return true;
    return false;
  };
  const searchHandle = async (e) => {
    setSearch(true);
    const searchKey = e.target.value;
    // console.log(e.target.value)
    try {
      var results = [];
      const toSearch = trimString(searchKey); // trim it
      for (var i = 0; i < contactDetails.length; i++) {
        for (var key in contactDetails[i]) {
          if (contactDetails[i][key] !== null) {
            if (
                contactDetails[i][key].toString().toLowerCase().indexOf(toSearch) !==
              -1
            ) {
              if (!itemExists(results, contactDetails[i]))
                results.push(contactDetails[i]);
            }
          }
        }
      }
      setResults(results);
    } catch (error) {
   return error
    }
  };
 
  useEffect(() => {
    async function fecthData(){
  await dispatch(contactListAction())
    }
  fecthData();
  
    }, []);


  useEffect(() => {
    async function fetchData() {
      if (!contactList.loading) {
        if (contactList.details) {
          setContactDetails(contactList.details.data);
    
        }
      }
    }
    fetchData();
  }, [contactList.details]);

  useEffect(() => {
    async function fecthData(){
  await dispatch(clientListAction())
    }
  fecthData();
  
    }, []);


  useEffect(() => {
    async function fetchData() {
      if (!clientList.loading) {
        if (clientList.details) {
          setClientDetails(clientList.details.data);
          setLinkedContact(clientList.details.data)
        }
      }
    }
    fetchData();
  }, [clientList.details]);
  
  console.log("number of linked contact",linkedContact)
 
  return (
    <React.Fragment>
      <Box m="10px"
    >
      <Typography
          
          component="h1" variant="h6"
          
          color="gray"
          textAlign="center"
          padding="0 0px 10px 0px"
          sx={{ fontSize: { xs: 20 },mb:1 }}
       
        >
 
    

     <DialogTitle>
     <Typography id="transition-modal-title" textAlign="center" variant="h6" component="h2">
   List Of Contact
     </Typography> 
     </DialogTitle>
        </Typography>
        {  contactDetails&& contactDetails.length>0?
         <Container maxWidth="lg">
         <Box sx={{ maxWidth: 300, position:"center", display:"flex"}}>
               <TextField
                 fullWidth
                 size="small"
                 onChange={(e) => searchHandle(e)}
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <SearchIcon fontSize="small" color="action">
                         <SearchIcon />
                       </SearchIcon>
                     </InputAdornment>
                   ),
                 }}
                 placeholder="Search..."
                 variant="outlined"
               />
             </Box>
          
              </Container>
        :null}
     
      </Box>
<Box 
 sx={{
   
   display: "block",
   justifyContent: "center",
   alignContent: "center",
   width: "100%",
   height: "auto",

}}
>
    {
        contactDetails&&contactDetails.length>0?
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 700 }} aria-label="customized table">
       <TableHead>
         <TableRow>
           <StyledTableCell align="left">Full Name</StyledTableCell>
           <StyledTableCell align="left">Email</StyledTableCell>
           <StyledTableCell align="center"> No of Linked Client</StyledTableCell>
           <StyledTableCell align="center">Action</StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
       {
               search?(
                 <>
                 {results.slice(0, limit).map((details) => (
           <StyledTableRow key={details._id}  selected={selectedExamIds.indexOf(details._id) !== -1}>
           <StyledTableCell component="th" scope="row" align="left"> {details.name} {details.surename}</StyledTableCell>
   <StyledTableCell align="left">{details.email}</StyledTableCell>
   <StyledTableCell align="center">1</StyledTableCell>
   <StyledTableCell align="center">

   <Link to="/">Link Client</Link>
   </StyledTableCell>
 </StyledTableRow>
         ))}
            </>
               ):(
                 <>
                 {contactDetails.slice(0, limit).map((details) => (
                    <StyledTableRow key={details._id}  selected={selectedExamIds.indexOf(details._id) !== -1}>
                    <StyledTableCell component="th" scope="row" align="left"> {details.name} {details.surename}</StyledTableCell>
            <StyledTableCell align="left">{details.email}</StyledTableCell>
            <StyledTableCell align="center">1</StyledTableCell>
            <StyledTableCell align="center">
    
            <Link to="/">Link Client</Link>
            </StyledTableCell>
          </StyledTableRow>
                ))}
                </>
              )}
       </TableBody>
     </Table>
    </TableContainer>
        
        :  <Typography id="transition-modal-title" textAlign="center" variant="h6" component="h2">
      No Contacts Found
          </Typography> 
    }
  
</Box>
    </React.Fragment>
  );
}