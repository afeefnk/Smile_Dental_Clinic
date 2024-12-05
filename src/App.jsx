// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import PromotionPage from "./pages/PromotionPage";
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='aboutpage' element={<AboutPage/>}/>
        <Route path='servicepage' element={<ServicePage/>}/>
        <Route path='gallerypage' element={<GalleryPage/>}/>
        <Route path='promotionpage' element={<PromotionPage/>}/>
        <Route path='blogspage' element={<BlogsPage/>}/>
        <Route path='contactpage' element={<ContactPage/>}/>
    
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
