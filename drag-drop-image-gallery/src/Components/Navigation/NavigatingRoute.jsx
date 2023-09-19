import React, { lazy,useState } from "react";
import {Route, Routes, Navigate} from 'react-router-dom';

import{
    LANDING_ROUTE,
    HOME,
    AUTH,
    SIGNIN,
    GALLERY,

} from '../Navigating/NavigateContent';

const Home = lazy(() => import ('../Contents/Home'));
const SignIn = lazy(() => import ('../Auth/SignIn'));
const SignUp = lazy(() => import ('../Auth/SignUp'));
const Gallery = lazy(() => import ('../Contents/Gallery'));

const NavigatingRoute = () =>{

    return(
        <>
        <Routes>
            <Route index element={<Navigate to='auth' />} />
            <Route path={"/"} element={< Home />} />
            <Route path={SIGNIN} element={< SignIn />} />
            <Route path={AUTH} element={<SignUp />} />
            <Route path={ GALLERY} element={<Gallery />} />
        </Routes>
        </>
    )
}

export default NavigatingRoute;