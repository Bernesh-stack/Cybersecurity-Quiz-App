import React from 'react'
import  InputField  from '../Components/InputField'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
<div className='bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 h-screen w-screen flex justify-center items-center '>

        {/* Main div which is to be used for the login page */}
        <div className='bg-[rgba(30,41,59,0.7)] backdrop-blur-sm  w-96 min-h-[440px] rounded-xl p-6 bg-[rgba(30,41,59,0.7)] backdrop-blur-sm w-96 min-h-[440px] rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105'>
            {/* Inner Card  */}
            <div className='flex flex-row items-center justify-center'>
                    <img src='./src/assets/symbol.jpg' className='h-16 w-14 rounded-full ml-8' />
                    
            </div>
            {/* Image */}
            <h1 className='text-white text-2xl font-bold ml-10 mt-2'>Cyber Warrior Training</h1>

            <p className='text-slate-300 text-sm ml-8 mt-2'>Secure your access to begin your journey</p>

            <InputField Page='login' />

            <p className='mt-4 ml-24 text-white '>
              New user 
              <Link to='/signup' className='text-blue-400 hover:underline cursor-pointer'>Signup</Link></p>

        </div>  


    </div>
  )
}

export default Login