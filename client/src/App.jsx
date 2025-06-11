import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Result } from './pages/result';
import { BuyCredit } from './pages/BuyCredit';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';


export const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/result' element={<Result/>} /> 
      <Route path='/buy' element={<BuyCredit/>} />
    </Routes>
    <Footer />
    </div>
  )
};
