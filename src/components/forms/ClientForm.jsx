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
  Collapse,
  Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createClientAction } from "../../redux/actions/createClientAction";
import { clientListAction } from "../../redux/actions/clientListAction";
import { useDispatch,use, useSelector
 } from "react-redux";
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import CloseIcon from "@mui/icons-material/Close";

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
const ClientForm = ({ setAuth }) => {
 
  const [value, setValue] = useState(dayjs('2022-04-07'));
  const [showPassword, setShowPassword] = useState(false);
 const dispatch=useDispatch();
 const createClient=useSelector((state)=>state.createClient)
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
  
  });

  const formik = useFormik({
    
    initialValues: {
      name: "",
      clientCode: "",
   
    },
    validationSchema: SignupSchema,
    
    onSubmit: async(values) => {
      const name=values.name
      await dispatch(createClientAction(name))
 
    },

  });

  const { errors, touched,handleSubmit, isSubmitting, getFieldProps } = formik;
const [errorMessage,setErrorMessage]=useState("")
const [successMessage,setSuccessMessage]=useState("")
const [clientCode,setClientCode]=useState("")
const [open,setOpen]=useState(true)
const [openSuccess,setOpenSuccess]=useState(true)
const handleClose=()=>{
  createClient.details=['']
  createClient.error=['']
  setOpenSuccess(false)
  setOpen(false)
}

  useEffect(() => {
    async function fetchData() {
      if (!createClient.loading) {
        if (createClient.details.length !== 0) {
          if (createClient.details.statusCode === 200) {
            setSuccessMessage(createClient.details.message)
           setClientCode(createClient.details.data.clientCode)
           setOpenSuccess(true)
           await dispatch(clientListAction())
          } else {
            return null;
          }
        }
        if (createClient.error) {
          setErrorMessage(createClient.error);
        }
      }
    }
    fetchData();
  }, [createClient.details]);

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
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
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              size="small"
              label="Name"
             {...getFieldProps("name")}
             error={Boolean(touched.name && errors.name)}
             helperText={touched.name && errors.name}
            />

          </Stack>
          {
            clientCode?
            <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              disabled
              size="small"
              label={clientCode}
              // {...getFieldProps("clientCode")}
              // error={Boolean(touched.clientCode && errors.clientCode)}
              // helperText={touched.clientCode && errors.clientCode}
            />
          
         
          </Stack>
            :null
          }
         

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

export default ClientForm;
