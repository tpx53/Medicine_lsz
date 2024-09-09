import React from 'react';
import './App.css';
import Tablelist from './components/tablelist/tablelist';

function App() {
  return (
    <div className="App">
      <div className='title_box'>
        <div className="title_dashboard_box">
          <div className='title_left_box'>
            <div className='leftbox1'>医朵朵数据汇总看板</div>
            <div className='leftbox2'></div>
            <div className='leftbox3'>Ydd Dashboard</div>
          </div>
          <div className='title_right_box'>最新更新时间：2024/8/31</div>
        </div>
      </div>
      <div className='dashboard'>
        <div className='dashboard_floor'>
          <Tablelist />
        </div>
      
      </div>
    </div>
  );
}

export default App;
