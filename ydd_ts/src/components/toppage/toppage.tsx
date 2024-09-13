import React from 'react';
import { Form, Input } from 'antd';
import './toppage.css';

interface ToppageProps {
    form: any;
}

const Toppage: React.FC<ToppageProps> = ({ form }) => {

    return (
        <div className='toppage'>
            <Form form={form}>
                <Form.Item name="input1" label="输入框 1">
                    <Input />
                </Form.Item>
                <Form.Item name="input2" label="输入框 2">
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
};

export default Toppage;