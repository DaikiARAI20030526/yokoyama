import React from 'react';
import { Link } from "react-router-dom";
import "../styles.css";
const Top = () => {
  return (
    <div className='top-main'>
      <Link to="/products" className="image-container">
        <img className="front-side" src="img/TONGARI正面.jpg" alt="TONGARI Front" />
        <img className="back-side" src="img/TONGARI成分表.jpg" alt="TONGARI Back" />
        <img className="no-hover" src="img/TONGARI正面（色うす）.jpg" alt="TONGARI Hover" />
      </Link>
      
      <Link to="/products" className="image-container">
        <img className="front-side" src="img/TONGARI正面.jpg" alt="TONGARI Front" />
        <img className="back-side" src="img/TONGARI成分表.jpg" alt="TONGARI Back" />
        <img className="no-hover" src="img/TONGARI正面（色うす）.jpg" alt="TONGARI Hover" />
      </Link>

      <Link to="/products" className="image-container">
        <img className="front-side" src="img/TONGARI正面.jpg" alt="TONGARI Front" />
        <img className="back-side" src="img/TONGARI成分表.jpg" alt="TONGARI Back" />
        <img className="no-hover" src="img/TONGARI正面（色うす）.jpg" alt="TONGARI Hover" />
      </Link>

      
    </div>

    
  );
};

export default Top;
