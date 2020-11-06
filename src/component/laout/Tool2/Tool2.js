// Demo2 : React-fun函数组件， antd表单验证实例（getFieldDecorator）

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Navbar from '../../laout/Navbar'
import Child from './Child/Child'
import '../Tool2/Tool2.scss'
import {Button} from 'antd'

const Tool2 = () =>  {
    
  const [name, setName] = useState('Tom2')
  // ref获取子组件引用
  let childRef = useRef()
    
  const childValid = useCallback(() => {
    childRef && childRef.handleSubmit &&  childRef.handleSubmit()
  },[childRef])

  return ( 
      <div>
          <Navbar title="测试Demo" />
          <div className="Tool2">
            <Child wrappedComponentRef={(inst)=>childRef = inst} ref={childRef} initName={name} />  
            <div style={{marginTop:'10px',background:'#fff'}}>
              <Button onClick={childValid} type="primary">parent-提交</Button>
            </div>
          </div>
        
      </div>
  );
}

export default Tool2;