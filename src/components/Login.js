import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  checkValidEmailAndPassword,
  checkValidNameAndEmailAndPassword,
} from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleToggleSignInForm = () => {
    setIsSignIn((currentVal) => !currentVal);
  };

  const handleButtonClick = () => {
    // Validate the form data
    let message = null;
    if (isSignIn) {
      message = checkValidEmailAndPassword(
        email?.current?.value,
        password?.current?.value
      );
    } else {
      message = checkValidNameAndEmailAndPassword(
        email?.current?.value,
        password?.current?.value,
        name?.current?.value
      );
    }
    setErrorMessage(message);

    // Sign In / Sign Up
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={handleToggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
