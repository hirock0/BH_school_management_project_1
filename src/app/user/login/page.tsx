"use client";
import Style from "./login.module.css";
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({
  weight: ["400", "400"],
  subsets: ["latin"],
});

import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
  weight: ["200", "200"],
  subsets: ["latin"],
});
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  const [passwordChacker, setPasswordChacker] = useState(false);
  const[BtnDisabled,setBtnDisabled]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitData = (data: any) => {
    console.log(data);
    setBtnDisabled(true)
  };


  return (
    <main style={{minHeight:"100vh"}} className={`${Style.main} ${open_sans.className} pb-10 pt-24`}>
      <section className=" w-5/6 m-auto h-full mt-10  ">
        <div className=" flex max-md:flex-col h-full">
          {/* ================================================== */}

          {/* left-Section_start */}
          <div
            className={`${Style.LeftBox} rounded-md overflow-hidden w-5/6  hidden lg:block p-5`}
          >
            <h1 className=" text-center  text-2xl underline underline-offset-8">
              Policy
            </h1>
            <p className={`${poppins.className} mt-5 `}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus recusandae voluptates necessitatibus impedit, mollitia
              incidunt iure hic eaque velit illo tempora natus fuga. Ut, quaerat
              incidunt doloremque sed mollitia id? Sequi, tempora doloribus!
              Vitae eaque harum quod voluptatibus dignissimos nam a natus!
              Repudiandae fuga nostrum nobis neque laudantium maiores animi. Ut
              earum voluptatum reprehenderit quibusdam laudantium accusantium
              mollitia unde ratione! Dolorum harum distinctio sint dignissimos
              laborum! Cum fugiat magnam et praesentium illum facere officia
              voluptas, ratione, libero iure excepturi numquam, beatae assumenda
              quia dicta alias temporibus culpa nulla explicabo pariatur. Fugiat
              velit libero mollitia repellat quasi sunt, ipsam assumenda dolore,
              architecto quas, quisquam nisi? Sequi eum exercitationem totam
              voluptates, dolor, quisquam rem recusandae officia dicta, soluta
              ut earum at aspernatur! Nesciunt quo quod sunt beatae, distinctio
              repudiandae vitae enim id atque ipsam praesentium quisquam
              adipisci in deleniti facilis quasi temporibus voluptatem mollitia.
              Ullam est corporis commodi unde. Repellendus, consequuntur
              dignissimos.
            </p>
          </div>

          {/* left_section_end */}
          {/* ============================================== */}

          {/* right_sction_start */}
          <div className=" text-white overflow-hidden  lg:w-3/6 md:w-4/6 max-md:w-4/5 max-sm:w-full m-auto h-full  backdrop:filter backdrop-blur-3xl rounded-md pb-10 ">
            <h1 className=" text-center mt-5 text-xl">Signup Please</h1>
            {/* form_start */}
            <form
              onSubmit={handleSubmit(onSubmitData)}
              className=" lg:w-4/5 md:w-3/6 sm:w-3/5 max-sm:w-4/5 m-auto flex flex-col gap-5 max-sm:gap-2 mt-5 "
            >
              <div className=" rounded-sm  ">
                <h1>Email or Number</h1>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email or Number"
                  className=" "
                />
                {errors.email && <p className=" text-cyan-600 rounded-full flex items-center justify-center text-xs md:text-base">Email or number is blank!</p>}
              </div>
              <div className=" ">
                <h1>Password</h1>
                <input
                  {...register("password", { required: true })}
                  type={`${passwordChacker ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className=" "
                />
                {errors.password && <p className="text-cyan-600 rounded-full flex items-center justify-center text-xs md:text-base">Password is blank !</p>}
              </div>

              <div className=" rounded-sm  h-5 flex items-center ">
                <input
                  onChange={() => setPasswordChacker(!passwordChacker)}
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className=" "
                />
              </div>

              <div className="  flex items-center justify-center w-full ">
                <button className="  bg-gradient-radial  from-green-500 hover:bg-gradient-radial hover:from-green-700 active:bg-gradient-radial active:from-green-900  w-3/5 h-10 rounded-sm">
                  Sign Up
                </button>
              </div>
            </form>
            {/* form_end */}
            {/* ===================================================================================================================================================================================================================== */}
            {/* divider_start */}
            <div className=" mt-5 flex justify-center items-center ">
              <div className=" flex items-center  lg:w-4/5 md:w-3/6 sm:w-3/5 max-sm:w-4/5">
                <div className=" border w-1/2 "></div>
                <div className=" text-nowrap pr-2 pl-2 max-sm:text-sm">
                  {" "}
                  Login With
                </div>
                <div className=" border w-1/2"></div>
              </div>
            </div>
            {/* divider_end */}
            <div className="mt-5 flex justify-center items-center ">
              <div className=" lg:w-4/5 md:w-3/6 sm:w-3/5 max-sm:w-4/5">
                {/* btn_part_start */}
                <div className=" w-full flex items-center justify-center gap-5">
                  <button disabled={BtnDisabled} className={` ${BtnDisabled?"opacity-60":"opacity-100"}  w-full h-8 rounded-full flex items-center justify-center bg-emerald-400`}>
                    <BsGoogle />
                  </button>
                  <button disabled={BtnDisabled} className={`  ${BtnDisabled?"opacity-60":"opacity-100"}  w-full  h-8 rounded-full flex items-center justify-center bg-cyan-600`}>
                    <BsGithub />
                  </button>
                </div>
                {/* btn_part_end */}
                <div className=" mt-5 flex items-center justify-center">
                  <Link
                    href={""}
                    className=" hover:text-slate-200 active:text-slate-300"
                  >
                    <button className=" underline underline-offset-4">
                      forgot password?
                    </button>
                  </Link>
                </div>
                <div className=" mt-5 flex items-center justify-center">
                  <Link
                    href={"/user/signup"}
                    className="flex items-center justify-center w-4/5 h-8 rounded-full bg-gradient-to-tl from-indigo-600 hover:from-indigo-700 active:from-indigo-800"
                  >
                    <button className="  ">Create new account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right_section_end */}
          {/* ================================================= */}
        </div>
      </section>
    </main>
  );
};

export default Login;
