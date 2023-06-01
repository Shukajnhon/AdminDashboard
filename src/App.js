import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import Home from './containers/Home/Home';
import UserPage from 'containers/UserPage/UserPage';
import {LayoutAdmin} from 'components/Layout';

function App() {
  return (
    <div className="App">
      <LayoutAdmin>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-page" element={<UserPage></UserPage>}></Route>
        </Routes>
      </LayoutAdmin>
    </div>
  );
}

export default App;
