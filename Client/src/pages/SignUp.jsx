import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

const SignUp = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const apiBase ='http://localhost:5500'


  function handleChange(e) {
    console.log(inputs)
    
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
   
  }

  const authenticate = async() => {
    const {firstName,lastName,email,password} = inputs
    if(!email || !password || (isRegistration && (!firstName || !lastName))){
      setError('Please fill all the fields!')
      return
    }
console.log("first name",firstName)
console.log("last name",lastName)
console.log("email",email)
console.log("password",password)
   try {
    const response = await axios.post(apiBase + `/auth/${isRegistration ? 'sign-up' : 'sign-in'}`,{firstName,lastName,email,password})
    const data = response.data
    console.log(data)
    
   } catch (error) {
    console.log(error)
    setError(error.response.data.error)
    
   }
  };

  return (
    <div className="bg-re  flex font-roboto box-border ">
      <div className="img flex-1 bg-blue-400 shrink-0 min-w-1/2 max-lg:hidden ">
        <img
          src="/CarsAuth.jpg"
          alt=""
          className="w-full h-full max-w-full object-fit"
        />
      </div>
      <div className="bg-inherit h-screen text-black w-full flex flex-col sm:w-[633px] mx-auto p-4 pt-20  gap-5">
        <div className="flex flex-col text-center">
          <h1 className="font-grenze font-bold text-2xl leading-8 sm:text-3xl ">
            {isRegistration ? "Sign Up" : "Sign In"}
          </h1>
          <p className="font-eczar leading-6">
            {isRegistration ? "Create an account!" : "Login to your account!"}
          </p>
          <p className="error font-eczar h-2 text-red-500 text-sm">
            {error || ""}
          </p>
        </div>

        <div className=" flex flex-col  gap-5 font-eczar items-start sm:items-center">
          <div
            className={`flex flex-col w-full gap-5 ${
              !isRegistration && "hidden"
            }`}
          >
            <Input name="firstName" placeholder="First Name" onChange={handleChange} />
            <Input name="lastName" placeholder="Lastt Name" onChange={handleChange} />
          </div>
          <Input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={inputs.email}
            type="email"
            // btnFunction={authenticate}
          />
          <Input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={inputs.password}
            type="password"
            // btnFunction={authenticate}
          />
          <div
            className={`agreement accent-cyan-200 ${
              !isRegistration && "hidden"
            }`}
          >
            <input
              type="checkbox"
              onChange={() => {
                setAgreement((prev) => !prev);
              }}
              checked={agreement}
              className="text-white size-3"
            />{" "}
            I agree to Rental Terms and Conditions
          </div>
          <Button
            text={isAuthenticating ? "Authenticating" : "Submit"}
            btnFunction={() => {
              // if (isRegistration && !agreement) alert("agree"),
              authenticate()
            }}
          />
        </div>
        <hr className="text-light-cyan " />
        <div className=" flex items-center font-eczar gap-4 sm:justify-center">
          <p className="text-sm sm:text-base">
            {isRegistration
              ? "Already have an account?"
              : "Don't have an account?"}
          </p>
          <Button
            text={isRegistration ? "Login" : "Sign Up"}
            btnFunction={() => {
              setIsRegistration((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
