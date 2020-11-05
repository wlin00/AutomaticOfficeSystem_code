// Demo1 : React-class类组件， antd表单验证实例（getFieldDecorator）

import React, { Component } from 'react'
import Navbar from '../../laout/Navbar'
import Child from './Child/Child'
import '../Tool/Tool.scss'

class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'Tom' }
    }

    render() { 
        return ( 
          <div>
            <Navbar title="自动化办公系统" />
              <div className="Tool">
                <Child initName={this.state.name}/>
              </div>
          </div>
        );
    }
}

export default Tool;