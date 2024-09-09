import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import './tablelist.css'

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Tablelist : React.FC = () => {
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

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
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default Tablelist;