// Demo2 : React-fun函数组件， antd表单验证实例（getFieldDecorator）

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Navbar from '../../laout/Navbar'
import Child from './Child/Child'
import '../Tool2/Tool2.scss'
// import {Form, Button, Select, Input, message} from 'antd'
// const {Option} = Select

const Tool2 = () =>  {
    
  const [name, setName] = useState('Tom2')
    
  return ( 
      <div>
          <Navbar title="自动化办公系统" />
          <div className="Tool2">
            <Child initName={name} />  
          </div>
      </div>
  );
}

export default Tool2;