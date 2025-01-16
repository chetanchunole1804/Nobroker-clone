import React from 'react';
// import styles from './Sidebar.module.css';

const menuItems = [
  { name: 'Property Details', icon: 'https://assets.nobroker.in/nb-new/public/MaterialIcons/HomeOutlined.png', link: '#' },
  { name: 'Locality Details', icon: 'https://assets.nobroker.in/nb-new/public/MaterialIcons/PinDropOutlined.png', link: '#' },
  { name: 'Rental Details', icon: 'https://assets.nobroker.in/nb-new/public/MaterialIcons/Business.png', link: '#' },
  { name: 'Amenities', icon: 'https://assets.nobroker.in/nb-new/public/MaterialIcons/KitchenOutlined.png', link: '#' },
  { name: 'Gallery', icon: 'https://assets.nobroker.in/nb-new/public/MaterialIcons/LinkedCameraOutlined.png', link: '#' },
  { name: 'Schedule', icon: 'https://assets.nobroker.in/nb-new/public/MaterialIcons/DateRangeOutlined.png', link: '#' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className='bg-white w-[17%] h-screen sm:block hidden'>
      <ul>
        {menuItems.map((item, index) => (
        <li key={index} className='relative'>
          <a href={item.link} className='flex px-2 items-center  py-4 text-[#837783] '>
              {/* <div className='w-1 h-full bg-[#009587] absolute left-0'></div> */}
              <div className='flex gap-3 items-center ps-3'>
              <img src={item.icon} alt={`${item.name} icon`} className='w-8'/>
              {item.name}
              </div>
            </a>
            <hr />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
