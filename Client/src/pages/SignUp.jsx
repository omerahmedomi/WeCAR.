import React,{useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
    const [isRegistration, setIsRegistration] = useState(false);
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
  return (
    <div className="bg-red-200 h-svh flex font-roboto box-border ">
      <div className="img flex-1 bg-blue-400 shrink-0 min-w-1/2 max-sm:hidden ">
        <img
          src="/CarsAuth.jpg"
          alt=""
          className="w-full h-full max-w-full object-cover"
        />
      </div>
      <div className=" min-h-svh  bg-white text-black w-full flex flex-col sm:w-[633px] mx-auto p-4 justify-center gap-5">
        <div className="flex flex-col sm:text-center">
          <h1 className="font-grenze font-bold text-2xl leading-8 sm:text-3xl ">
            {isRegistration ? "Sign Up" : "Login"}
          </h1>
          <p className="font-eczar leading-6">Create an account!</p>
          <p className="error font-eczar h-2 text-red-500 text-sm">
            {error || ""}
          </p>
        </div>

        <div className=" flex flex-col  gap-5 font-eczar items-start sm:items-center">
          <Input
            name="email"
            placeholder="Email"
            // onChange={handleChange}
            // value={inputs.email}
            // type="email"
            // btnFunction={authenticate}
          />
          <Input
            name="password"
            placeholder="Password"
            // onChange={handleChange}
            // value={inputs.password}
            // type="password"
            // btnFunction={authenticate}
          />
          <Button
            text={isAuthenticating ? "Authenticating" : "Submit"}
            btnFunction={() => {
             
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
