"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import ProgressBar from "../AddProperty/ProgressBar";
import InfoCards from "./InfoCards";
import Sidebar from "./Sidebar";
import PropertyDetails from "./AddPropertyForms/PropertyDetails";
import RentalDetails from "./AddPropertyForms/RentalDetails";
import Amenities from "./AddPropertyForms/Amenities";
import Gallery from "./AddPropertyForms/Gallery";
import Schedule from "./AddPropertyForms/Schedule";
import SaveContinueButton from "./SaveContinueButton";

// Dynamically import components that use leaflet with SSR disabled
const LocalityDetails = dynamic(
  () => import("./AddPropertyForms/LocalityDetails"),
  { ssr: false }
);

const PropertyDetailsForm: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("PropertyDetails");
  const [formData, setFormData] = useState<any>({});
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({}); // Stores errors
  // const [allPages, setAllPages] = useState()

  const allPages = [
    "PropertyDetails",
    "LocalityDetails",
    "RentalDetails",
    "Amenities",
    "Gallery",
    "Schedule",
  ];

  const validatePage = (): boolean => {
    const errors: { [key: string]: string } = {};
    const currentData = formData[activePage] || {};

    // Custom validation logic for each page
    if (activePage === "PropertyDetails" && !currentData.propertyName) {
      errors.propertyName = "Property name is required.";
    }
    // if (activePage === "LocalityDetails" && !currentData.locality) {
    //   errors.locality = "Locality is required.";
    // }
    // if (activePage === "RentalDetails" && !currentData.rentAmount) {
    //   errors.rentAmount = "Rent amount is required.";
    // }

    // Add more validations as needed for other pages...

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const currentPageIndex = allPages.indexOf(activePage);
  // Calculate progress: Start at 0% and increase by 20% for each page
  let progress = (currentPageIndex / (allPages.length - 1)) * 90;
  if (isComplete) progress = 100;

  // const handleNextPage = () => {
  //   if (currentPageIndex < allPages.length - 1) {
  //     setActivePage(allPages[currentPageIndex + 1]);

  //   }
  // };

  // const handleComplete = () => {
  //   if (currentPageIndex === allPages.length - 1) {
  //     setIsComplete(true);
  //   }
  // };

  // const handleBackPage = () => {
  //   if (currentPageIndex > 0) {
  //     setActivePage(allPages[currentPageIndex - 1]);
  //   }
  // };


  const pageChange = (page: string) => {
    setActivePage(page);
  };

  const handleNextPage = () => {
    if (validatePage()) {
      if (currentPageIndex < allPages.length - 1) {
        setActivePage(allPages[currentPageIndex + 1]);
      }
    }
  };

  const handleBackPage = () => {
    if (currentPageIndex > 0) {
      setActivePage(allPages[currentPageIndex - 1]);
    }
  };

  const handleComplete = () => {
    if (currentPageIndex === allPages.length - 1 && validatePage()) {
      setIsComplete(true);
      console.log("Form Submitted Successfully:", formData);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [activePage]: {
        ...prevData[activePage],
        [key]: value,
      },
    }));
  };

  return (
    <div className="sm:w-[88%] mx-auto h-full sm:pb-10 pt-[4px]">
      <ProgressBar
        progress={progress}
        activePage={activePage}
        onBack={handleBackPage}
      />
      {/* <MobileHeader /> */}
      <main className="flex gap-3 mt-2">
        <Sidebar changePage={setActivePage} activePage={activePage} />
        {/* {pageComponents[activePage]} */}
        {activePage === "PropertyDetails" && (
          <PropertyDetails
            data={formData.PropertyDetails || {}}
            errors={formErrors}
            onChange={handleInputChange}
          />
        )}
        {activePage === "LocalityDetails" && (
          <LocalityDetails
          // data={formData.LocalityDetails || {}}
          // errors={formErrors}
          // onChange={handleInputChange}
          />
        )}
        {activePage === "RentalDetails" && (
          <RentalDetails
          // data={formData.RentalDetails || {}}
          // errors={formErrors}
          // onChange={handleInputChange}
          />
        )}
        {activePage === "Amenities" && (
          <Amenities
          // data={formData.Amenities || {}}
          // errors={formErrors}
          // onChange={handleInputChange}
          />
        )}
        {activePage === "Gallery" && (
          <Gallery
          // data={formData.Gallery || {}}
          // errors={formErrors}
          // onChange={handleInputChange}
          />
        )}
        {activePage === "Schedule" && (
          <Schedule
          // data={formData.Schedule || {}}
          // errors={formErrors}
          // onChange={handleInputChange}
          />
        )}
        <InfoCards />
      </main>
      <SaveContinueButton
        currentPageIndex={currentPageIndex}
        totalPages={allPages.length}
        onNext={handleNextPage}
        onComplete={handleComplete}
        onBack={handleBackPage}
      />
    </div>
  );
};

export default PropertyDetailsForm;
