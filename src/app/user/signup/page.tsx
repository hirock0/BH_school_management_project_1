"use client";
import { nanoid } from "nanoid";
import Style from "./signup.module.css";
import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({
  weight: ["400", "400"],
  subsets: ["latin"],
});

import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  weight: ["200", "200"],
  subsets: ["latin"],
});
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Signup = () => {
  const [passwordChacker, setPasswordChacker] = useState(false);

  const [signupdata, setSignUpdata] = useState({
    reTpepassword: "",
    image: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitData = (data: any) => {
    if (data?.password !== signupdata?.reTpepassword) {
      toast.success("Password does not match");
    } else {
      data.image = signupdata.image;
      const nanId = nanoid();
      data.nanoId = nanId;
      const date = new Date();
      const recentdate = date.toLocaleDateString();
      data.recentDate = recentdate;
      console.log(data);
    }
  };
  const base64 = (e: any) => {
    try {
      const ImageData: any = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(ImageData);
      reader.onload = (result: any) => {
        setSignUpdata({ ...signupdata, image: result.target.result });
      };
      reader.onerror = (error: any) => {
        toast.success("Image is not found" + error);
      };
    } catch (error: any) {
      toast.success("something went wrong");
    }
  };

  return (
    <main className={`${Style.main} ${open_sans.className} pb-10 pt-24`}>
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
          <div className=" text-white overflow-hidden  lg:w-3/6 w-full max-md:w-full h-full  backdrop:filter backdrop-blur-3xl rounded-md pb-10 ">
            <h1 className=" text-center mt-5 text-xl">Sign Please</h1>
            <form
              onSubmit={handleSubmit(onSubmitData)}
              className=" lg:w-4/5 md:w-3/6 sm:w-3/5 max-sm:w-4/5 m-auto flex flex-col gap-5 max-sm:gap-2 mt-5 "
            >
              <div className=" rounded-sm  ">
                <h1>Name</h1>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className=" "
                />
                {errors.name && (
                  <p className=" text-yellow-700">This field is required !</p>
                )}
              </div>
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
                {errors.email && <p>This field is required !</p>}
              </div>
              <div className=" rounded-sm  ">
                <h1>Password</h1>
                <input
                  {...register("password", { required: true })}
                  type={`${passwordChacker ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className=" "
                />
                {errors.password && <p>Password is blank !</p>}
              </div>
              <div className=" rounded-sm  ">
                <h1>Re_Password</h1>
                <input
                  value={signupdata.reTpepassword}
                  onChange={(e) =>
                    setSignUpdata({
                      ...signupdata,
                      reTpepassword: e.target.value,
                    })
                  }
                  type={`${passwordChacker ? "text" : "password"}`}
                  name="Re_password"
                  id="Re_password"
                  placeholder="Re_Password"
                  className=" "
                />
              </div>
              <div className=" rounded-sm  ">
                <h1>Check Password</h1>
                <input
                  onChange={() => setPasswordChacker(!passwordChacker)}
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className=" "
                />
              </div>
              <div className=" rounded-sm  flex items-center h-12 ">
                <label
                  htmlFor="file"
                  className="  rounded-md h-full flex items-center pr-10 pl-10 max-sm:pl-5 max-sm:pr-5 bg-gradient-to-tr from-red-600 hover:bg-gradient-to-tr hover:from-red-700 active:bg-gradient-to-tr active:from-red-800 "
                >
                  Choose Image
                </label>
                <input
                  onChange={base64}
                  type="file"
                  accept="image/**"
                  name="file"
                  id="file"
                  className="  hidden "
                />
              </div>
              <div
                className={`${
                  signupdata.image !== "" ? "block" : "hidden"
                } rounded-sm `}
              >
                <div className=" m-auto h-32 w-32 rounded-sm overflow-hidden">
                  <Image
                    src={signupdata?.image || ""}
                    alt="image"
                    width={500}
                    height={500}
                    className=""
                  />
                </div>
              </div>

              <div className="  flex items-center justify-center w-full ">
                <button className="  bg-gradient-radial  from-green-500 hover:bg-gradient-radial hover:from-green-700 active:bg-gradient-radial active:from-green-900  w-3/5 h-10 rounded-sm">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          {/* right_section_end */}
          {/* ================================================= */}
        </div>
      </section>
    </main>
  );
};

export default Signup;
