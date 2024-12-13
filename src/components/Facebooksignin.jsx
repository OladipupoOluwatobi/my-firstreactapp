import React from 'react'

const Facebooksignin = () => {
  return (
    <div className="flex-container">
    <div className="facebooklogo">
      <p>facebook</p>
      <p1>Facebook helps you connect and share with the people in your life</p1>
    </div>

    <div className="box">
      <form action="">
        <input type="text" placeholder='Email address or phone number' />
        <input type="password" placeholder='Password' />
        <button className='first'>Log in</button>
        <p3>Forgotten password?</p3>
        <hr /> <br />
        <button className="second">Create new account</button> <br />
      </form>

      <div className="last">
        <p4><b>Create a Page</b> for a celebrity, brand or business.</p4>
      </div>
    </div>
  </div>
  )
}

export default Facebooksignin