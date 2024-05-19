import React, { useState } from 'react';
import InputBox from '../InputBox';
import Button from '../Button';
import Heading from '../Heading';
import { useNavigate } from 'react-router-dom';
import BottomWarning from '../BottonWarning';
const Signup = () => {
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
 

    const handelsignup = async () => {
       
        try {
           const resp= await axios.post("", {
                
            });
            if(resp){
              toast.success("User Created sucessfully")  
             navigate("/signin")
            }
        } catch (error) {
            if (error.response.status === 409) {
                console.error("Username or email is already in use.");
            } else {
                console.error("Error:", error);
            }
        }
    };
    return (
       <div className='flex justify-center items-center h-screen'>
        <div className='bg-blue-200  p-6 rounded-lg w-[400px] h-[400px]'>
         <Heading label={" Admin Signup"} />
        <InputBox  label={"Name"} placeholder={"Ajit"} onChange={(e)=>{setName(e.target.value)}} />
        <InputBox  label={"Username"} placeholder={"ajit@gmail.com"} onChange={(e)=>{setUsername(e.target.value)}} />
        <InputBox  label={"password"} placeholder={""} onChange={(e)=>{setPassword(e.target.value)}} />
        <div className='pt-4'>
                    <Button name={"Sign Up"} onClick={()=>{handelsignup()}} />
                </div>
                <BottomWarning label={"Don't have account?"} buttonText={"Sign In"} to={"/signin"}  />
        </div>
       </div>
    );
};

export default Signup;



