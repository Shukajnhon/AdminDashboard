import React from 'react';
import LineChart from 'components/LineChart';
import PieChart from 'components/PieChart';

const Home = () => {
  return (
    <div className="Home">
      <LineChart></LineChart>
      <PieChart></PieChart>
    </div>
  );
};

export default Home;
