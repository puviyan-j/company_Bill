
import './App.css';
import PreviewBill from './component/header/PreviewBill';
import Login from './pages/login/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/login/signup/signup';
import Createbill from './pages/createbill/createbill';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/previewbill' element={<PreviewBill />} />
        <Route path='/createbill' element={<Createbill />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
