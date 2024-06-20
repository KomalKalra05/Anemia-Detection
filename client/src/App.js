import Login from './pages/Login';
import Register from './pages/Register';
import DT from './pages/DT';
import SVM from './pages/SVM';
import RF from './pages/RF';
import NB from './pages/NB';
import KNN from './pages/KNN';
import LR from './pages/LR';
import ALL from './pages/ALL';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import HomeNavbar from './components/Homenav';
import Home from './pages/Homepage';
import About from './pages/About';
import Image from './pages/Image';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const Routing = ()=>{
  return(
    <Routes>
    <Route path='/' element={
            <>
              <Navbar />
              <Login />
            </>
          } />
    <Route path="/home" element={
            <>
              <HomeNavbar/>
              <Home />
            </>
          } />
    <Route path="/about" element={
            <>
              <HomeNavbar/>
              <About />
            </>
          } />
    <Route path='/register' element={
            <>
              <Navbar />
              <Register />
            </>
          } />
    <Route path='/dt'  element={
            <>
              <HomeNavbar/>
              <DT />
            </>
          } />
    <Route path='/svm' element={
            <>
              <HomeNavbar/>
              <SVM />
            </>
          } />
    <Route path='/rf' element={
            <>
              <HomeNavbar/>
              <RF />
            </>
          } />
    <Route path='/nb' element={
            <>
              <HomeNavbar/>
              <NB />
            </>
          } />
    <Route path='/knn' element={
            <>
              <HomeNavbar/>
              <KNN />
            </>
          } />
    <Route path='/lr' element={
            <>
              <HomeNavbar/>
              <LR />
            </>
          } />
    <Route path='/all' element={
            <>
              <HomeNavbar/>
              <ALL />
            </>
          } />
    <Route path='/image' element={
            <>
              <HomeNavbar/>
              <Image />
            </>
          } />
    <Route path='/user/otp' element={
            <>
              <Navbar />
              <Otp />
            </>
          } /> 
    <Route path='*' element={<Error />} />
  </Routes>
  )
}
const App=()=>{
  return (
    <>
      <Routing />
    </>
  );
}

export default App;