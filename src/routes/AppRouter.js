import React from 'react'
import Home from '../pages/Home/Home'
import Us from '../pages/Us/Us'
import Culture from '../pages/Culture/Culture'
import News from '../pages/News/News'
import Donations from '../pages/Donations/Donations'
import Programs from '../pages/Programs/Programs'
import Ayapel from '../pages/Ayapel/Ayapel'
import WhatWeDo from '../pages/WhatWeDo/WhatWeDo'
import Documents from '../pages/Documents/Documents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout/Layout'
import Error404 from '../pages/Error404/Error404'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<Layout />}>
          <Route path="nosotros" Component={Us} />
            <Route path="home" Component={Home} />
            <Route path="cultura" Component={Culture} />
            <Route path="novedades" Component={News} />
            <Route path="donaciones" Component={Donations} />
            <Route path="programas" Component={Programs} /> 
            <Route path="conoce-ayapel" Component={Ayapel} /> 
            <Route path="que-hacemos" Component={WhatWeDo} /> 
            <Route path="documentos" Component={Documents} /> 
          </Route>
          <Route path="*" Component={Error404} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter