import React from 'react'
import './balance.scss';
import Sidebar from '../sidebar.jsx';
import { BarChart} from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
const chartSetting = {
    yAxis: [
      {
        label: 'Sale Quantity',
      },
    ],
    
    width: 650,
    height: 350,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  };
  const dataset = [
    {
      Loss: 29,
      Profit: 57,
      Sales: 66,
      month: 'Jan',
    },
    {
      Loss: 30,
      Profit: 52,
      Sales: 68,
      month: 'Feb',
    },
    {
      Loss: 37,
      Profit: 53,
      Sales: 70,
      month: 'Mar',
    },
    {
      Loss: 64,
      Profit: 56,
      Sales: 82,
      month: 'Apr',
    },
    {
      Loss: 57,
      Profit: 69,
      Sales: 72,
      month: 'May',
    },
    {
      Loss: 60,
      Profit: 63,
      Sales: 83,
      month: 'June',
    },
    {
      Loss: 59,
      Profit: 60,
      Sales: 75,
      month: 'July',
    },
    {
      Loss: 65,
      Profit: 60,
      Sales: 86,
      month: 'Aug',
    },
    {
      Loss: 31,
      Profit: 51,
      Sales: 85,
      month: 'Sept',
    },
    {
      Loss: 60,
      Profit: 65,
      Sales: 87,
      month: 'Oct',
    },
    {
      Loss: 37,
      Profit: 64,
      Sales: 76,
      month: 'Nov',
    },
    {
      Loss: 41,
      Profit: 70,
      Sales: 73,
      month: 'Dec',
    },
  ];    
const valueFormatter = (value) => `${value}`;
export default function Balance(){
    return(
        <div className='MainTransactionContainer'>
            <Sidebar/>
            <div className='TransactionContainer'>
                <div className="SalesContainer">
                <div className='featured'>
         <div className="bottom">
            <p className="title">Available Balance</p>
            <p className="amount">₹2000k</p>
            <div className="summary">
            </div>
         </div>
        </div>
                <div className="barchart">
      <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'Loss', label: '% Loss', valueFormatter },
        { dataKey: 'Profit', label: '% Profit', valueFormatter },
      ]}
      {...chartSetting}
    />
      </div>
                </div>
            </div>
        </div>
    );
}