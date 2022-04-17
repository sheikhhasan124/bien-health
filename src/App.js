import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';


const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>

            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;