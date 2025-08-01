import React from 'react'

const Testimonial = ({name,type,text}) => {
  return (
    <div className="flex flex-col justify-center items-start w-80 min-[350px]:w-90 sm:w-100  bg-cyan-50 rounded-xl space-y-3 pl-5 py-2 ">
      <div className="size-20">
        <img
          src=""
          alt=""
          className="rounded-full bg-amber-100 w-full max-w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="name font-semibold font-eczar">{name}</h1>
        <h3 className="type text-dark-cyan "> {type}</h3>
      </div>

      <p className="text-left font-eczar">
        {text}
      </p>
    </div>
  );
}

export default Testimonial