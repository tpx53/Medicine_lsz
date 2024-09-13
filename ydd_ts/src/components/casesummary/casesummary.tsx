// CaseSummary.tsx
import React from 'react';
import { Form, Input } from 'antd';
import './casesummary.css';

interface CaseSummaryProps {
    form: any; // 接受父组件传递的 form 实例
}

const CaseSummary: React.FC<CaseSummaryProps> = ({ form }) => {
    return (
        <div className='casesummary'>
            <Form form={form}>
                <Form.Item name="summary1" label="病例摘要 1">
                    <Input />
                </Form.Item>
                <Form.Item name="summary2" label="病例摘要 2">
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
};

export default CaseSummary;
