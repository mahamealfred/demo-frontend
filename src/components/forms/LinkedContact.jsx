import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";

import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  FormLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CloseIcon from "@mui/icons-material/Close";
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { createContactAction } from "../../redux/actions/createContactAction";
import { linkContactToClientAction } from "../../redux/actions/linkContactToClientAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Collapse,
  Alert,
} from "@mui/material";
import { clientListAction } from "../../redux/actions/clientListAction";
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);
function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}
const CreateContactForm = ({ setAuth }) => {
 
  const [value, setValue] = useState(dayjs('2022-04-07'));
  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch()
  const SignupSchema = Yup.object().shape({
    clientCode: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("ClientCode required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),

  });

  const formik = useFormik({
    initialValues: {
      clientCode: "",
      email: "",
     
    },
    validationSchema: SignupSchema,
    onSubmit: async(values) => {
      const clientCode=values.clientCode
      const email=values.email
      console.log("email and client code:",clientCode,email)
      await dispatch(linkContactToClientAction({clientCode,email}))
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  const [errorMessage,setErrorMessage]=useState("")
const [successMessage,setSuccessMessage]=useState("")
const [clientCode,setClientCode]=useState("")
const [open,setOpen]=useState(true)
const [openSuccess,setOpenSuccess]=useState(true)
const linkContactToClient=useSelector((state)=>state.linkContactToClient)

const handleClose=()=>{
  linkContactToClient.details=['']
  linkContactToClient.error=['']
  setOpenSuccess(false)
  setOpen(false)
}
  useEffect(() => {
    async function fetchData() {
      if (!linkContactToClient.loading) {
        if (linkContactToClient.details.length !== 0) {
          if (linkContactToClient.details.statusCode === 200) {
            setSuccessMessage(linkContactToClient.details.message)
         //  setClientCode(createContact.details.data.name)
           setOpenSuccess(true)
          // await dispatch(clientListAction())
          } else {
            return null;
          }
        }
        if (linkContactToClient.error) {
          setErrorMessage(linkContactToClient.error);
          setOpen(true)
        }
      }
    }
    fetchData();
  }, [linkContactToClient.details]);



  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
      { !errorMessage ? null : (
                <Collapse in={open}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleClose}>
                        <CloseIcon
                        fontSize="inherit"/>
                        </IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                      
                        {errorMessage} 
                        
                        </Alert>
                </Collapse>
            )
        }
         { !successMessage ? null : (
                <Collapse in={openSuccess}>
                    <Alert severity="success"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleClose}>
                        <CloseIcon
                        fontSize="inherit"/>
                        </IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                      
                        {successMessage} 
                        
                        </Alert>
                </Collapse>
            )
        }
        <Stack spacing={3}>
        <Stack
           component={motion.div}
           initial={{ opacity: 0, y: 60 }}
           animate={animate}
           direction={{ xs: "column", sm: "row" }}
           spacing={2}
          >
         <TextField
              fullWidth
              size="small"
              label="Client Code"
              name="clientCode"
              value={formik.values.clientCode}
              onChange={formik.handleChange}
              {...getFieldProps("clientCode")}
              error={Boolean(touched.clientCode && errors.clientCode)}
              helperText={touched.clientCode && errors.clientCode}
            />
               
             <TextField
             fullWidth
             size="small"
             autoComplete="username"
             name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
             type="email"
             label="Email"
             {...getFieldProps("email")}
             error={Boolean(touched.email && errors.email)}
             helperText={touched.email && errors.email}
          
            />
          </Stack>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              style={{ borderRadius: 8 }}
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
          Submit
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default CreateContactForm;
