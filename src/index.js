import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.module.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { Provider } from 'react-redux';
import {store} from "./store";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Comment from './pages/Comments/Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element= {<App />} path='/'>
            <Route element= {<Home />} path='/'></Route>
            <Route element= {<Comment />} path='/post'></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

