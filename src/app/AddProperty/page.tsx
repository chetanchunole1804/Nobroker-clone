import React from 'react'
import AddPropertyForm from '../components/AddProperty/AddPropertyForm'
import 'leaflet/dist/leaflet.css';

const page = () => {
  return (
    <div className='bg-[#f2f2f2]'>
        <AddPropertyForm/>
    </div>
  )
}

export default page