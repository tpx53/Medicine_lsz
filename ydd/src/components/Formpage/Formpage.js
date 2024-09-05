import React from 'react';
import './Formpage.css'
import { Form, DatePicker, Button } from 'antd';

const Formpage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values: ', values)
        alert('Form values: ' + values.datePicker_treat.format('YYYY-MM-DD'))
        alert('Form values: ' + values.datePicker_dath.format('YYYY-MM-DD'))
        // if (values.datePickerValue) {
        //     const dateValue = values.datePicker_treat.format('YYYY-MM-DD'); // 如果是 moment 对象，可以这样格式化
        //     alert('Form values: ' + dateValue);
        // } else {
        //     alert('没选日期');
        // }
    }

    return (
        <div className='formpage'>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="datePicker_treat" label='就诊日期'>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="datePicker_dath" label='患者出生日期'>
                    <DatePicker />
                </Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Formpage;