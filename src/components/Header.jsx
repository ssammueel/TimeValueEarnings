import React from 'react'
import './cm_css/Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>

    <div className="main-header">

        <div className="logo">CCL</div>
        <div className="header-elements">
            <ul>
                <li><Link to="/year">Year</Link></li>
                <li><Link to="/month">Month</Link></li>
                <li><Link to="/Week">Week</Link></li>
                <li><Link to="/day">Day</Link></li>
                <li><Link to="/Hour">Hour</Link></li>
                <li><Link to="/Minute">Minute</Link></li>
            </ul>
        </div>
        
    </div>
    
    </>
  )
}
