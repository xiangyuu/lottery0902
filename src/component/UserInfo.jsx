// https://x6016.com:5443/#/plays/hall
import React, {useState} from 'react';
import './UserInfo.scss';
import info01 from '../static/pictures/info01.png'
import info02 from '../static/pictures/info02.png'
import info03 from '../static/pictures/info03.png'
import info04 from '../static/pictures/info04.png'
import info05 from '../static/pictures/info05.png'
import info06 from '../static/pictures/info06.png'
import info07 from '../static/pictures/info07.png'
import info08 from '../static/pictures/info08.png'

function tabsTitle(title) {
  return (
    <div>
      <span>{title}</span>
      <span>余额:0.00</span>
      <span>代理佣金:0.00</span>
    </div>
  )
}

function UserInfo(props) {
  const [navItem, setNavItem] = useState(
    [[info01, '充值'],
      [info02, '提款'],
      [info03, '借款'],
      [info04, '个人'],
      [info05, '优惠'],
      [info06, '代理'],
      [info07, '信息'],
      [info08, '客服']]
  )
  return (
    <div className='container'>
      <div className='sider'>
        <div className='nav'>
          <ul>
            {navItem.map((value, index) => (
              <li key={index}>
                <img src={value[0]}/>
                <span>{value[1]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='tabs'>
          {tabsTitle(navItem[0][1])}
          <ul>
            <li>支付宝支付</li>
            <li>银联支付</li>
            <li>虚拟币支付</li>
          </ul>
        </div>
      </div>
      <div className='main'>
        <div className='header'>

        </div>
        <div className='body'>

        </div>
      </div>
    </div>
  );
}

export default UserInfo;