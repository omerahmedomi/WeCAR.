import React from 'react'

const Testimonial = ({name,type,text,image}) => {
  return (
    <div className="flex flex-col justify-center items-start w-fit max-w-130 text-sm sm:text-base mx-auto  bg-white dark:bg-gray-600 rounded-xl space-y-3 pl-5 py-2 transition-colors duration-500">
      <div className="size-20">
        <img
          src={image}
          alt=""
          className="rounded-full  w-full max-w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="name font-semibold font-eczar">{name}</h1>
        <h3 className="type text-dark-cyan dark:text-cyan-200 "> {type}</h3>
      </div>

      <p className="text-left font-eczar">
        {text}
      </p>
    </div>
  );
}

export default Testimonial