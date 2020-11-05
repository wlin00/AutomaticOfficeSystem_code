// Demo2 : React-fun函数组件， antd表单验证实例（getFieldDecorator）

import React, { useState, useCallback, useRef, useEffect } from 'react'
import {Form, Button, Select, Input, message} from 'antd'
import '../Child/Child.scss'

const {Option} = Select

const ChildInit = (props) =>  {
  const {initName} = props
    

    const handleSubmit = useCallback(async () => {
        try{
            await props.form.validateFields((err, value) => {
                if(!err) {
                  message.success('success')
                  console.log('succ', value)
                }
            })
        } catch (err) {
            console.log('er',err)
        }    
    })

    const handleSelect= useCallback((e) => {
        props.form.setFieldsValue({
            username: `Hi ${e === 'male' ? '男人' : '女人'}`
        })
    })

    const {getFieldDecorator} = props.form
    
    return ( 
      <Form
          className="Child"
          labelCol={{ span:2 }} 
          wrapperCol={{ span:8 }}    
      >
          <Form.Item label="用户名">
          {
              getFieldDecorator('username',{
                rules: [{ required: true, message: '请输入用户名' }],
                initialValue: initName ? initName : ''  
              })(<Input allowClear placeholder="请输入用户名" />) 
          }
          </Form.Item>

          <Form.Item label="密码">
          {
              getFieldDecorator('password',{
                  rules: [{ required: true, message: '请输入密码' }]
              })(<Input allowClear type="password" placeholder="请输入密码" />) 
          }
          </Form.Item>   

          <Form.Item label="联动">
          {
              getFieldDecorator('select',{
                  rules: [{ required: true, message: '请选择类型' }]
              })(<Select 
                  onChange={handleSelect}
                  allowClear
                  placeholder="请选择类型" 
                  >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>

              </Select>) 
          }
          </Form.Item> 
          <Form.Item style={{textAlign:'left'}} wrapperCol={{ span:8, offset:2 }}>
          <Button type="primary" onClick={handleSubmit}>提交</Button>
          </Form.Item>
      </Form>
    );
}

const Child = Form.create()(ChildInit);
 
export default Child;