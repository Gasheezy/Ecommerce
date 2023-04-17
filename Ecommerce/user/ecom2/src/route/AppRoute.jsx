import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router";
import HomePage from '../pages/HomePage';

const AppRoute = () => {

    return (
        <>   
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        </>
    )
}

export default AppRoute
