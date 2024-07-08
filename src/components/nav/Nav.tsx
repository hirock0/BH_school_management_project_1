"use client"
import Style from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AR_One_Sans } from 'next/font/google'
const ar_one_sans = AR_One_Sans({
  weight:["400"],
  subsets:["latin"]
})

const Nav = () => {


    const [navmenu,setNavMenu]=useState(false);


    // windowEvent_start

    const WindowClickingEvent = ()=>{
      
      const MenulistBtn = document.querySelector(".navMenuListBtn ") as HTMLElement;
      const Menulist = document.querySelector(".navMenuList") as HTMLElement;
      document.addEventListener("click",(e:any)=>{
          if(!Menulist.contains(e.target) && !MenulistBtn.contains(e.target)){
            setNavMenu(false)
          }
      })
    }

    useEffect(()=>{
      WindowClickingEvent()
    },[])

  return (
    <nav className={`
      ${ar_one_sans.className}
     h-24 
      fixed left-0 top-0 w-full
        flex items-center justify-between
         pr-10 pl-10 max-sm:pl-5 max-sm:pr-5
          backdrop:filter backdrop-blur-3xl
          max-sm:text-xs z-50
      `}>
        <section className=' flex items-center gap-2'>
          <div className="w-8 h-8">
            <Image src={"/all_png/gradutaion_cap_2.png"} alt='graduate' width={500} height={500}/>
          </div>
          <h1 className=' text-xl'><span className=' text-yellow-300'>B.H</span> School</h1>
        </section>
        <section className=' text-sm lg:text-base flex items-center justify-center '>
            <ul className=' flex items-center gap-5 max-md:gap-10 max-sm:gap-5'>
                <ul className={`${Style.TopNavUl} flex items-center gap-5 max-md:hidden`}>
                  <Link href={"/"}><li>Home</li></Link>
                    <li className=' flex items-center relative'>
                      <span>Courses</span>
                      <Image src={"/all_svg/arrow-down-s-fill.svg"} alt='downArrow' width={20} height={20}/>
                        <section className={`${Style.Courses} hidden  absolute top-5  pt-9`}>
                            <ul className=' w-52 p-5  rounded-b-md'>
                              <Link href={""}><li>Courser1</li></Link>
                              <Link href={""}><li>Courser2</li></Link>
                              <Link href={""}><li>Courser3</li></Link>
                              <Link href={""}><li>Courser4</li></Link>
                            </ul>
                        </section>
                    </li>
                

                  <li  className=' flex items-center relative'>
                  <span>Pages</span>
                  <Image src={"/all_svg/arrow-down-s-fill.svg"} alt='downArrow' width={20} height={20}/>
                    <section className={`${Style.Pages}  absolute top-5 hidden pt-9`}>
                      <ul className=' w-52 p-5  rounded-b-md'>
                        <Link href={""}><li>Page1</li></Link>
                        <Link href={""}><li>Page2</li></Link>
                        <Link href={""}><li>Page3</li></Link>
                        <Link href={""}><li>Page</li></Link>
                      </ul>
                    </section>
                  </li>
                  <li className=' flex items-center relative'>
                    <span>Gallery</span>
                    <Image src={"/all_svg/arrow-down-s-fill.svg"} alt='downArrow' width={20} height={20}/>
                    <section className={`${Style.Gallery}  absolute top-5 hidden pt-9`}>
                      <ul className=' w-52 p-5  rounded-b-md'>
                        <Link href={""}><li>Gallery1</li></Link>
                        <Link href={""}><li>Gallery2</li></Link>
                        <Link href={""}><li>Gallery3</li></Link>
                        <Link href={""}><li>Gallery3</li></Link>
                      </ul>
                    </section>
                    </li>
                  <Link href={""}><li>Contact</li></Link>
                  <Link href={"/user/login"}><li>Signup</li></Link>
                </ul>
                
                
                <li className=' '>
                  <div className=" w-4 h-4">
                      <Image src={"/all_svg/search-line.svg"} alt='search' width={500} height={500}/>

                  </div>
                </li>
                <li>
                <div className=" w-5 h-5">
                      <Image src={"/all_svg/sun-line.svg"} alt='search' width={500} height={500}/>

                  </div>
                
                </li>

                
                  
                  <li className={` md:hidden`}>
                      <div onClick={()=>setNavMenu(()=>!navmenu)} className=" navMenuListBtn w-5 h-5 cursor-pointer">
                          <Image src={"/all_svg/menu-5-fill.svg"} alt='search' width={500} height={500}/>
                      </div>
                  {/* side_nav_start */}
                        <ul  className={` ${!navmenu?" navMenuList translate-x-full":" translate-x-0"} ${Style.SideNavMenuUl} transition-all fixed top-24 right-0 bg-slate-800/95 rounded-b-sm  w-52  p-5 flex flex-col gap-5`}>
                          <Link href={"/"}>
                            <li>Home</li>
                          </Link>
                          
                            <li>
                            <section className=' flex'>
                                    <span className='cursor-pointer'>Courses</span>
                                    <Image src={"/all_svg/arrow-down-s-fill.svg"} alt='downArrow' width={20} height={20}/>
                                  </section>
                                  <section className={`${Style.SideUlCourses} hidden  `}>
                                      <ul className='  p-5  rounded-md '>
                                        <Link href={""}><li>Courses1</li></Link>
                                        <Link href={""}><li>Courses2</li></Link>
                                        <Link href={""}><li>Courses3</li></Link>
                                        <Link href={""}><li>Courses4</li></Link>
                                      </ul>
                                  </section>
                            </li>
                         

                          <li  className='  '>
                                  <section className=' flex'>
                                    <span className='cursor-pointer'>Gallery</span>
                                    <Image src={"/all_svg/arrow-down-s-fill.svg"} alt='downArrow' width={20} height={20}/>
                                  </section>
                                  <section className={`${Style.SideUlGallery}  hidden`}>
                                      <ul className='  p-5 rounded-md '>
                                        <Link href={""}><li>Gallery1</li></Link>
                                        <Link href={""}><li>Gallery2</li></Link>
                                        <Link href={""}><li>Gallery3</li></Link>
                                        <Link href={""}><li>Gallery3</li></Link>
                                      </ul>
                                  </section>
                            </li>
                          
                          <li  className='  '>
                                  <section className=' flex'>
                                    <span className='cursor-pointer'>Pages</span>
                                    <Image src={"/all_svg/arrow-down-s-fill.svg"} alt='downArrow' width={20} height={20}/>
                                  </section>
                                  <section className={`${Style.SideUlPages}  hidden`}>
                                      <ul className=' rounded-md p-5  '>
                                        <Link href={""}><li>Page1</li></Link>
                                        <Link href={""}><li>Page2</li></Link>
                                        <Link href={""}><li>Page3</li></Link>
                                        <Link href={""}><li>Page</li></Link>
                                      </ul>
                                  </section>
                            </li>
                            
                            <Link href={""}><li>Contact</li></Link>
                            <Link href={"/user/signup"}><li>Signup</li></Link>
                        </ul>
                  </li>
                
                

            </ul>
        </section>
    </nav>
  )
}

export default Nav