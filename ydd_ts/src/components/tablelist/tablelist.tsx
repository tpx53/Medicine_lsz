import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import './tablelist.css'

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Tablelist: React.FC = () => {
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const tabLabels = [
    '标签 1',
    '标签 2',
    '标签 2',
    //...继续添加其他标签名称
    '标签 30',
  ];

  return (
    <div className='tablelist'>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">横排</Radio.Button>
        <Radio.Button value="left">竖排</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="0"
        tabPosition={mode}
        className="my-tabs"
        items={tabLabels.map((label, index) => ({
          label: label,
          key: String(index),
          disabled: false,
          children: `Content of tab ${label}`,
        }))}
      />
    </div>
  );
};

export default Tablelist;