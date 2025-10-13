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
      <div className={style.main}>
        <div className={style.mn}>
          <div className={style.leftSection}>
            <div className={style.leftsecOne}>
              <div>
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
          <form
            onSubmit={handleSubmit}
            className="bg-[white]
          w-[752px]
          rounded-[12px]
          py-[5.8rem]
          px-[3rem]
          flex
          flex-col
          gap-4
          max-[980px]:w-full
          max-[665px]:p-[3rem]
          max-[400px]:p-[0rem]
          
          "
          >
            <p className="font-bold text-[40px] text-center">Login</p>

            <div className={style.formdata}>
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
