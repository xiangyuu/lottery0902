//https://x6016.com:5443/#/plays/hall
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
import close from '../static/pictures/close.png'

function tabsTitle(title) {
  return (
    <div className='tab-div'>
      <span className='tab-title'>{title}</span>
      <span className='tab-balance'>余额:0.00</span>
      <span className='tab-proxy'>代理佣金:0.00</span>
    </div>
  )
}

function UserInfo(props) {
  const [navItem, setNavItem] = useState(
    [{image: info01, label: '充值',item:['支付宝支付','银联支付','虚拟币支付']},
      {image: info02, label: '提款',item:['银行卡提款','绑定银行卡','提款记录']},
      {image: info03, label: '借款',item:['免息借款','我要借款','我要还款','借款记录']},
      {image: info04, label: '个人',item:['个人报表','我的资料','投注记录','取款记录','优惠记录','代理记录','其他记录','账号安全']},
      {image: info05, label: '优惠',item:['时时返水','每日签到']},
      {image: info06, label: '代理',item:['我的收益','代理报表','下级报表','下集列表','下级财务','下级人数']},
      {image: info07, label: '信息',item:['系统信息','投诉建议','已发信息']},
      {image: info08, label: '客服',item:['']}]
  )
  const [isClick, setIsClick] = useState('提款')
  const [isClickTab,setIsClickTab]=useState('')
  const showTab = (t) => {
    if (t === '充值') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('充值')}</span>
          <ul>
            <li><span>支付宝支付</span></li>
            <li><span>银联支付</span></li>
            <li><span>虚拟币支付</span></li>
          </ul>
        </div>
      )
    } else if (t === '提款') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('提款')}</span>
          <ul>
            <li><span>银行卡提款</span></li>
            <li><span>绑定银行卡</span></li>
            <li><span>提款记录</span></li>
          </ul>
        </div>
      )
    } else if (t === '借款') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('借款')}</span>
          <ul>
            <li><span>免息借款</span></li>
            <li><span>我要借款</span></li>
            <li><span>我要还款</span></li>
            <li><span>借款记录</span></li>
          </ul>
        </div>
      )
    } else if (t === '个人') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('个人')}</span>
          <ul>
            <li><span>个人报表</span></li>
            <li><span>我的资料</span></li>
            <li><span>投注记录</span></li>
            <li><span>取款记录</span></li>
            <li><span>优惠记录</span></li>
            <li><span>代理记录</span></li>
            <li><span>其他记录</span></li>
            <li><span>账号安全</span></li>
          </ul>
        </div>
      )
    } else if (t === '优惠') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('优惠')}</span>
          <ul>
            <li><span>时时返水</span></li>
            <li><span>每日签到</span></li>
          </ul>
        </div>
      )
    } else if (t === '代理') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('代理')}</span>
          <ul>
            <li><span>我的收益</span></li>
            <li><span>代理报表</span></li>
            <li><span>下级报表</span></li>
            <li><span>下级列表</span></li>
            <li><span>下级财务</span></li>
            <li><span>下级人数</span></li>
          </ul>
        </div>
      )
    } else if (t === '信息') {
      return (
        <div className='tabs'>
          <span>{tabsTitle('信息')}</span>
          <ul>
            <li><span>系统信息</span></li>
            <li><span>投诉建议</span></li>
            <li><span>已发信息</span></li>
          </ul>
        </div>
      )
    }
  }

  function selectedNav(str) {
    setIsClick(str)
  }

  function bodyBtn() {
    return (
      <div className='body-btn'>
        <div>
          <p><span className='space'>温馨提示:</span> 1、充值时候，切记提交订单的金额和充值的金额要相一致，这样成功率较高，1~3分钟即可到帐,<br/></p>
          <p>如不一致，会导致不到帐哦【<span className='red-font'>支付成功不到帐的，请找在线客服或推广代理</span>】<br/></p>
          <p> 2、由于银行管制、导致第三方充值通道不稳定、如果充值一次未成功请换其他通道进行充值！</p>
        </div>
        <button className='body-submit'>确认提交</button>
      </div>
    )
  }

  function showMain(h) {
    if (h === '支付宝支付') {
      return (
        <div className='main'>
          <div className='header'>
            <span>{h}</span>
            <div>
              <span>通道一</span>
              <span>通道二</span>
            </div>
            <div className='header-close'><img src={close} alt=''/></div>
          </div>
          <div className='body'>
            <div>
              <label>存款金额:</label><input className='enter-input' placeholder='2058~10000有效金额'/>
              <input className='radio-input' type='radio' value='2058'/><label>2058</label>
              <input className='radio-input' type='radio' value='2518'/><label>2518</label>
              <input className='radio-input' type='radio' value='3018'/><label>3018</label>
              <input className='radio-input' type='radio' value='3518'/><label>3518</label>
              <input className='radio-input' type='radio' value='4018'/><label>4018</label>
              <input className='radio-input' type='radio' value='5018'/><label>5018</label>
              <input className='radio-input' type='radio' value='6018'/><label>6018</label>
              <input className='radio-input' type='radio' value='7018'/><label>7018</label>
            </div>
            {bodyBtn()}
          </div>
        </div>
      )
    } else if (h === '银联支付') {
      return (
        <div className='main'>
          <div className='header'>
            <span>{h}</span>
            <div>
              <span>通道一</span>
            </div>
            <div className='header-close'><img src={close} alt=''/></div>
          </div>
          <div className='body'>
            <div>
              <label>存款金额:</label><input className='enter-input' placeholder='200~5000有效金额'/>
              <input className='radio-input' type='radio' value='200'/><label>200</label>
              <input className='radio-input' type='radio' value='300'/><label>300</label>
              <input className='radio-input' type='radio' value='400'/><label>400</label>
              <input className='radio-input' type='radio' value='500'/><label>500</label>
              <input className='radio-input' type='radio' value='600'/><label>600</label>
              <input className='radio-input' type='radio' value='700'/><label>700</label>
              <input className='radio-input' type='radio' value='800'/><label>800</label>
              <input className='radio-input' type='radio' value='900'/><label>900</label>
            </div>
            {bodyBtn()}
          </div>
        </div>
      )
    } else if (h === '虚拟币支付') {
      return (
        <div className='main'>
          <div className='header'>
            <span>{h}</span>
            <div>
              <span>ERC20</span>
            </div>
            <div className='header-close'><img src={close} alt=''/></div>
          </div>
          <div className='body'>
            <div>
              <label>存款金额:</label><input className='enter-input' placeholder='10~100000有效金额'/>
              <input className='radio-input' type='radio' value='100'/><label>100</label>
              <input className='radio-input' type='radio' value='500'/><label>500</label>
              <input className='radio-input' type='radio' value='800'/><label>800</label>
              <input className='radio-input' type='radio' value='1000'/><label>1000</label>
              <input className='radio-input' type='radio' value='2000'/><label>2000</label>
              <input className='radio-input' type='radio' value='3000'/><label>3000</label>
              <input className='radio-input' type='radio' value='5000'/><label>5000</label>
              <input className='radio-input' type='radio' value='8000'/><label>8000</label>
            </div>
            {bodyBtn()}
          </div>
        </div>
      )
    }
  }

  return (
    <div className='container'>
      <div className='sider'>
        <div className='nav'>
          <ul>
            {navItem.map((e, index) => (
              <li key={index} onClick={() => selectedNav(e.label)}>
                <img src={e.image}/>
                <span>{e.label}</span>
              </li>
            ))}
          </ul>
        </div>
        {showTab(isClick)}
      </div>
      {showMain('银联支付')}
    </div>
  );
}

export default UserInfo;