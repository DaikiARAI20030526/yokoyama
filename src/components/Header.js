import React from 'react'
import "../styles.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div><Link to="/"><img src="img/main_logo.svg" id Name="header" className="logo" /></Link></div>
    
  )
}

export default Header