import React from 'react'

export default function Signup() {
  return (
    <div>
    <form>
        <input type='text' placeholder='First Name' id='fname'/>
        <input type='text' placeholder='Last Name' id='lname'/>
        <input type='email' placeholder='name@email.com' id='email'/>
        <input type='password' placeholder='password' id='password'/>
        <input type='password' placeholder='password' id='password'/>

        <button type='submit'>Sign in</button>
    </form>
      
    </div>
  )
}
