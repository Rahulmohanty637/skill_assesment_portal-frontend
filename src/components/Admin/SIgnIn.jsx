import React, { useState } from 'react'
import axios from 'axios'
import Heading from '../Heading'

import InputBox from '../InputBox'
import Button from '../Button'
import BottomWarning from '../BottonWarning';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handelsignin= async()=>{
        try {
     const response= await axios.post("api",{
        username,
        password
     })
     if(response){
   
    toast.success(`welcome back ${response.data.username}`)
     navigate("/dashboard")
     }
    } catch (error) {
           console.log(error) 
           toast.error("please provid valid credintial")

    }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className=' bg-blue-200  p-6 rounded-lg w-[400px] h-[400px]'>
            <div className='flex flex-col w-full h-full justify-between'>
                <Heading label={"Admin SignIn"} />
                <InputBox  label={"Username"} placeholder={"ajit@gmail.com"} onChange={(e)=>{setUsername(e.target.value)}} />
                <InputBox  label={"password"} placeholder={""} onChange={(e)=>{setPassword(e.target.value)}} />
                <div className='pt-4'>
                    <Button name={"Signin"} onClick={()=>{handelsignin()}} />
                </div>
                <BottomWarning label={"Don't have account?"} buttonText={"Sign up"} to={"/signup"}  />
            </div>
        </div>
        </div>
    
  )
}

export default Signin