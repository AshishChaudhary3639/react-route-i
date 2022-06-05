import React from 'react'
import '../styles/mainContainer.css'
import { Route, Routes } from 'react-router-dom';
import Learning from './Learning';
import Manage from './Manage';
import Market from './Market';
import Sale from './Sale';
import Start from './Start';
import SignUp from './SignUp'
import LoginPage from './LoginPage'
import ErrorPage from './ErrorPage';
import RequirdAuth from '../HOF/RequirdAuth';

const MainContainer = () => {
  return (
    <div >
      <div className='container'>
       <Routes>
          <Route path='/Start' element={<RequirdAuth><Start/></RequirdAuth>}/>
          <Route path='sale' element={<RequirdAuth><Sale/></RequirdAuth>}/>
          <Route path='manage' element={<RequirdAuth><Manage/></RequirdAuth>}/>
          <Route path='market' element={<RequirdAuth><Market/></RequirdAuth>}/>
          <Route path='learning' element={<RequirdAuth><Learning/></RequirdAuth>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='LoginPage' element={<LoginPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
       </div>
    </div>
  )
}

export default MainContainer