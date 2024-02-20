import React, { useState,useRef,useEffect } from 'react'
import './topbar.css';
import Img from '../components/image/admin1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faBell,faCog,faMoon,faXmark, faBars, faSun } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkMode';
import { motion } from 'framer-motion';
function Topbar()
{
    const {dispatch} = useContext(DarkModeContext);
    const {darkMode} = useContext(DarkModeContext);
    let menuRef = useRef();
    let notifyRef = useRef();
    var seenNotification = false;
    const[open,setOpen]=useState(false);
    const[seen,setSeen]= useState(seenNotification);
    const[openNotification,setOpenNotification] = useState(false);
    var arry = ["Update Profile","Check Product"]
    useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target))
            {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown",handler);
    });
    useEffect(()=>{
        let handler = (e)=>{
            if(!notifyRef.current.contains(e.target))
            {
                seenNotification = true;
                setOpenNotification(false);
            }
        }
        document.addEventListener("mousedown",handler);
    });
    function handleClick()
    {
        setSeen(true);
        setOpenNotification(!openNotification);
    }
    return ( <>
    <nav class="main-nav-cont">
        <ul class='nav-bar'>
            <motion.li class='brand-name' whileHover={{scale:1.1}}><NavLink to="/Dashboard" style={{textDecoration:"none"}}><p>Dash Board</p></NavLink></motion.li>
            <input type='checkbox' id='check' />
            <span class="menu">
            <li onClick={()=> dispatch({type:"TOGGLE"})}>{(darkMode==false) ?(<FontAwesomeIcon icon={faMoon} style={{cursor:"pointer",color:"white"}}/>):(<FontAwesomeIcon icon={faSun} style={{cursor:"pointer",color:"yellow"}}/>)}</li>
            <li onClick={handleClick} ref={notifyRef} class="dropdownclick" whileTap={{rotate:7}}><NavLink to="/"><FontAwesomeIcon icon={faBell} /></NavLink>
            <div className={`activeNotifications ${seen? 'inactive':'active'}`}>2</div>
            <div className={`dropdown-options2 ${openNotification? 'active':'inactive'}`}>
            {arry.map((t)=>{
                return(<NavLink style={{color:"black",fontWeight:"500"}}>{t}</NavLink>);
            })}
              </div>
            </li>
            <li class="dropdownclick" onClick={()=>setOpen(!open)} ref={menuRef}>
                <motion.a whileTap={{rotate: 360}} transition={{duration: 0.3 }}><FontAwesomeIcon icon={faCog} style={{cursor:"pointer", color:"white"}} /></motion.a>
            <div className={`dropdown-options ${open? 'active':'inactive'}`}>
             <NavLink style={{color:"black",fontWeight:"500"}} to="/admin">Profile</NavLink>
             <NavLink style={{color:"black",fontWeight:"500"}} to="/">Messages</NavLink>
             <NavLink style={{color:"black",fontWeight:"500"}} to="/">Reports</NavLink>
              </div>
            </li>
            <li><NavLink to={"/admin"}><img className='topavatar' src={Img} alt='Profile'/></NavLink></li>
            <label for="check" class="close-menu"><FontAwesomeIcon icon={faXmark} style={{color:"black", fontSize:"2vh"}}/></label>
            </span>
            <label for="check" class="open-menu"><FontAwesomeIcon icon={faBars} style={{color:"white"}}/></label>
        </ul>
    </nav>
</>) ;
}
export default Topbar;