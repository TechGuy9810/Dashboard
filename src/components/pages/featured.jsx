import React from 'react'
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV,faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'
export default function Featured(){
    
    return(
        <div className='featured'>
         <div className="top">
            <h1 className="title">
                Total Revenue
            </h1>
            <FontAwesomeIcon icon={faEllipsisV} style={{fontSize:"2vh",cursor:"pointer"}} />
         </div>
         <div className="bottom">
            <div className="featuredChart">
                     <CircularProgressbar value={70} text={"70%"} strokeWidth={5} styles={{path:{stroke: `#2AD9F1`},text:{fill:`black`}}}/>
            </div>
            <p className="title">Total sales Today</p>
            <p className="amount">₹2000</p>
            <p className="desc">The revenue generated today. And what ever the reason for that</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <FontAwesomeIcon icon={faAngleUp} style={{fontSize:"1.5vh"}} />
                        <div className="resultAmount">₹700,000</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"1.5vh"}} />
                        <div className="resultAmount">₹12,00</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <FontAwesomeIcon icon={faAngleUp} style={{fontSize:"1.5vh"}} />
                        <div className="resultAmount">₹34,000</div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
}