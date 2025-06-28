import React from 'react'
import InputField from '../Components/InputField'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
<div className='bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 h-screen w-screen flex justify-center items-center '>

       
        <div className='bg-[rgba(30,41,59,0.7)] backdrop-blur-sm  w-96 min-h-[440px] rounded-xl p-6 bg-[rgba(30,41,59,0.7)] backdrop-blur-sm w-96 min-h-[440px] rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105'>
            {/* Inner Card  */}
            <div className='flex flex-row items-center justify-center'>
                    <img src='./src/assets/symbol.jpg' className='h-16 w-14 rounded-full ml-8' />


                    
            </div>
           

            <h1 className='text-white text-2xl font-bold ml-10 mt-2'>Cyber Warrior Training</h1>

            <p className='text-slate-300 text-sm ml-8 mt-2'>Secure your access to begin your journey</p>



            <div className="bg-emerald-700/80 text-white px-4 py-2 rounded-md mt-4 text-sm shadow-md">
  <p className="font-semibold flex items-center gap-2">
    <span className="text-lg">🛡️</span> Authorized Personnel Only
  </p>
  <p className="text-xs ml-6 text-emerald-100">
    Social Engineering Defense Training
  </p>
</div>

            <InputField Page='Signup' />

            {/* <p className='mt-4 ml-24 text-white '>
              New user 
              <Link to='/signup' className='text-blue-400 hover:underline cursor-pointer'>Signup</Link></p> */}

              {/* What you'll learn */}
<div className="mt-6 text-white text-sm text-center">
  <h2 className="mb-3 text-slate-300">What you’ll learn:</h2>
  <div className="grid grid-cols-2 gap-2 justify-items-start px-6 text-left">
    <p className="flex items-center gap-2 text-white">
      ✅ Phishing Detection
    </p>
    <p className="flex items-center gap-2 text-white">
      ✅ Social Engineering
    </p>
    <p className="flex items-center gap-2 text-white">
      ✅ Password Security
    </p>
    <p className="flex items-center gap-2 text-white">
      ✅ Cyber Awareness
    </p>
  </div>
</div>

{/* Earn Badge Button */}

<p className='mt-4 ml-24 text-white '>
              Already user  
              
              <Link to='/' className='text-blue-400 hover:underline cursor-pointer'>Login</Link></p>

        </div>  


    </div>
  )
}

export default Signup