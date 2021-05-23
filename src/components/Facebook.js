import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const ReactFacebookLogin = () => {
  const [ name, setName ] = useState("");
  const componentClicked = (data) => {
    console.log("data", data);
  }
  
  const responseFacebook = response => {
    console.log(response.name);
    setName("Seja bem vindo(a) " + response.name)
  }
  return (
    <div>
      <FacebookLogin
      appId="key facebook"
      autoLoad={false}
      fields="name,email,picture"
      onClick= {componentClicked}
      callback={responseFacebook} 
      />
      <h1>{name}</h1>
    </div>
  )
}

export default ReactFacebookLogin;