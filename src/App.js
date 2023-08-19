import {Suspense} from "react"

import { Routes, Route,Navigate, useLocation, BrowserRouter } from "react-router-dom";
import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import { HelmetProvider } from 'react-helmet-async';
import { Box } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";
function App() {
  return (
    <HelmetProvider>
 <Suspense fallback={<Box
sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}
>
<RingLoader color="#000057" size={100}  />
</Box>}
 
 >
    <BrowserRouter>
    <ThemeProvider>
    <ScrollToTop />
    <Router/>
    </ThemeProvider>
  </BrowserRouter>
    </Suspense>
    </HelmetProvider>
   
  );
}

export default App;