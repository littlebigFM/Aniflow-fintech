import React from "react";
import style from "../CSS/register.module.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { useState } from "react";
import Button from "../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import axios from "axios";

const Register = () => {
  const url = import.meta.env.VITE_API_URL;

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const submitData = async (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!formdata.firstName) newErrors.firstName = "First name is required";
    if (!formdata.lastName) newErrors.lastName = "Last name is required";
    if (!formdata.email) newErrors.email = "Email is required";
    if (!formdata.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formdata.password) newErrors.password = "Password is required";
    if (!formdata.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (formdata.password !== formdata.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post(`${url}/auth/register`, formdata, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 201 || res.status === 200) {
          console.log("Account created", res.data);
          setIsRegistered(true);
        }
      } catch (error) {
        if (error.response) {
          console.log("Error response:", error.response.data);
        } else {
          console.log("Network or server error:", error.message);
        }
      }
    }
  };

  const handleChange = (event) => {
    // const { name, value } = event.target;
    // setFormdata({
    //   ...formdata,
    //   [name]: value,
    // });

    // or

    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  if (isRegistered) {
    return (
      <div
        className="flex justify-center h-screen bg-[#EDEFFE] 
      md:items-center
      md:px-12
      "
      >
        <div
          className=" flex flex-col items-center py-16 px-[2rem] 
        md:bg-[white] 
        md:rounded-[12px] 
        md:h-[759px] 
        md:w-[894px]
        md:justify-center
        md:py-0
        md:gap-12
        "
        >
          <div>
            <IoMdCheckmarkCircle className="text-[#056338] w-[170px] h-[170px]" />
          </div>
          <div className="flex flex-col items-center">
            <p
              className="text-center text-[25px] font-bold 
            min-[325px]:font-bold
            min-[325px]:text-[40px]"
            >
              Registration Successful
            </p>
            <div
              className="text-[#8E8E93] text-center justify-center mt-2 
            min-[325px]:font-medium 
            min-[325px]:text-[20px]
            md:w-[350px]
            "
            >
              <p>Your account has been created successfully</p>
            </div>
          </div>
          <div className="w-full ">
            <Button
              text="Go to Dashboard"
              className="mt-10 w-full text text-[white] font-bold"
              onClick={() => navigate("/Dashboard")}
            />
          </div>
        </div>
      </div>
    );
  }

  // console.log(formdata);

  return (
    <>
      <div className={style.main}>
        <div className={style.mn}>
          <div className={style.leftSection}>
            <div className={style.leftsecOne}>
              <div className={style.rsImage}>
                <img src={logo1} alt="" />
              </div>
              <div id={style.leftOneText}>
                <p>Finance, Simplified!</p> <p>One click to go all digital.</p>
              </div>
            </div>

            <div className={style.leftsecTwo}>
              <div>
                <img src={logo2} alt="" />
              </div>
              <p id={style.leftTwoText}>Get Started</p>
            </div>
          </div>
          <form onSubmit={submitData} className={style.rightSection}>
            <p
              className="font-bold 
            text-[40px] 
            text-center
            max-[870px]:text-[25px]
            "
            >
              Create Account
            </p>

            <div className={style.formdata}>
              <div className={style.form}>
                <input
                  type="text"
                  name="firstName"
                  value={formdata.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2
                    max-[293px]:w-full
                    ${
                      errors.firstName
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm ">{errors.firstName}</p>
                )}

                <input
                  type="text"
                  name="lastName"
                  value={formdata.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                    max-[293px]:w-full
                    ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm ">{errors.lastName}</p>
                )}

                <input
                  type="text"
                  name="email"
                  value={formdata.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                    max-[293px]:w-full
                    ${
                      errors.email
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm ">{errors.email}</p>
                )}

                <input
                  type="tel"
                  name="phoneNumber"
                  value={formdata.phoneNumber}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                    max-[293px]:w-full
                    ${
                      errors.phoneNumber
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm ">{errors.phoneNumber}</p>
                )}

                {/* <input
                  type="text"
                  name="gender"
                  value={formdata.gender}
                  placeholder="Gender"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                    max-[293px]:w-full
                    ${
                      errors.gender
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.gender && (
                  <p className="text-red-500 text-sm ">{errors.gender}</p>
                )} */}

                <input
                  type="password"
                  name="password"
                  value={formdata.password}
                  placeholder="Create Password"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                   max-[293px]:w-full
                    ${
                      errors.password
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm ">{errors.password}</p>
                )}

                <input
                  type="password"
                  name="confirmPassword"
                  value={formdata.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                    max-[293px]:w-full
                    ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm ">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className={style.rsFooter}>
              <div className={style.button}>
                <Button
                  text="Sign up"
                  type="submit"
                  // onClick={handleSubmit}
                  // onClick={submitData}
                  className="w-full mt-3 text-white font-bold text-[24px]"
                />
              </div>
              <div className={style.ftText}>
                <p className="text-center text-[gray] mt-2">
                  Have an account?{" "}
                  <span className="text-[#3745AF]">
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
