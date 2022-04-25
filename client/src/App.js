import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Resister from './Pages/Resister/Resister';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Testing from './Pages/testing/Testing';
import MyLocation from './Pages/MyLocation/MyLocation';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/test" element={<Testing></Testing>}></Route>
                <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/location" element={<MyLocation></MyLocation>}></Route>
                <Route path="/register" element={<Resister></Resister>}></Route>
                <Route path="/checkout/:serviceId" element={
                   <RequireAuth>
                        <CheckOut></CheckOut>
                   </RequireAuth>
                }></Route>
                <Route path="/addservice" element={
                   <RequireAuth>
                        <AddService></AddService>
                   </RequireAuth>
                }></Route>
                <Route path="/manage" element={
                   <RequireAuth>
                        <ManageService></ManageService>
                   </RequireAuth>
                }></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default App;