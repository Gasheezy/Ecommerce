import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route/AppRoute';

const App =  () => {

    return (
      <>
        <BrowserRouter>
        <AppRoute />         
        </BrowserRouter>

      </>
    )
  
}

export default App
