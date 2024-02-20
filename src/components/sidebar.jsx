import React from 'react'
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faChartLine,faArrowTrendUp,faUser,faShop,faDollar,faChartBar,faEnvelope,faMessage,faSuitcase,faComment,faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
export default function Sidebar(){
    return(
        <div className='sidebar'>
      <div className="sidebarWrap">
      <div className="sidebarMenu-phone">
      <NavLink to='/' className="Linkis">
                    <FontAwesomeIcon icon={faBars} className='sidebaricon' /></NavLink>
      </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem">
                <NavLink to='/' className="Linkis">
                    <FontAwesomeIcon icon={faHome} className='sidebaricon' />
                    Home</NavLink>
                </li>
                <li className="sidebarListItem">
                <NavLink to='/analytics' className="Linkis">
                <FontAwesomeIcon icon={faChartLine} className='sidebaricon' />
                    Analytics</NavLink>
                </li>
                <li className="sidebarListItem">
                <NavLink to='/sales' className="Linkis">
                <FontAwesomeIcon icon={faArrowTrendUp} className='sidebaricon' />
                    Sales</NavLink>
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem">
                <NavLink to='/list' className="Linkis">
                <FontAwesomeIcon icon={faUser} className='sidebaricon' />
                    Users</NavLink>
                </li>
                <li className="sidebarListItem">
                <NavLink to='/product' className="Linkis">
                <FontAwesomeIcon icon={faShop} className='sidebaricon' />
                    Products</NavLink>
                </li>
                <li className="sidebarListItem">
                <NavLink to='/transaction' className="Linkis">
                <FontAwesomeIcon icon={faDollar} className='sidebaricon' />
                    Transactions</NavLink>
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem">
                <NavLink to='/asdf' className="Linkis">
                <FontAwesomeIcon icon={faEnvelope} className='sidebaricon' />
                    Mail</NavLink>
                </li>
                <li className="sidebarListItem">
                <NavLink to='/asd' className="Linkis">
                <FontAwesomeIcon icon={faComment} className='sidebaricon' />
                    Feedback</NavLink>
                
                </li>
                <li className="sidebarListItem">
                <NavLink to='/asdf' className="Linkis">
                <FontAwesomeIcon icon={faMessage} className='sidebaricon' />
                    Messages</NavLink>
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Staff</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem">
                <NavLink to='/balance' className="Linkis">
                <FontAwesomeIcon icon={faSuitcase} className='sidebaricon' />
                    Manage</NavLink>
                </li>
                <li className="sidebarListItem">
                <NavLink to='/asdf' className="Linkis">
                <FontAwesomeIcon icon={faChartBar} className='sidebaricon' />
                    Report</NavLink>
                </li>
            </ul>
        </div>
      </div>
        </div>
    )
}