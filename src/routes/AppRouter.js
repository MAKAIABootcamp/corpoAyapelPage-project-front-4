import React from "react";
import Us from "../pages/Us/Us";
import Culture from "../pages/Culture/Culture";
import News from "../pages/News/News";
import Donations from "../pages/Donations/Donations";
import Programs from "../pages/Programs/Programs";
import Ayapel from "../pages/Ayapel/Ayapel";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo";
import Documents from "../pages/Documents/Documents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Error404 from "../pages/Error404/Error404";
import "react-awesome-slider/dist/styles.css";
import FullPage from "../pages/FullPage/FullPage";
import PageDonations from "../pages/Donations/pageDonations/PageDonations";
import HowToHelp from "../pages/HowToHelp/HowToHelp";
import BannerDonations from "../pages/Donations/bannerDonations/BannerDonations";
//import AppLoader from "../components/appLoader/AppLoader";

const AppRouter = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<FullPage />} />
            <Route path="nosotros" Component={Us} />
            <Route path="cultura" Component={Culture} />
            {/* <Route path="novedades" Component={News} /> */}
            <Route path="donaciones" Component={PageDonations} />
            <Route path="novedades" Component={News} exact />
            <Route path="novedades/:slug" Component={News} />
            <Route path="donaciones" Component={Donations} />
            <Route path="programas" Component={Programs} />
            <Route path="conoce-ayapel" Component={Ayapel} />
            <Route path="que-hacemos" Component={WhatWeDo} />
            <Route path="documentos" Component={Documents} />
            <Route path="historia" Component={Us} />
            {/* <Route path="historia2" Component={UsTwo} /> */}
            <Route path="ayapel" Component={Ayapel} />
            <Route path="como-ayudar" Component={HowToHelp} />
          </Route>
          <Route path="banner" Component={BannerDonations} />
          <Route path="*" Component={Error404} />
        </Routes>
      
    </BrowserRouter>
  );
};

export default AppRouter;
