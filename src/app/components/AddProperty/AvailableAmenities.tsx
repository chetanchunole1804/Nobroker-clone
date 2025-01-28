import React,{useState} from "react";

interface AvailableAmenitiesProps {
  label: string; // Corrected the prop name
  customStyle: React.CSSProperties; 

}

const AvailableAmenities: React.FC<AvailableAmenitiesProps> = ({ label, customStyle }) => {

  const [availAmenities, setAvailAmenities] = useState<string | null>(null);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setAvailAmenities(label);
      console.log(availAmenities)
      console.log(customStyle);
    } else {
      setAvailAmenities(null); 
    }
  };
  return (
    
      <div className="flex items-center gap-2 mb-9">
        <input type="checkbox"
          className="pr-3 p-2"
          checked={availAmenities === label} 
          onChange={handleCheckboxChange}
        />
        <div
          className="h-[25px] w-[25px] flex items-center bg-no-repeat"
          style={customStyle} 
        ></div>
        <span>{label}</span> 
      </div>
    
  );
};

export default AvailableAmenities;
