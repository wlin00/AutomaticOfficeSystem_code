import React ,{ useEffect, useRef } from 'react';
import TweenMax from 'gsap'
import './Demo1.scss'

const Demo1 = () => {
  const REI = useRef(null)
  useEffect(() => {
    // 0s的时间内， 将ref元素x轴方向移动600px
    TweenMax.to(REI.current, 0, {x: 600})
  }, [])

  return (
    <div className="Demo1">
      <div ref={REI} className="item">item1</div>
    </div>
  )
}

export default Demo1
