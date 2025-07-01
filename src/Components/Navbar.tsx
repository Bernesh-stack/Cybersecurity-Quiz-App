import React, { useState } from 'react'
import userImage from "../assets/user.jpeg"
import { supabase } from '../supabaseClient'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import ShinyText from './ShinyText/ShinyText'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
const navigate = useNavigate()
  const Logout = async()=>{
    const {error} = await supabase.auth.signOut()
    if(error){
      toast.error("Error logging out")
    }
    else{
      toast.success("Logged out successfully")
      navigate("/")
    }
  }

  return (
    <div className='w-screen bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 flex flex-row justify-between text-white items-center h-16 px-6'>
      <h1 className='text-lg font-semibold'>Cyber Security Training</h1>

      <div className='flex flex-row items-center gap-8 relative'>
      <ShinyText className='cursor-pointer'>Home</ShinyText>
        <ShinyText className='cursor-pointer'>About</ShinyText>


        <div
          className='relative'
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <img
            src={userImage}
            className='w-10 h-10 rounded-full cursor-pointer'
            alt='User'
            onClick={Logout}
          />


          <div
            className={`absolute right-0 mt-2 bg-white text-black rounded shadow-lg px-4 py-2 z-50 transition-all duration-200 ${
              showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
