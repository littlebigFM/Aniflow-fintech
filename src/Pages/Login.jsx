import React, { useEffect } from "react";
import style from "../CSS/register.module.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { useState } from "react";
import Button from "../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const url = import.meta.env.VITE_API_URL;
  const [formdata, setFormdata] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formdata.identifier) newErrors.identifier = "Email is required";
    if (!formdata.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post(`${url}/auth/login`, formdata, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        navigate("/Dashboard");
      } catch (error) {
        console.log("login error", error);
      }
    }
  };

  console.log(formdata);

  return (
    <>
      <div
        className={`
      p-2 flex 
      items-center 
      justify-center 
      ${style.main}
      max-[665px]:p-[0]

        `}
      >
        <div
          className="
        flex 
        gap-4 
        max-[665px]:flex-col 
        max-[665px]:gap-[3rem]
        max-[665px]:w-full
        "
        >
          <div
            className="
          flex 
          flex-col 
          h-[787px] 
          max-[980px]:w-full 
          max-[400px]:h-full
          max-[400px]:gap-[4rem]
          max-[665px]:hidden
          "
          >
            <div
              className="
            flex 
            flex-col 
            justify-between 
            h-[40%] 
            max-[400px]:flex 
            gap-[4rem]
            "
            >
              <div>
                <img src={logo1} alt="" />
              </div>
              <div
                className="
              text-[28px] 
              font-semibold 
              max-[870px]:text-[25px] 
              max-[260px]:text-[20px]
              "
              >
                <p>Finance, Simplified!</p> <p>One click to go all digital.</p>
              </div>
            </div>

            <div
              className="
            flex 
            flex-col 
            justify-space-between 
            h-[60%] 
            max-[400px]:flex 
            gap-[4rem]
            "
            >
              <div>
                <img src={logo2} alt="" />
              </div>
              <p id={style.leftTwoText}>Get Started</p>
            </div>
          </div>

          <div className="min-[666px]:hidden">
            <p className="font-bold text-[40px] text-center">Login</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[white]
          w-[752px]
          h-[850px]
          rounded-[12px]
          py-[5.8rem]
          px-[3rem]
          flex
          flex-col
          gap-4
          max-[400px]:p-[0rem]
          max-[665px]:h-[670px]
          max-[665px]:mt-
          max-[665px]:p-[3rem]
          max-[665px]:pt-[4rem]
          max-[950px]:w-full
          "
          >
            <p className="max-[665px]:hidden font-bold text-[40px] text-center">
              Login
            </p>

            <div className="">
              <div className={style.form}>
                <input
                  type="text"
                  name="identifier"
                  value={formdata.identifier}
                  placeholder="Email Address"
                  onChange={handleChange}
                  className={`outline-none p-4 bg-[#f4f5fe] rounded-xl border-2 
                    max-[293px]:w-full
                    ${
                      errors.identifier
                        ? "border-red-500"
                        : "border-[rgba(99, 97, 97, 1)]"
                    }`}
                  required
                />
                {errors.identifier && (
                  <p className="text-red-500 text-sm ">{errors.identifier}</p>
                )}

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
              </div>

              <div className="mt-2 flex justify-end text-[#3745AF]">
                <Link to="/ForgotPassword">Forgot password?</Link>
              </div>
            </div>

            <div className={style.rsFooter}>
              <div className={style.button}>
                <Button
                  text="Login"
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mt-3 text-white font-bold text-[24px] "
                />
              </div>
              <div className={style.ftText}>
                <p className="text-center text-[gray] mt-2">
                  Don't have an account?{" "}
                  <span className="text-[#3745AF]">
                    <Link to="/">Sign up</Link>
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
