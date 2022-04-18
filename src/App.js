import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Booking from './pages/Booking/Booking';
import RequirAuth from './pages/Login/RequirAuth/RequirAuth';
import About from './pages/About/About';




const App = () => {
    return (
        <div>

            <Header></Header>
           <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='/booking' element={
               <RequirAuth>
                   <Booking/>
               </RequirAuth>
               }></Route>
               <Route path='/blog' element={<Blogs/>}></Route>
               <Route path='/about' element={<About/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
               <Route path='/registration' element={<Registration/>}></Route>
               <Route path='*' element={<NotFound/>}></Route>

            </Routes> 
           <Footer></Footer>
        
        </div>
    );
};

export default App;