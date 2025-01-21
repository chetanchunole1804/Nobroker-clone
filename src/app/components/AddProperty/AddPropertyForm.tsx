"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "../AddProperty/ProgressBar";
import InfoCards from "./InfoCards";
import Sidebar from "./Sidebar";
import PropertyDetails from "./AddPropertyForms/PropertyDetails";
import MobileHeader from "./MobileHeader";
import LocalityDetails from "./AddPropertyForms/LocalityDetails";
import RentalDetails from "./AddPropertyForms/RentalDetails";
import Amenities from "./AddPropertyForms/Amenities";
import Gallery from "./AddPropertyForms/Gallery";
import Schedule from "./AddPropertyForms/Schedule";



const PropertyDetailsForm: React.FC = () => {

  const [activePage, setActivePage] = useState<string>("PropertyDetails");

  const pageChange = (page: string) => {
    setActivePage(page);
  };

  const pageComponents: Record<string, JSX.Element> = {
    PropertyDetails: <PropertyDetails />,
    LocalityDetails: <LocalityDetails />,
    RentalDetails: <RentalDetails />,
    Amenities: <Amenities />,
    Gallery: <Gallery />,
    Schedule: <Schedule />,
  };

//   const url = new URL(window.location.href);
// const queryParams = new URLSearchParams(url.search);

// // Access a specific query parameter
// const paramValue = queryParams.get('#'); // replace 'yourParamName' with your actual parameter name
// console.log(paramValue);



  return (
    <div className="sm:w-[88%] mx-auto h-full sm:pb-10 pt-[4px]">
      <ProgressBar />
      <MobileHeader />
      <main className="flex gap-3 mt-2">
        <Sidebar changePage={pageChange} activePage={activePage}/>
        {pageComponents[activePage]}        

        <InfoCards />
      
      </main>
    </div>
  );
};

export default PropertyDetailsForm;

