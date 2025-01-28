import React, { useState } from "react";
import propertyData from "../AddPropertyData.json";
import HelpInterest from "../HelpInterest";
import SaveContinueButton from "../SaveContinueButton";

interface PropertyDetailsProps {
  data: string;
  errors: { [key: string]: string };
  onChange: (key: string, value: string) => void;
}

interface Option {
  [key: string]: string | number;
}

interface PropertyField {
  label: string;
  [key: string]: string | Option[] | undefined;
}

interface PropertyDetailsData {
  id: number;
  name: string;
  icon: string;
  link: string;
  PropertyData: PropertyField[];
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  data,
  errors,
  onChange,
}) => {
  const propertyDetailsData = (propertyData as PropertyDetailsData[]).find(
    (item) => item.id === 1
  )?.PropertyData;

  if (!propertyDetailsData) {
    return <p>No data found.</p>;
  }

  const [leftFields, setLeftFields] = useState<PropertyField[]>(
    propertyDetailsData.slice(0, 3)
  );
  const [rightFields, setRightFields] = useState<PropertyField[]>(
    propertyDetailsData.slice(3, 8)
  );

  // console.log(propertyDetailsData[0].TypeOption[0].option4)
  // console.log(propertyDetailsData[3])  IMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   // console.log(formData)

  // };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4 sm:block hidden">
        Property Details
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px] sm:block hidden"></div>

      <form action="" className="mb-5">
        <div className="flex justify-between sm:flex-row flex-col">
          <div className="sm:w-[48%]">
            {leftFields.map((field, index) => (
              <div key={index} className="flex flex-col text-sm mb-5 mt-5">
                <label className="font-semibold text-[#635b63] mb-1">
                  {field.label}
                </label>
                <select
                  className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 "
                  // value={data.ApartmentType || ""}
                  // onChange={(e) => onChange("propertyName", e.target.value)}
                >
                  {Object.entries(field)
                    .filter(([key, value]) => Array.isArray(value))
                    .flatMap(([key, optionsArray]) =>
                      (optionsArray as Option[]).flatMap((optionsObj) =>
                        Object.entries(optionsObj).map(([key, option], i) => (
                          <option
                            key={i}
                            value={option}
                            className="rounded-none"
                            disabled={i === 0}
                          >
                            {option}
                          </option>
                        ))
                      )
                    )}
                </select>
                {/* {errors && <p className="text-red-600">{errors}</p>} */}
              </div>
            ))}
            <div>
              <label
                htmlFor=""
                className="font-semibold text-[#635b63] mb-1 text-sm "
              >
                Built Up Area*
              </label>
              <div className="flex justify-between items-center border border-gray-300 w-full py-2 px-2 text-sm ">
                <input
                  type="text"
                  placeholder="Built Up Area"
                  className="focus:outline-none w-96"
                />
                <span>Sq.ft</span>
              </div>
            </div>
          </div>

          <div className="sm:w-[48%]">
            {rightFields.map((field, index) => (
              <div key={index} className="flex flex-col text-sm mb-5 mt-5">
                <label className="font-semibold text-[#635b63] mb-1">
                  {field.label}
                </label>
                <select
                  className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 "
                  // value={formData}
                  // value={formData[`rightField_${index}`] || ""}
                  // name={`rightField_${index}`}
                  // onChange={handleChange}
                  required
                >
                  {Object.entries(field)
                    .filter(([key, value]) => Array.isArray(value))
                    .flatMap(([key, optionsArray]) =>
                      (optionsArray as Option[]).flatMap((optionsObj) =>
                        Object.entries(optionsObj).map(([key, option], i) => (
                          <option key={i} value={option} disabled={i === 0}>
                            {option}
                          </option>
                        ))
                      )
                    )}
                </select>
              </div>
            ))}
          </div>
        </div>
      </form>
      <HelpInterest />
    </div>
  );
};

export default PropertyDetails;