"use client"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const VideoCard = () => {
  return (
      <div className="">
        

                    <div className=" bg-yellow-400 rounded-sm p-5 flex lg:flex-row flex-col items-center justify-center gap-5 ">
                          {/* video-section_start */}
                          <div className=" w-full ">
                                <iframe
                                    src={""}
                                    id="commonAnimation"
                                    className='w-full object-cover'
                                    width="560px"
                                    height="315px"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                          </div>
                          {/* video-section_end */}
                          {/* ----------------------------------- */}
                          {/* text-section_start */}
                          <div className="  text-xs lg:w-4/5  mt-5 md:mt-0">
                            <h1  id="commonAnimation" className=' text-xl text-center underline underline-offset-4'>Here sdsd</h1>
                            <p  id="commonAnimation" className=' mt-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam labore expedita sit. Architecto dolore repudiandae id iste cupiditate? Odit, sed! Eius maiores nulla architecto quasi quos et in quis inventore.
                            Quibusdam mollitia modi architecto ducimus quae eaque velit accusamus, hic repellendus odit facere magni omnis est aperiam similique ipsum, laudantium nesciunt voluptatem. Nisi error, ea voluptatum atque provident est consequatur.
                            Iure illum quia sequi tenetur exercitationem doloremque, officiis vitae commodi ipsa ipsam. Iusto quam similique ipsum animi, minima aliquam ut cupiditate, non repellendus assumenda repellat quaerat, tempora quis sint vel.
                            Quae unde quisquam labore corporis placeat reiciendis laboriosam sunt tempore. Sit aperiam tempore eum accusantium iusto aut, vitae rem officiis veritatis, nobis assumenda corrupti ab doloremque voluptate culpa, ipsum laudantium!
                            Beatae reprehenderit cum rerum, quas, animi nemo minus laborum at accusamus quo facere quia deleniti. Cupiditate voluptatum assumenda fugiat, accusamus omnis expedita laborum obcaecati culpa dolore modi numquam dicta sunt?
                            </p>
                          </div>
                          {/* text-section_end */}
                    </div>

          
     </div>  
  )
}

export default VideoCard