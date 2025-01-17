"use client";
import React, { useState } from "react";
import ProgressBar from "../AddProperty/ProgressBar";
import SaveContinueButton from "../AddProperty/SaveContinueButton";
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

  return (
    <div className="sm:w-[88%] mx-auto h-screen pt-[4px]">
      <ProgressBar />
      <MobileHeader />
      <main className="flex gap-3 mt-2">
        <Sidebar changePage={pageChange} activePage={activePage}/>
        {pageComponents[activePage]}        
        <InfoCards />
      </main>
      <SaveContinueButton />
    </div>
  );
};

export default PropertyDetailsForm;
