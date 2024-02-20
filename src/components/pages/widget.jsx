import React from 'react'
import './widget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp, faCoins, faDollar, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"
const Widget = ({type})=> {
    let data;
    const amount = 100;
    switch(type)
    {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<FontAwesomeIcon icon={faUser} className='icon' style={{color:"crimson"}}/>,
                diff:20,
                to:"/list"
            };
            break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"View all orders",
                    icon:<FontAwesomeIcon icon={faTruckFast} className='icon' style={{color:"rgb(2)"}} />,
                    diff:42,
                    to:"/sales"
                };
                break;
                case "earning":
                    data={
                        title:"Earning",
                        isMoney:true,
                        link:"All earnings",
                        icon:<FontAwesomeIcon icon={faDollar} className='icon' style={{color:"green"}} />,
                        diff:78,
                        to:"/transaction"
                    };
                    break;
                    case "balance":
                        data={
                            title:"BALANCE",
                            isMoney:true,
                            link:"View balance",
                            icon:<FontAwesomeIcon icon={faCoins} className='icon' style={{color:"#E5C704 "}}/>,
                            diff:39,
                            to:"/balance"
                        };
                        break;
            default:
                break;
    }
    return(
        <motion.div className='widget' whileHover={{scale: 1.08, transition: { duration: 0.3 },}}>
            <div className='left'>
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "₹"}{amount}</span>
                <NavLink className="link" style={{textDecoration:"none"}} to={`${data.to}`}>{data.link}</NavLink>
            </div>
            <div className="right">
                <div className="percentage positive">
                <FontAwesomeIcon icon={faAngleUp} className='percenticon'/>
                {data.diff}%</div>
                {data.icon}
            </div>
        </motion.div>
    )
}
export default Widget;