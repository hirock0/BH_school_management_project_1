"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Style from "./taskCard.module.css";
import { useEffect } from "react";
const poppins = Poppins({
  weight: ["200", "200"],
  subsets: ["latin"],
});

const TaskArray = [
  {
    id: 0,
    title: "Weekly Seminar",
    bgImage: "/All_Students_Images/students_1.jpg",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi illum numquam dicta. Magni beatae incidunt aliquam! Culpa doloremque necessitatibus voluptatibus. Pariatur, alias placeat. Aspernatur similique vitae dolores veritatis unde!",
    taskList: [],
    taskLink: "https://hirock-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "Weekly Seminar",
    bgImage: "/All_Students_Images/students_4.jpg",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi illum numquam dicta. Magni beatae incidunt aliquam! Culpa doloremque necessitatibus voluptatibus. Pariatur, alias placeat. Aspernatur similique vitae dolores veritatis unde!",
    taskList: [],
    taskLink: "https://hirock-portfolio.vercel.app/",
  },
  {
    id: 3,
    title: "Weekly Seminar",
    bgImage: "/All_Students_Images/students_3.jpg",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi illum numquam dicta. Magni beatae incidunt aliquam! Culpa doloremque necessitatibus voluptatibus. Pariatur, alias placeat. Aspernatur similique vitae dolores veritatis unde!",
    taskList: [],
    taskLink: "https://hirock-portfolio.vercel.app/",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Task_Card = () => {
  const onAllAnimation = () => {
    const Text1 = document.querySelectorAll("#commonAnimation");
    const windowHeight = window.outerHeight - 200;
    Text1.forEach((item: any, idx: any) => {
      document.addEventListener("scroll", (e: any) => {
        const ScrollHeight = item.getBoundingClientRect().top;
        if (windowHeight > ScrollHeight) {
          item.style.paddingTop = "0";
          item.style.transition = "1s";
          item.style.opacity = "1";
        } else {
          item.style.paddingTop = "128px";
          item.style.opacity = "0";
        }
      });
    });
  };

  useEffect(() => {
    onAllAnimation();
  }, []);

  return (
    <section
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
      className={ `${poppins.className}`}
    >
      {/* box_div_start */}
      <div className={`flex items-center justify-center`}>
        {/* inside_box_div_start */}
        <div className={` ${Style.outDetailsDiv} mt-5 `}>
          {TaskArray.map((item: any) => (
            <div key={item.id} className=" relative ">
              <Image
                src={item.bgImage}
                alt="info"
                height={500}
                width={500}
                className=" "
              />
              <div className="  flex flex-col justify-between p-5 absolute bottom-0 left-0 w-full bg-zinc-800/80 h-full ">
                <div className="">
                  <h1
                    id="commonAnimation"
                    className=" text-center text-xl underline underline-offset-4"
                  >
                    {item.title}
                  </h1>
                  <p id="commonAnimation" className=" text-sm mt-2 ">
                    {item.descriptions}
                  </p>
                </div>
                <div
                  id="commonAnimation"
                  className="  flex items-center justify-center"
                >
                  <button className=" bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 w-3/5 h-7 rounded-md">
                    See Here
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* inside_box_div_end */}
      </div>
      {/* box_div_end */}
{/* ------------------------------------------------------------------------------------------------------------ */}
      {/* School_recent_Tasks_start */}
      <div className=" mt-10 max-sm:mt-5 bg-yellow-500 p-5 rounded-sm">

          <Swiper
             navigation={false}
             slidesPerView={1}
             spaceBetween={50}
             loop={true}
             autoplay={{ delay: 5000 }}
             modules={[Navigation, Autoplay, Pagination]}
          >
                <SwiperSlide>
                    <div className=" flex flex-col items-center justify-center gap-5 max-md:gap-3 lg:flex-row ">
                          {/* text_start */}
                            <div className=" lg:w-1/2 md:text-base max-md:text-sm max-sm:text-xs ">
                                <h1 id="commonAnimation" className=" text-center underline underline-offset-4 text-xl">School Events</h1>
                                <p id="commonAnimation" className=" mt-2">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum,
                                  sed, mollitia at quam expedita magni omnis, similique quo illum
                                  recusandae ipsum. Deserunt molestias asperiores nemo quaerat nam
                                  porro doloribus? Quam, numquam deserunt. Modi, iste odit. Natus
                                  quidem, aperiam dolore dignissimos rem veniam sint similique sed
                                  repellendus sequi, reiciendis asperiores qui. Voluptate molestiae
                                  error pariatur, placeat quidem laudan Lorem ipsum dolor sit amet
                                  consectetur, adipisicing elit. Ducimus nisi nobis repellendus
                                  blanditiis. Itaque soluta sed sunt adipisci. Ad vel quo non impedit
                                  maiores recusandae voluptate modi rerum. Saepe, suscipit. tium. Ut,
                                  a.
                                </p>
                            </div>
                            {/* text_end */}
                            {/* ------------------- */}
                            {/* image_start */}
                            <div className="">
                                <Image
                                  src={
                                    "https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg"
                                  }
                                  alt="task"
                                  width={500}
                                  height={500}
                                  className=" rounded-md shadow-md shadow-white "
                                />
                            </div>
                            {/* image_end */}
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex flex-col items-center justify-center gap-5 max-md:gap-3 lg:flex-row ">
                          {/* text_start */}
                            <div className=" lg:w-1/2 md:text-base max-md:text-sm max-sm:text-xs ">
                                <h1 id="commonAnimation" className=" text-center underline underline-offset-4 text-xl">School Events</h1>
                                <p id="commonAnimation" className=" mt-2">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum,
                                  sed, mollitia at quam expedita magni omnis, similique quo illum
                                  recusandae ipsum. Deserunt molestias asperiores nemo quaerat nam
                                  porro doloribus? Quam, numquam deserunt. Modi, iste odit. Natus
                                  quidem, aperiam dolore dignissimos rem veniam sint similique sed
                                  repellendus sequi, reiciendis asperiores qui. Voluptate molestiae
                                  error pariatur, placeat quidem laudan Lorem ipsum dolor sit amet
                                  consectetur, adipisicing elit. Ducimus nisi nobis repellendus
                                  blanditiis. Itaque soluta sed sunt adipisci. Ad vel quo non impedit
                                  maiores recusandae voluptate modi rerum. Saepe, suscipit. tium. Ut,
                                  a.
                                </p>
                            </div>
                            {/* text_end */}
                            {/* ------------------- */}
                            {/* image_start */}
                            <div className="">
                                <Image
                                  src={
                                    "https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg"
                                  }
                                  alt="task"
                                  width={500}
                                  height={500}
                                  className=" rounded-md shadow-md shadow-white "
                                />
                            </div>
                            {/* image_end */}
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex flex-col items-center justify-center gap-5 max-md:gap-3 lg:flex-row ">
                          {/* text_start */}
                            <div className=" lg:w-1/2 md:text-base max-md:text-sm max-sm:text-xs ">
                                <h1 id="commonAnimation" className=" text-center underline underline-offset-4 text-xl">School Events</h1>
                                <p id="commonAnimation" className=" mt-2">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum,
                                  sed, mollitia at quam expedita magni omnis, similique quo illum
                                  recusandae ipsum. Deserunt molestias asperiores nemo quaerat nam
                                  porro doloribus? Quam, numquam deserunt. Modi, iste odit. Natus
                                  quidem, aperiam dolore dignissimos rem veniam sint similique sed
                                  repellendus sequi, reiciendis asperiores qui. Voluptate molestiae
                                  error pariatur, placeat quidem laudan Lorem ipsum dolor sit amet
                                  consectetur, adipisicing elit. Ducimus nisi nobis repellendus
                                  blanditiis. Itaque soluta sed sunt adipisci. Ad vel quo non impedit
                                  maiores recusandae voluptate modi rerum. Saepe, suscipit. tium. Ut,
                                  a.
                                </p>
                            </div>
                            {/* text_end */}
                            {/* ------------------- */}
                            {/* image_start */}
                            <div className="">
                                <Image
                                  src={
                                    "https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg"
                                  }
                                  alt="task"
                                  width={500}
                                  height={500}
                                  className=" rounded-md shadow-md shadow-white "
                                />
                            </div>
                            {/* image_end */}
                      </div>
                  </SwiperSlide>
    
              </Swiper>

      </div>
            {/* School_recent_Tasks_end */}
      {/* ----------------------------------------------------------------------------------------------------------------------------- */}
    </section>
  );
};

export default Task_Card;
