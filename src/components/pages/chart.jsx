import React from 'react'
import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Jan',
      Users: 4000,
      Sales: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      Users: 3000,
      Sales: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      Users: 2000,
      Sales: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      Users: 2780,
      Sales: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      Users: 1890,
      Sales: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      Users: 2390,
      Sales: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      Users: 3490,
      Sales: 4300,
      amt: 2100,
    },
  ];
export default function Chart({aspect,title}){
    
    return(
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers)" />
  <Area type="monotone" dataKey="Sales" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSales)" />
</AreaChart>
      </ResponsiveContainer>
        </div>
    );
}