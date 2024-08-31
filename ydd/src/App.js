import './App.css';

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
          <div className='title_right_box'>最新更新时间：2024/8/30</div>
        </div>
      </div>
      <div className='dashboard'>
        <div className='body_dashboard_floor1'>
          <div className='floor1_box1'>
            <div className='floor1_box1_top'>
              1
            </div>
            <div className='floor1_box1_down'>
              2
            </div>
          </div>
          <div className='floor1_box2'>
            <div className='component_title'>2023年1-12月PCS数分布（单位：件）</div>
            3
          </div>
          <div className='floor1_box3'>
            <div className='component_title'>2023年1-12月订单数量分布（单位：张）</div>
            4
          </div>
        </div>
        <div className='body_dashboard_floor2'>

        </div>
      </div>
    </div>
  );
}

export default App;
