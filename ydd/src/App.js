import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title_box'>
        <div className="title_dashboard_box">
          <div className='title_left_box'>
            <div className='leftbox1'>医朵朵数据汇总看板2</div>
            <div className='leftbox2'></div>
            <div className='leftbox3'>Ydd Dashboard</div>
          </div>
          <div className='title_right_box'>最新更新时间：2024/8/31</div>
        </div>
      </div>
      <div className='dashboard'>
        <div className='dashboard_top'>
          <div className='basic_infor_title'>
            <div className='title_name'>基本信息</div>
          </div>
          <div className='basic_infor'>
            <div className='basic_infor_box'>
              <div className='basic_infor1'>1</div>
              <div className='basic_infor2'>2</div>
            </div>
          </div>
        </div>
        <div className='dashboard_floor'></div>
      
      </div>
    </div>
  );
}

export default App;
