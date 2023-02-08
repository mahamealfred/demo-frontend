import {Suspense} from "react"
import LandingPage from "./layouts/landingpage";
import ClientPage from "./layouts/client-singup";
import CreateContactPage from "./layouts/create-contact"
import { Routes, Route,Navigate, useLocation, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Suspense fallback={null}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}>
      </Route>
      <Route path="/authentication-create-client" element={<ClientPage />} />
      <Route path="/create-contact" element={<CreateContactPage />} />
    </Routes>
  </BrowserRouter>
    </Suspense>
  );
}

export default App;