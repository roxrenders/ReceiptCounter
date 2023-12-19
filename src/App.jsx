import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './Login';

import Home from './Home'
import { ReceiptCrud } from './ReceiptCrud';
import { Provider } from './ContextApi';


function App() {
 
  return (
    <Provider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/receiptcrud" element={<ReceiptCrud />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;