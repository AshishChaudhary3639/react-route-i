import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const RequirdAuth = ({children}) => {

const {isAuth}=useContext(AuthContext)

    if(isAuth){
        return children
    }
    else{
        return <Navigate to="/LoginPage"/>
    }

}

export default RequirdAuth