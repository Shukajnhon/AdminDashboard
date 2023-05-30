import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import Home from './containers/Home/Home';
import UserPage from 'containers/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user-page" element={<UserPage></UserPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
