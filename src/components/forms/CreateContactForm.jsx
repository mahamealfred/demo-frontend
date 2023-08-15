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

import { useDispatch, useSelector } from "react-redux";
import {
  Collapse,
  Alert,
} from "@mui/material";

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
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    sureName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Surename required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),

  });

  const formik = useFormik({
    initialValues: {
      name: "",
      sureName: "",
      email: "",
     
    },
    validationSchema: SignupSchema,
    onSubmit: async(values) => {
      const name=values.name
      const sureName=values.sureName
      const email=values.email
      // await dispatch(createContactAction({name,sureName,email}))
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  const [errorMessage,setErrorMessage]=useState("")
const [successMessage,setSuccessMessage]=useState("")
const [clientCode,setClientCode]=useState("")
const [open,setOpen]=useState(true)
const [openSuccess,setOpenSuccess]=useState(true)
const createContact=useSelector((state)=>state.createContact)
const handleClose=()=>{
  createContact.details=['']
  createContact.error=['']
  setOpenSuccess(false)
  setOpen(false)
}
  // useEffect(() => {
  //   async function fetchData() {
  //     if (!createContact.loading) {
  //       if (createContact.details.length !== 0) {
  //         if (createContact.details.statusCode === 200) {
  //           setSuccessMessage(createContact.details.message)
  //          setClientCode(createContact.details.data.name)
  //          setOpenSuccess(true)
  //          await dispatch(contactListAction())
  //         } else {
  //           return null;
  //         }
  //       }
  //       if (createContact.error) {
  //         setErrorMessage(createContact.error);
  //         setOpen(true)
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [createContact.details]);
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
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              {...getFieldProps("name")}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />
                <TextField
             fullWidth
             size="small"
             label="SureName"
             name="sureName"
              value={formik.values.sureName}
              onChange={formik.handleChange}
             {...getFieldProps("sureName")}
             error={Boolean(touched.sureName && errors.sureName)}
             helperText={touched.sureName && errors.sureName}
            />
          </Stack>
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
        
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
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
