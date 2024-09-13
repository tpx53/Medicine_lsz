import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs, Button, Form } from 'antd';
import './tablelist.css'
import Toppage from '../toppage/toppage';
import CaseSummary from '../casesummary/casesummary';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const tabLabels = [
    '1.首页内容',
    '2.病例摘要',
];

const Tablelist: React.FC = () => {
    const [mode, setMode] = useState<TabPosition>('top');
    const [formTop] = Form.useForm(); // 使用 useForm 创建表单实例
    const [formSummary] = Form.useForm(); // 创建第二个表单实例

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const valuesTop = await formTop.validateFields(); // 获取表单的值
            const valuesSummary = await formSummary.validateFields(); // 校验第二个表单
            console.log('首页内容提交的值：', valuesTop);
            console.log('病例摘要提交的值：', valuesSummary);
        } catch (errorInfo) {
            console.log('验证失败:', errorInfo); // 如果验证失败，输出错误信息
        }
    };

    const chapterContents = [
        <Toppage form={formTop} />,
        <CaseSummary form={formSummary} />,
    ];

    return (
        <div className='tablelist'>
            <div className='tablelist_buttonarea'>
                <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                    <Radio.Button value="top">横排</Radio.Button>
                    <Radio.Button value="left">竖排</Radio.Button>
                </Radio.Group>
                <Button type="primary" onClick={handleSubmit} >提交</Button>
            </div>
            <Tabs
                defaultActiveKey="0"
                tabPosition={mode}
                className="my-tabs"
                items={tabLabels.map((label, index) => ({
                    label: label,
                    key: String(index),
                    disabled: false,
                    children: chapterContents[index] || null,
                }))}
            />
        </div>
    );
};

export default Tablelist;