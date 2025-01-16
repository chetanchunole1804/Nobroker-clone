"use client";
import React, { useState } from "react";
import ProgressBar from "../AddProperty/ProgressBar";
import SaveContinueButton from "../AddProperty/SaveContinueButton";
import InfoCards from "./InfoCards";

import Sidebar from "./Sidebar";
import PropertyDetails from "./AddPropertyForms/PropertyDetails";
import MobileHeader from "./MobileHeader";

const PropertyDetailsForm: React.FC = () => {
  return (
    <div className=" sm:w-[88%] mx-auto h-screen ">
      <ProgressBar />
      <MobileHeader/>
      <main className="flex gap-3 mt-2">
        <Sidebar />
        <PropertyDetails />
        <InfoCards />
      </main>
      <SaveContinueButton />
    </div>
  );
};

export default PropertyDetailsForm;
