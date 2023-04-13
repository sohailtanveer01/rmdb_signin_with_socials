import React from 'react';



//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header/index';
import Home from './components/Header/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//styles
import {GlobalStyle} from './GlobalStyle'
import Signin from './components/Signin';


const App = ()=>(
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      
      <GlobalStyle/>
    </Router>
  );


export default App;
