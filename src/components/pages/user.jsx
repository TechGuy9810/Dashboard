import React from 'react'
import './user.scss';
import Sidebar from '../sidebar.jsx';
import img from '../image/admin1.png';
import Chart from './chart';
import Table from './table'
export default function User(){
    return(
        <div className='user'>
            {/* This is sidebar component */}
            <Sidebar/>
            <div className='userContainer'>
             <div className="top">
                <div className="left">
                    <div className="item">
                        <div className="img">
                        <img src={img} className='itemImg'/>
                        </div>
                        <div className="name">
                        <h1 className="itemtitle">Abhishek Singh</h1>
                        </div>
                    </div>
                    <div className="details">
                        <div className="detailItem">
                            <span className="itemKey">Email:</span>
                            <span className="itemValue">abhishek981037@gmail.com</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Phone:</span>
                            <span className="itemValue">7303471705</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Linkedin:</span>
                            <span className="itemValue">abhishek-for-u</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {/* this is chart component imported */}
                    <Chart aspect={5/1} title="User Spending in last 6 Months"/>
                </div>
             </div>
             <div className="bottom">
                <h1 className="Transactions">Last Transaction Information</h1>
                {/* This is table component */}
                <Table/>
             </div>
            </div>
        </div>
    );
}