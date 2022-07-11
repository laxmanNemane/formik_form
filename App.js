// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashbord from "./Component/Dashbord";
import Formik from "./Formik/Formik";
import FormikOne from "./Formik/FormikOne";
// import Package from "./Pages/Packages";
// import Users from "./Pages/User";
// import Home from "./Component/Home";

function App() {
  return (
    <>
      {/* <Index> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashbord />} />
          <Route path="/users" element={<Users />} />
          <Route path="/packages" element={<Package />} /> */}


          {/* fromik library */}
          <Route path="/" element={<Formik/>}/>
          <Route path="/one" element={<FormikOne/>}/>
        </Routes>
      </BrowserRouter>
      {/* </Index> */}
    </>
  );
}

export default App;
