import React from 'react'
import './home.scss';
import Sidebar from '../sidebar';
import Widget from './widget';
import Featured from './featured';
import Chart from './chart';
import TableComp from './table';
export default function Home(){
    
    return(
        <div className='home'>
<Sidebar/>
<div className='homecontainer'>
<div className="widgets">
    <Widget type="user" />
    <Widget type="order" />
    <Widget type="earning" />
    <Widget type="balance" />
</div>
<div className='charts'>
    <Featured/>
    <Chart aspect={2/1} title="Last 7 Months"/>
</div>
<div className="listContainer">
    <div className="listTitle"><p className='TitleHead'>Last Transaction</p></div>
    <TableComp/>
</div>
</div>
        </div>
    );
}