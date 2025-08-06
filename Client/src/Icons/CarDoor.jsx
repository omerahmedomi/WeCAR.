import React from 'react'

const CarDoor = () => {
  return (
    <svg viewBox="-1 0 20 20" xmlns="http://www.w3.org/2000/svg"  className='size-4 fill-cyan-500'>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="car-door-4" transform="translate(-3 -2)">
          {" "}
          <path
            id="secondary"
            className='fill-cyan-50'
            d="M20,11v9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11.41A.86.86,0,0,1,4.1,11Z"
          ></path>{" "}
          <path
            id="primary"
            d="M14,15h2m4,5V4a1,1,0,0,0-1-1H12.41a1,1,0,0,0-.7.29L4.29,10.71a1,1,0,0,0-.29.7V20a1,1,0,0,0,1,1H19A1,1,0,0,0,20,20ZM4.1,11H20"
            fill="none"
            // stroke="cyan"
            className='stroke-cyan-500'
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export default CarDoor