import {Routes, Route} from "react-router-dom"
import './App.css'
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import Footer from "./Components/Footer"
import CompanyDetailsPage from "./Pages/CompanyDetailsPage"
import FormCreateBikePage from "./Pages/FormCreateBikePage"
import DetailsBikePage from "./Pages/DetailsBikePage"
import FormModifyPage from "./Pages/FormModifyPage"
import ErrorPage from "./Pages/ErrorPage"
import MyNavbar from "./Components/Navbar"

function App() {
  

  return (
    <>
    <MyNavbar />
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/companyDetailsPage" element={<CompanyDetailsPage />} />
      <Route path="/aboutPage" element={<AboutPage />} />
      <Route path="/formCreateBikePage" element={<FormCreateBikePage />} /> 
      <Route path="/details/:bikeId" element={<DetailsBikePage />} />
      <Route path="formModifyPage/:bikeId" element={<FormModifyPage />} />  
      <Route path="*" element={<ErrorPage />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
