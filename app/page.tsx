import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
        <div className="box">
             <Image src="/images/download.jpg" alt="Facebook" width={400} height={200}/>
        <div className="title-box">
            
            
           
            <h1>
            
            </h1>
            <p>FAMOUS SOCIAL MEDIA PLATFORM </p>
        </div>
        <div className="form-box">
            <form>
                <input type="text" placeholder="Email address or phone number"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Log In</button>
                <form id="signup-form">
                <button type="submit">Sign Up</button>
                </form>
                <a href="#">Forgotten Password</a>
            <div className="create-btn">
                <a href='#'>Create New Account</a>
            </div>
            </form>
        </div>
        </div>
  )
}

export default page
