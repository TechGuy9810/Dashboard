import * as React from 'react';
import { BarChart} from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { axisClasses } from '@mui/x-charts';
import Chart from './chart';
import './analytics.scss';

import Sidebar from '../sidebar.jsx';
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
    Trimer: 59,
    Keyboard: 57,
    Sapines: 86,
    Laptop: 21,
    month: 'Jan',
  },
  {
    Trimer: 50,
    Keyboard: 52,
    Sapines: 78,
    Laptop: 28,
    month: 'Feb',
  },
  {
    Trimer: 47,
    Keyboard: 53,
    Sapines: 106,
    Laptop: 41,
    month: 'Mar',
  },
  {
    Trimer: 54,
    Keyboard: 56,
    Sapines: 92,
    Laptop: 73,
    month: 'Apr',
  },
  {
    Trimer: 57,
    Keyboard: 69,
    Sapines: 92,
    Laptop: 99,
    month: 'May',
  },
  {
    Trimer: 60,
    Keyboard: 63,
    Sapines: 103,
    Laptop: 144,
    month: 'June',
  },
  {
    Trimer: 59,
    Keyboard: 60,
    Sapines: 105,
    Laptop: 319,
    month: 'July',
  },
  {
    Trimer: 65,
    Keyboard: 60,
    Sapines: 106,
    Laptop: 249,
    month: 'Aug',
  },
  {
    Trimer: 51,
    Keyboard: 51,
    Sapines: 95,
    Laptop: 131,
    month: 'Sept',
  },
  {
    Trimer: 60,
    Keyboard: 65,
    Sapines: 97,
    Laptop: 55,
    month: 'Oct',
  },
  {
    Trimer: 67,
    Keyboard: 64,
    Sapines: 76,
    Laptop: 48,
    month: 'Nov',
  },
  {
    Trimer: 61,
    Keyboard: 70,
    Sapines: 103,
    Laptop: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}`;

export default function Analytics() {
  return (
    <div className="mainchartContainer">
      <Sidebar/>
    <div className="chartContainer">
      <div className="chartContainerDiv">
        <div className="top">
        <div className="barchart">
      <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'Trimer', label: 'Trimer', valueFormatter },
        { dataKey: 'Keyboard', label: 'Keyboard', valueFormatter },
        { dataKey: 'Sapines', label: 'Sapines', valueFormatter },
        { dataKey: 'Laptop', label: 'Laptop', valueFormatter },
      ]}
      {...chartSetting}
    />
      </div>
      <div className="PieChart">
      <h2 className="headingPieChart">Most sold items % wise</h2>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 40, label: 'Laptop' },
            { id: 1, value: 30, label: 'Sapiens' },
            { id: 2, value: 30, label: 'Trimer' },
          ],
        },
      ]}
      width={400}
      height={250}
    />
      </div>
        </div>
        <Chart aspect={3/1} title="Last 7 Months"/>
      </div>
    </div>
    </div>

  );
}