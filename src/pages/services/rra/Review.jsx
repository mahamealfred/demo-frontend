import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import moment from 'moment'


export default function Review({taxPayerName,amountToPay,transactionId,transactionStatus,dateTime,agentName,
  tin,
  taxTypeDesc,
  clientCharges

}) {

  return (
    <React.Fragment>
            <Typography variant="h6" textAlign="center" gutterBottom>
           Transactions
      </Typography>
      <List disablePadding>
          <ListItem  sx={{ py: 1, px: 0 ,textAlign:"center"}} >
            <ListItemText primary="Payer Name" secondary="Alfred Mahame"/>
          </ListItem>
          <ListItem  sx={{ py: 1, px: 0 ,textAlign:"center"}} >
            <ListItemText primary="TIN" secondary="12111333" />
          </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Amount Paid"  />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
       
          {Number(amountToPay).toLocaleString()} Rwf
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary= "Client Chargers" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
       
          {Number(clientCharges).toLocaleString()} Rwf
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary= "Transaction ID"/>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {transactionId}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Description</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{taxTypeDesc}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{moment(dateTime).format("llll")}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Status</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{transactionStatus}</Typography>
                </Grid>
              </React.Fragment>
         
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}