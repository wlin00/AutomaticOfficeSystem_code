// Demo2 : React-fun函数组件， antd表单验证实例（getFieldDecorator）

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Navbar from '../../laout/Navbar'
import Child from './Child/Child'
import '../Tool2/Tool2.scss'
import {Button, message} from 'antd'

const Tool2 = () =>  {
    
  const [name, setName] = useState('Tom2')
  // ref获取子组件引用
  let childRef = useRef()
    
  const childValid =  useCallback(async () => {
    console.log(childRef)
   if(childRef && childRef.handleSubmit) {
     let res = await childRef.handleSubmit()
     if(!res) {
       message.warning("请检查信息填写，修改后再提交");
       return
     } else {
      message.success('ok')
      console.log(childRef.form.getFieldValue('password'))
      
     }
    
   }
  },[childRef])

  return ( 
      <div>
          <Navbar title="测试Demo" />
          <div className="Tool2">
            <Child 
            initName={name} 
            // ref={childRef} 
            wrappedComponentRef={(inst)=>childRef = inst}
            />  
            <div style={{marginTop:'10px',background:'#fff'}}>
              <Button onClick={childValid} type="primary">parent-提交</Button>
            </div>
          </div>
        
      </div>
  );
}

export default Tool2;