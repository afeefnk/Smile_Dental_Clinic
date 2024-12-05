// import React from 'react'

import BlogSection from "../components/HomePage/BlogSection"
import Footer from "../components/HomePage/Footer"
import Partner from "../components/HomePage/Partner"
import Service1 from "../components/ServicePage/Service1"
import Service2 from "../components/ServicePage/Service2"
import Service3 from "../components/ServicePage/Service3"


const ServicePage = () => {
  return (
    <div>
        <Service1/>
        <Service2/>
        <Service3/>
        <BlogSection/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default ServicePage
