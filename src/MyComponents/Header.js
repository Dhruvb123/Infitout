import React from 'react';
import "./Header.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <div className='container'>
      <div className="logo">
        <img src="https://tradier.com/assets/images/platforms/tnt/TNTStocks-logo.png" alt="404" width={40} />
      </div>
      <div className="menu">
        <span>Dashboard</span>
        <span>Option chain</span>
        <span>Strategy builder</span>
        <span>Positions</span>
        <span>Order book</span>
      </div>
      <div className="stocks">
        <span>
          <div className="name">NIFTY</div>
          <div className='p-container'>
            <div className="percent">0.35%</div>
            <div className="price">18,245.32</div>
          </div>
        </span>
        <span>
          <div className="name">BANKNIFTY</div>
          <div className='p-container'>
            <div className="percent ">0.7%</div>
            <div className="price ">39,156.1</div>
          </div>
        </span>
        <span>
          <div className="name">INDIA VIX</div>
          <div className='p-container'>
            <div className="percent -ve">-10.9%</div> 
            <div className="price">12.12</div>
          </div>
        </span>
      </div>
      <div className="profile">
        <span>Profile</span>
        <div className="arrow"><KeyboardArrowDownIcon /></div>
      </div>
    </div>
  );
}

export default Header;
