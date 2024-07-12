
import Image from 'next/image'

import { Bitter } from 'next/font/google'

const bitter = Bitter({
  weight:["400","400"],
  subsets:["latin"]
})
import { Poppins } from 'next/font/google'
import Task_Card from '@/components/landing_page/task_card/Task_Card'
import VideoCard from '@/components/landing_page/videoCard/VideoCard'
import NewsSlide from '@/components/landing_page/newsSlide/NewsSlide'
const poppins = Poppins({
  weight:["200","200"],
  subsets:["latin"]
})


const Home = () => {

  return (
    <main className='AllNodes bg-black'>
      
      <section className=" relative Home_page h-full  ">
              
              <div className=" absolute top-24 left-0 right-0 overflow-hidden">
                <NewsSlide/>
              </div>
         
            
              
              <div className="w-5/6 m-auto "  >
                  <div  className={`${bitter.className}  rounded-md flex flex-col gap-1 backdrop:filter backdrop-blur-sm `}>
                    <h1 className=' text-7xl max-md:text-6xl max-sm:text-4xl font-semibold '>Your Kids</h1>
                    <h1 className=' text-7xl max-md:text-6xl max-sm:text-4xl font-semibold '>Deserve the</h1>
                    <h1 className=' text-2xl opacity-80 lg:text-6xl'>Best Education</h1>
                    <p className=' opacity-80  text-sm max-sm:text-xs'>Active Learning Export Teachers & Safe Environment </p>
                  </div>
                  <div className=" mt-10  ">
                    <button className='  max-md:w-32 max-md:text-xs  w-52 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700'>Admission Now</button>
                  </div>
              </div>
              
               
             
          </section>

          <section className=' w-5/6 m-auto'>
                  <section className=' '>
                    <Task_Card/>
                  </section>
                  <section  className=' mt-10 max-sm:mt-5 pb-10 '>
                      <VideoCard/>
                  </section>
                  <section className=' ' >
                      
                  </section>
        </section>
    </main>
  )
}

export default Home