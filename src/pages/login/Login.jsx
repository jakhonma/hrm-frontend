import React, { useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { PiEyeSlashThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { BsShieldLock } from "react-icons/bs";
import { TbShieldLock } from "react-icons/tb";
import { FcPrivacy } from "react-icons/fc";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API chaqirish joyi
    console.log("Login:", { phone, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card shadow-xl w-full max-w-[680px] flex flex-row border rounded-xl">
        {/* Chap tomonda logo */}
        <div className="flex items-center bg-gray-200 justify-center w-1/3 rounded-l-xl">
          {/* <div className="avatar placeholder"> */}
            {/* <div className="bg-neutral text-neutral-content rounded-full w-32 h-32"> */}
              <MdOutlinePrivacyTip size={100} className="text-gray-900"/>
            {/* </div> */}
          {/* </div> */}
        </div>

        {/* O'ng tomonda login form */}
        <div className="card-body w-2/3 rounded-r-xl mb-5">
            <div className="flex justify-center items-center mb-8">
                <h2 className="text-4xl font-semibold text-gray-600">Login</h2>
                {/* <div className="flex justify-end gap-4 text-sm text-gray-500 mb-2">
                    <a href="#">EN</a>
                    <a href="#">RU</a>
                    <a href="#">UZ</a>
                    <a href="#">ID</a>
                </div> */}
            </div>
          


          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="form-control w-full my-6">
              <span className="label-text text-gray-600 text-lg font-[500]">Telefon <span className="text-error mb-2">*</span></span>
              <div className="flex items-center w-full mb-4 mt-1 input input-bordered bg-slate-100 border border-gray-300 rounded-lg focus:border-gray-600">
                <span className="px-2 text-gray-400 text-lg">+998</span>
                <input
                  type="tel"
                  className="grow bg-transparent outline-none text-lg text-gray-700"
                  placeholder="90 600 52 25"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-1 text-gray-700 text-lg font-[500]">Parol <span className="text-error">*</span></span>
              <div className="flex items-center input input-bordered w-full bg-slate-100 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800">
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow bg-transparent outline-none text-lg text-gray-700"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="px-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEyeFill size={22} className="text-gray-600"/> : <BsEyeSlashFill size={22} className="text-gray-600"/> }
                </button>
              </div>
            </label>

            <div>
                <Link to={"/"}>
                  <button type="submit" className="btn w-1/4 text-white hover:bg-[#161616] border-none rounded-lg mt-2">
                    LOGIN
                </button>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
