import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Document from "./Document";
import Payment from "./Payment";
import Review from "./Review";

import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

import CircularProgress from '@mui/material/CircularProgress';
 import { ComponentToPrint } from './ComponentToPrint';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

import { useContext } from "react";

import logos from "../../../assets/images/rra.png"
import logo from "../../../assets/images/logos.png"
import { getDocDetailsAction } from "../../../redux/actions/getDocDetailsAction";
import { rraPayamentAction } from "../../../redux/actions/rraPaymentAction";

import AuthContext from "../../../context";

// const  ComponentToPrint=React.lazy(()=>import("./ComponentToPrint").then(module=>{
//   return {default: module.ComponentToPrint}
// }))
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};

const Index = (props) => {


  const steps = ['Reference Number', 'Make Payment', 'View Details'];
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const getDocDetails = useSelector((state) => state.getDocDetails);
  const rraPayment = useSelector((state) => state.rraPayment);
 


  

  const [formData, setFormData] = useState({
    docId: "",
    phoneNumber: "",
    password: "",
  });
  const componentRef = useRef();
 //rra get details
 const [docIdErr, setDocIdErr] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 //rra payments
 const [paymentErrorMessage, setPaymentErrorMessage] = useState("");
 const [phoneNumberError, setPhoneNumberError] = useState("");
 const [passwordError, setPasswordError] = useState("");
 const [username, setUsername] = useState("");
 const [bankName, setBankName] = useState("");
 const [rraRef, setRraRef] = useState("");
 const [tin, setTin] = useState("");
 const [taxPayerName, setTaxPayerName] = useState("");
 const [taxTypeDesc, setTaxTypeDesc] = useState("");
 const [taxCenterNo, setTaxCenterNo] = useState("");
 const [taxTypeNo, setTaxTypeNo] = useState("");
 const [assessNo, setAssessNo] = useState("");
 const [rraOrginNo, setRraOrginNo] = useState("");
 const [amountToPay, setAmountToPay] = useState("");
 const [descId, setDescId] = useState("");
 const [payerPhone, setPayerPhone] = useState("");
 const [brokering, setBrokering] = useState("");
 const [userGroup, setUserGroup] = useState("");
 const [transactionId,setTransactionId]=useState("");
 const [transactionStatus,setTransactionStatus]=useState("");
 const [dateTime,setDateTime]=useState("")
 const [agentName,setAgentName]=useState('')
 const [agentPhoneNumber,setAgentPhoneNumber]=useState("")
 const [clientCharges,setClientCharges]=useState("")
 const [password,setPassword]=useState("")
 //all
 const [open, setOpen] = React.useState(true);
 const [docDetails, setDocDetails] = useState("");
 const [openPayment,setOpenPayment]=useState(true);
 const [executing, setExecuting] = useState(false);
 const {
   disabled,
   onClick,
   ...otherProps
} = props;


const { auth }=useContext(AuthContext)

 const getStepContent = (step) => {
   switch (step) {
     case 0:
       return (
         <Document
         formData={formData}
         setFormData={setFormData}
         docIdErr={docIdErr}
         errorMessage={errorMessage}
         setErrorMessage={setErrorMessage}
         open={open}
         setOpen={setOpen}
         />
       );
     case 1:
       return (
         <Payment
         formData={formData}
         setFormData={setFormData}
         phoneNumberError={phoneNumberError}
         passwordError={passwordError}
         taxPayerName={taxPayerName}
         rraRef={rraRef}
         amountToPay={amountToPay}
         paymentErrorMessage={paymentErrorMessage}
         setPaymentErrorMessage={setPaymentErrorMessage}
         openPayment={open}
         setOpenPayment={setOpen}
         tin={tin}
         taxTypeDesc={taxTypeDesc}
         errorMessage={errorMessage}

         />
       );
     case 2:
       return <Review 
       dateTime={dateTime}
       transactionId={transactionId}
       transactionStatus={transactionStatus}
       taxPayerName={taxPayerName}
       amountToPay={amountToPay}
       agentName={agentName}
       tin={tin}
       taxTypeDesc={taxTypeDesc}
       clientCharges={clientCharges}
       />;
     default:
       throw new Error("Unknown step");
   }
 };

 //authentication data
//fect doc Id details
useEffect(() => {
  async function fetchData() {
    if (!getDocDetails.loading) {
      if (getDocDetails.details.length !== 0) {
        if (getDocDetails.details.statusCode === 200) {
          setBankName(getDocDetails.details.data.bank_name);
          setRraRef(getDocDetails.details.data.RRA_REF);
          setTin(getDocDetails.details.data.TIN);
          setTaxPayerName(getDocDetails.details.data.TAX_PAYER_NAME);
          setTaxTypeDesc(getDocDetails.details.data.TAX_TYPE_DESC);
          setTaxCenterNo(getDocDetails.details.data.TAX_CENTRE_NO);
          setTaxTypeNo(getDocDetails.details.data.TAX_TYPE_NO);
          setAssessNo(getDocDetails.details.data.ASSESS_NO);
          setRraOrginNo(getDocDetails.details.data.RRA_ORIGIN_NO);
          setAmountToPay(getDocDetails.details.data.AMOUNT_TO_PAY);
          setDescId(getDocDetails.details.data.DEC_ID);
          setUsername(auth.username)
          setUserGroup(auth.group)
          setBrokering(auth.brokering)
           setAgentName(auth.fullName)
          // setAgentPhoneNumber(auth.phonenumber)
          handleNext();
        } else {
          return null;
        }
   
      }
      if (getDocDetails.error) {
        setErrorMessage(getDocDetails.error);
      }
    }
  }
  fetchData();
 
}, [getDocDetails.details]);
//fecth payment response
useEffect(()=>{
  async function fetchData(){
   if (!rraPayment.loading) {
     if (rraPayment.details.length !== 0) {
       if (rraPayment.details.statusCode === 200) {
         setTransactionId(rraPayment.details.data.transactionId)
         setDateTime(rraPayment.details.data.date)
         setTransactionStatus(rraPayment.details.status)
         setClientCharges("10")
         handleNext();
       } else {
         return null;
       }
     }
     if (rraPayment.error) {
       setPaymentErrorMessage(rraPayment.error);
     }
   }
  
  }
  fetchData();
   },[rraPayment.details,rraPayment.error])
  
//handle request for rra document id
const handleDocmentDetails = async () => {
  if (formData.docId === "") {
    setDocIdErr("Reference number required");
  } else if (!Number(formData.docId)) {
    setDocIdErr("Reference number must be a numeric");
  }
  else {
   setDocIdErr("");
   setErrorMessage("")
    const docId = formData.docId;
    await dispatch(getDocDetailsAction({ docId }));
  }
};


 




//handle rra Payament
const handlePayment = async () => {
  if (formData.phoneNumber === "") {
    setPhoneNumberError("Phone number required");
  } else if (!Number(formData.phoneNumber)) {
    setPhoneNumberError("Phone number must be a number");
  }else if (formData.password === "") {
    setPasswordError("Password required");
  }

 else {
   setPhoneNumberError("")
   setPasswordError("")

   // setPaymenterrorMessage("")
    const payerPhoneNumber = formData.phoneNumber;
    const password = formData.password;
    setExecuting(true)
    try{
     await dispatch(rraPayamentAction(
       {
         bankName,
         rraRef,
         tin,
         taxPayerName,
         taxTypeDesc,
         taxCenterNo,
         taxTypeNo,
         assessNo,
         rraOrginNo,
         amountToPay,
         descId,
         payerPhoneNumber,
         userGroup,
         brokering,
       },
       username,
       password
     )
   );
    }finally{
setExecuting(false)
    }
   
  }
};
 //handle on button submit for each step
 const handelSubmit = () => {
  if (rraPayment.error) {
    setOpenPayment(true);
  }
   if (activeStep === 0) {
     handleDocmentDetails();
   } else if (activeStep === 1) {
    handlePayment();
   } else if (activeStep === 2) {
 handleNext()
   } else {
     return null;
   }
   if (getDocDetails.error) {
    setOpen(true);
  }
 };

 const handleNewpayment = () => {
  formData.docId = "";
  formData.password = "";
  formData.phoneNumber = "";
  getDocDetails.details=['']
  getDocDetails.error=['']
  rraPayment.details=['']
  rraPayment.error=['']
  setActiveStep(0)
 };

 const handleNext = () => {
   setActiveStep(activeStep + 1);
 };

 const handleBack = () => {
  formData.password = "";
  formData.docId=""
  setDocIdErr("");
  setPasswordError("");
  setPhoneNumberError("");
  setErrorMessage("");
  getDocDetails.error=['']
  setPaymentErrorMessage("");
  getDocDetails.details=['']
  rraPayment.details=['']
  getDocDetails.loading=false
  rraPayment.loading=false
   setActiveStep(0);
   //history.push("/dashboard",{push:true})
   //setOpenRRA(false)
  
 };
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {/* <Box m="10px"
    >
    </Box> */}
       
        <Container component="main" maxWidth="sm" sx={{display:{xs:"block",sm:"block",md:"block",lg:"block"}, mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 2 } }}
          >
             <ThemeProvider theme={theme}>
           <Grid
           container
           direction="column"
           alignItems="center"
           justifyContent="center"
           >
         <Typography id="transition-modal-title" textAlign="center" variant="h6" component="h2">
   
          </Typography>
           <img
                  src={logos}
                  alt="logo"
                  height={70}
                  width={85}
                />
           </Grid>
           </ThemeProvider>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5,display:{xs:"inline",sm:"flex"} }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" textAlign="center" gutterBottom>
                 Thank you for using Quantum solutions
                  </Typography>
                  <Typography textAlign="center" variant="subtitle1">
                 You have successful pay  RRA tax 
                  </Typography>
                
                  <Button onClick={handleNewpayment} sx={{ mt: 3, ml: 1 }}>
              New Payment
                  </Button>
                  
                </React.Fragment>
              ) : (
                <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep == 0 || activeStep !==2? (
                    <Button onClick={handleBack} 
                   //sx={{ mt: 3, ml: 1 }}
                    sx={{ my: 1, mx: 1.5 }}
                    >
              Cancel
                    </Button>
                  ):null}

                  <Button
                   disabled={executing || disabled}
                   {...otherProps}
                    onClick={handelSubmit}
                    // sx={{ mt: 3, ml: 1 }}
                    sx={{ my: 1, mx: 1.5 }}
                  >
                    
                    {/* {activeStep === steps.length - 1 ? 'Mke payment' : 'Next'} */}
                    {activeStep === steps.length - 1
                      ? <>
                      <ReactToPrint
           trigger={() => <Button> Receipt</Button>}
          content={() => componentRef.current}
             />
             <Box sx={{display:'none'}}>
             <ComponentToPrint 
             ref={componentRef} 
             dateTime={dateTime}
             transactionId={transactionId}
             transactionStatus={transactionStatus}
             taxPayerName={taxPayerName}
             amountToPay={amountToPay}
             agentName={agentName}
             agentPhoneNumber={agentPhoneNumber}
             rraRef={rraRef}
             tin={tin}
             taxTypeDesc={taxTypeDesc}
             clientCharges={clientCharges}
             logo={logo}
             />
             </Box>
              </>
                      : activeStep === 0
                      ? getDocDetails.loading?
                      <Box sx={{ display: 'flex',justifyContent:"center" }}>
                      <CircularProgress  sx={{ color: '#000057'}} />
                       </Box>:"Submit"
                      : rraPayment.loading?
                      <Box sx={{ display: 'flex',justifyContent:"center" }}>
                      <CircularProgress  sx={{ color: '#000057'}} />
                       </Box>:"Payment"}
                  </Button>
                </Box>
              </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Index;