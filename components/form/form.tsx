"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Form = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [firstNameInputStatus, setFirstNameInputStatus] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [lastNameInputStatus, setLastNameInputStatus] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputStatus, setEmailInputStatus] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [enteredPsw, setEnteredPsw] = useState("");
  const [pswInputStatus, setPswInputStatus] = useState("");

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (enteredFirstName === "" || enteredFirstName.trim() === "") {
      setFirstNameInputStatus("error");
    } else {
      setFirstNameInputStatus("");
    }
    if (enteredLastName === "" || enteredLastName.trim() === "") {
      setLastNameInputStatus("error");
    } else {
      setLastNameInputStatus("");
    }
    if (enteredEmail === "" || enteredEmail.trim() === "") {
      setEmailInputStatus("error");
      setEmailErrorMsg("Email Address cannot be empty");
    } else if (!enteredEmail.includes("@")) {
      setEmailInputStatus("error");
      setEmailErrorMsg("Looks like this is not an email");
    } else {
      setEmailInputStatus("");
    }
    if (enteredPsw === "" || enteredPsw.trim() === "") {
      setPswInputStatus("error");
    } else {
      setPswInputStatus("");
    }
  };
  return (
    <div className="grid gap-y-2 rounded-[0.625rem] bg-white p-6 drop-shadow-[0_8px_0_rgba(0,0,0,0.1469)] ">
      <form className="grid gap-4 md:gap-5" onSubmit={submitHandler}>
        <div className="relative">
          <input
            placeholder="First Name"
            type="text"
            className={`${
              firstNameInputStatus == "error"
                ? " border-[2px] border-red text-red"
                : ""
            }`}
            onChange={(event) => setEnteredFirstName(event.target.value)}
          ></input>
          {firstNameInputStatus == "error" ? (
            <>
              <p className=" mt-[6px] text-right text-[11px] font-medium italic leading-normal text-red ">
                First Name cannot be empty
              </p>
              <Image
                src="/images/icon-error.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-4 right-[27px]"
              ></Image>
            </>
          ) : (
            ""
          )}
        </div>
        {/* Last Name */}
        <div className="relative">
          <input
            placeholder="Last Name"
            type="text"
            className={`${
              lastNameInputStatus == "error"
                ? " border-[2px] border-red text-red"
                : ""
            }`}
            onChange={(event) => setEnteredLastName(event.target.value)}
          ></input>
          {lastNameInputStatus == "error" ? (
            <>
              <p className=" mt-[6px] text-right text-[11px] font-medium italic leading-normal text-red ">
                Last Name cannot be empty
              </p>
              <Image
                src="/images/icon-error.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-4 right-[27px]"
              ></Image>
            </>
          ) : (
            ""
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            placeholder="Email Address "
            type="text"
            className={`${
              emailInputStatus == "error"
                ? " border-[2px] border-red text-red"
                : ""
            }`}
            onChange={(event) => setEnteredEmail(event.target.value)}
          ></input>
          {emailInputStatus == "error" ? (
            <>
              <p className=" mt-[6px] text-right text-[11px] font-medium italic leading-normal text-red ">
                {emailErrorMsg}
              </p>
              <Image
                src="/images/icon-error.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-4 right-[27px]"
              ></Image>
            </>
          ) : (
            ""
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            placeholder="Password "
            type="password"
            className={`${
              pswInputStatus == "error"
                ? " border-[2px] border-red text-red"
                : ""
            }`}
            onChange={(event) => setEnteredPsw(event.target.value)}
          ></input>
          {pswInputStatus == "error" ? (
            <>
              <p className=" mt-[6px] text-right text-[11px] font-medium italic leading-normal text-red ">
                Password cannot be empty
              </p>
              <Image
                src="/images/icon-error.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-4 right-[27px]"
              ></Image>
            </>
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-[5px] bg-green py-[15px] text-center text-[15px] font-semibold uppercase leading-[26px] text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.0909)]"
        >
          Claim your free trial
        </button>
      </form>
      <p className="text-center  text-[11px] font-medium leading-[21px] text-blue-grayish ">
        By clicking the button, you are agreeing to our
        <span className=" font-bold text-red"> Terms and Services</span>
      </p>
    </div>
  );
};

export default Form;
