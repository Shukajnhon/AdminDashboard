import React from 'react';
import {RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';

const data = [
  {
    name: 'Bank',
    uv: 8.22,
    pv: 9800,
    fill: '#F3BA2F',
  },
  {
    name: 'Token',
    uv: 26.69,
    pv: 4567,
    fill: '#54C2C1',
  },
  {
    name: 'Cash',
    uv: 15.69,
    pv: 1398,
    fill: '#0F0F3F',
  },
  {
    name: 'Stock',
    uv: 31.47,
    pv: 2400,
    fill: '#9020E9',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const PieChart = () => {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius="5%"
      outerRadius="60%"
      barSize={15}
      data={data}
      startAngle={90}
      endAngle={450}
    >
      <RadialBar
        minAngle={15}
        // label={{position: 'insideStart', fill: '#fff'}}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>

    // <ResponsiveContainer width="100%" height="100%">
    //   <RadialBarChart
    //     cx="50%"
    //     cy="50%"
    //     innerRadius="10%"
    //     outerRadius="80%"
    //     barSize={10}
    //     data={data}
    //   >
    //     <RadialBar
    //       minAngle={15}
    //       label={{position: 'insideStart', fill: '#fff'}}
    //       background
    //       clockWise
    //       dataKey="uv"
    //     />
    //     <Legend
    //       iconSize={10}
    //       layout="vertical"
    //       verticalAlign="middle"
    //       wrapperStyle={style}
    //     />
    //   </RadialBarChart>
    // </ResponsiveContainer>
  );
};

export default PieChart;
