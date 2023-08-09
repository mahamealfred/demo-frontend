import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


const Payment=({
  formData,setFormData,phoneNumberError,passwordError,taxPayerName,amountToPay,rraRef, paymentErrorMessage,
  setPaymentErrorMessage,
  openPayment,
  setOpenPayment,
  tin,
  taxTypeDesc
})=> {
 
    const handleClose = () => {
      // setPaymentErrorMessage('')
      setOpenPayment(false);
    };

  return (
    <React.Fragment>
      {!paymentErrorMessage ? null : (
        <Collapse in={openPayment}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 0.2 }}
          >
            {paymentErrorMessage}
          </Alert>
        </Collapse>
      )}
      <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
          Payer Name
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
             Alfred Mahame
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
            Reference Number
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
            12235363663
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
                TIN
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
          1112290092
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
             Tax Description
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
             Cleaning Fee
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
               Amount To Pay
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
         1000 Rwf
              </Typography>
            </Grid>
  
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="full-width-text-field"
            size="small" 
            placeholder="Placeholder"
            helperText=""
            type="password"
            margin="normal"
            fullWidth
            label="Payer Phone" 
          />
        </Grid>
        <Grid item xs={12} md={6}>          
          <TextField
               required
      id="full-width-text-field"
      size="small" 
      placeholder="Placeholder"
      helperText=""
      type="password"
      margin="normal"
      fullWidth
      label="Client Pin" 
         />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}
export default  Payment