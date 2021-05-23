import React from 'react'
import './oauth.css'
import { Button } from 'element-react';
import 'element-theme-default';

function Oauth() {
  return (     
    <div className="containerButton">
      <h1 className="tituloTrabalho">Trabalhando com o OAuth 2.0</h1> 
      <Button type="primary" className="buttonColor">Faça Login com Facebook</Button>
    </div>
  )
}

export default Oauth
