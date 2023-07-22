import {Suspense} from "react"
import LandingPage from "./layouts/landingpage";
import ClientPage from "./layouts/client-singup";
import CreateContactPage from "./layouts/create-contact";
import SinInPage from "./layouts/sign-In";
import LinkedContactPage from "./layouts/linked-contact";
import { Routes, Route,Navigate, useLocation, BrowserRouter } from "react-router-dom";
import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
 <Suspense fallback={null}>
    <BrowserRouter>
    <ThemeProvider>
    <ScrollToTop />
    <Router/>
    </ThemeProvider>
   
    {/* <Routes>
      <Route path="/" element={<SinInPage />}>
      </Route>
      <Route path="/authentication-create-client" element={<ClientPage />} />
      <Route path="/create-contact" element={<CreateContactPage />} />
      <Route path="/linked-contact" element={<LinkedContactPage />} />
    </Routes> */}
  </BrowserRouter>
    </Suspense>
    </HelmetProvider>
   
  );
}

export default App;