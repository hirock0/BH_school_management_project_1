'use client'

import { useState } from "react"

const Admin_Pannel = () => {
  const[linkValue,setLinkValue]=useState("")
  const onLink = ()=>{
    const replaceLink = linkValue.replace("youtu.be","youtube.com/embed")
    console.log(replaceLink)
  }

  return (
    <main className=' h-screen pt-24'>
        <div className=" flex flex-col items-center justify-center h-full w-full">
          <input value={linkValue} onChange={(e)=>setLinkValue(e.target.value)} type="text" name='link' placeholder='link' className=" h-20 w-full pl-5 text-black"/>
          <button onClick={onLink} className=" mt-5 border w-52 h-8 rounded-md bg-red-400">Submitr</button>
        </div>
    </main>
  )
}

export default Admin_Pannel