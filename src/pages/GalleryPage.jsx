import React from "react";
import Gallery1 from "../components/GalleryPage/Gallery1";
import Gallery2 from "../components/GalleryPage/Gallery2";
import BlogSection from "../components/HomePage/BlogSection";
import Footer from "../components/HomePage/Footer";

const GalleryPage = () => {
  return (
    <>
      <Gallery1 />
      <Gallery2 />
      <BlogSection />
      <Footer />
    </>
  );
};

export default GalleryPage;
