import React, { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { Paper } from '@mui/material';

// import logo from "../../../assets/images/logo.png"
import "../../../style.css"

export const ComponentToPrint = React.forwardRef((props, ref) => {
         const totalAmount=parseInt(props.clientCharges) + parseInt(props.amountToPay)
    return (
      <div ref={ref}>
		< CssBaseline/>
       <div className="wrapper">
	<div className="invoice_wrapper">
		<div className="header">
			<div className="logo_invoice_wrap">
				<div className="logo_sec">
					<img src={props.logo} className='logo' alt="code logo"/>
					<div className="title_wrap">
						{/* <p className="title bold">Coding Boss</p>
						<p className="sub_title">Privite Limited</p> */}
					</div>
				</div>
				<div className="invoice_sec">
					<p className="invoice bold">Receipt</p>
					<p className="invoice_no">
						{/* <span className="bold">VALIDATION</span>
						<span>*745*3#</span> */}
					</p>
					<p className="date">
						<span className="bold">Date</span>
						<span>{moment(props.dateTime).format("llll")}</span>
					</p>
				</div>
			</div>
			<div className="bill_total_wrap">
				<div className="bill_sec">
        <p className="bold name">Quantum Solutions </p>
				
					<p>Tel: (+250)787797979</p> 
			        <span>
			          Kigali, Rwanda<br/>
			        KG123
			        </span>
				</div>
				<div className="total_wrap">
					<p>Service</p>
	          		<p className="bold price">RRA Tax Payment</p>
				</div>
			</div>
		</div>
		<div className="body">
			<div className="main_table">
				<div className="table_header">
					<div className="row">
					<div className="col col_des"></div>
						
						<div className="col col_des">DETAILS</div>
					</div>
				</div>
				<div className="table_body">
					<div className="row">
						<div className="col col_no">
						
						</div>
						<div className="col col_des">
							<p className="bold">RRA Reference ID</p>
							{/* <p>Lorem ipsum dolor sit.</p> */}
						</div>
				
						<div className="col col_total">
							<p>{props.rraRef}</p>
						</div>
					</div>
					<div className="row">
						<div className="col col_no">
							
						</div>
						<div className="col col_des">
							<p className="bold">TIN</p>
							{/* <p>Lorem ipsum dolor sit.</p> */}
						</div>
						<div className="col col_total">
							<p>{props.tin}</p>
						</div>
					</div>
          <div className="row">
						<div className="col col_no">
							
						</div>
						<div className="col col_des">
							<p className="bold">Tax Payer Name</p>
							{/* <p>Lorem ipsum dolor sit.</p> */}
						</div>
						<div className="col col_total">
							<p>{props.taxPayerName}</p>
						</div>
					</div>
          <div className="row">
						<div className="col col_no">
							
						</div>
						<div className="col col_des">
							<p className="bold">Tax Type Description</p>
							{/* <p>Lorem ipsum dolor sit.</p> */}
						</div>
						<div className="col col_total">
							<p>{props.taxTypeDesc}</p>
						</div>
					</div>
					<div className="row">
						<div className="col col_no">
							
						</div>
						<div className="col col_des">
							<p className="bold">Quantum Solutions reference</p>
							{/* <p>Lorem ipsum dolor sit.</p> */}
						</div>
						<div className="col col_total">
							<p>{props.transactionId}</p>
						</div>
					</div>
					
					
				
				</div>
			</div>
			<div className="paymethod_grandtotal_wrap">
				{/* <div className="paymethod_sec">
					<p className="bold">AGENT NAME</p>
					<p>{props.agentName}</p>
				</div> */}
				<div className="grandtotal_sec">
			        <p className="bold">
			            <span>AMOUNT </span>
			         
						<span>
						{Number(props.amountToPay).toLocaleString()} Rwf
						</span>
			        </p>
			        <p>
			            <span>Client Charges</span>
			            <span>
						{Number(props.clientCharges).toLocaleString()} Rwf
							</span>
						
			        </p>
			        {/* <p>
			            <span>Discount 10%</span>
			            <span>-$700</span>
			        </p> */}
			       	<p className="bold">
			            <span>Grand Total</span>
			            <span>{totalAmount.toLocaleString()} Rwf</span>
						
			        </p>
				</div>
			</div>
		</div>
		{/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={props.transactionId}
    viewBox={`0 0 256 256`}
    />
</div> */}
		<div className="footer">
		<p>Thank you for using Quantum</p>
			{/* <div className="terms">
		        <p className="tc bold">Terms & Coditions</p>
		        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non praesentium doloribus. Quaerat vero iure itaque odio numquam, debitis illo quasi consequuntur velit, explicabo esse nesciunt error aliquid quis eius!</p>
		    </div> */}
		</div>
	</div>
</div>

      </div>
    );
  });