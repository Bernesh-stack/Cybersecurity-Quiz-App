import  { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
// Remove or comment out this line if not used:
import { supabase } from '../supabaseClient'
import { toast } from "sonner"

const Inputfield = ({Page}:{Page:string}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  const handleLogin = async () => {

    if(!username || !password) {
        toast.error("Please enter a username and password")
        return
      }
    if(Page === 'Signup'){
        const { error} = await supabase.auth.signUp({
            email: username,
            password: password,
        })
        if(error){
            toast.error(error.message)
        }else{
            toast.info("Please check your email for verification")
            
        }
    }
    else{
        const {error} = await supabase.auth.signInWithPassword({
            email: username,
            password: password,    
        })
        if(error){
            toast.error(error.message)
        }else{
            toast.success("Successfully Login")
            navigate('/home')
        }
    }

    // TODO: Add validation or API call here
  }

  return (
    <div className="space-y-5 mt-6">

      {/* Username Field */}
      <div className="space-y-1">
        <Label htmlFor="username" className="text-white text-sm">Email</Label>
        <Input
          id="username"
          type="email"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400"
        />
      </div>

      {/* Password Field */}
      <div className="space-y-1">
        <Label htmlFor="password" className="text-white text-sm">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="button" // ✅ prevent default form submission
        onClick={handleLogin}
        className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90"
      >
        <span className="mr-2">🔐</span> {Page}
      </Button>

    </div>
  )
}

export default Inputfield
