import React from 'react';
import './Search.css';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Filters from './Filters';
import Basket from './Basket';

function Search() {
  const CustomKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)({
    fontSize: '12px',
    width: '12px',
    fontWeight:'bold',
    color:'black',
    height:'8px'
  });
  
  const CustomKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)({
    fontSize: '12px',
    width: '12px',
    fontWeight:'bold',
    color:'black',
    height:'8px',
  });

  return (
    <>
    <div className="container1">
      <div className="box">
        <div className="name">NIFTY</div>
      </div>
      <div className="box">
        <div className="name">18 MAY 2023</div>
      </div>
      <div className="BOX1">
        <div className="box1">
          <div className="name1">spot</div>
          <div className="p-container1">
            <div className="price1">18,245.3</div>
            <div className="percent1">0.35%</div>
          </div>
        </div>
        <div className="box1">
          <div className="name1">fut</div>
          <div className="p-container1">
            <div className="price1">18,251.1</div>
            <div className="percent1">0.35%</div>
          </div>
        </div>
      </div>
      <div className="BOX2">
        <div className="box2">
          <div className="name1">Max pain</div>
          <div className="price1">18,200</div>
        </div>
        <div className="box2">
          <div className="name1">PCR</div>
          <div className="price1">0.92</div>
        </div>
        <div className="box2">
          <div className="name1">Support 1
            <div className="icon">
              <CustomKeyboardArrowUpIcon />
              <CustomKeyboardArrowDownIcon />
            </div>
          </div>
          <div className="price1">18100</div>
        </div>
        <div className="box2">
          <div className="name1">Resistance 1
            <div className="icon">
              <CustomKeyboardArrowUpIcon />
              <CustomKeyboardArrowDownIcon />
            </div>
          </div>
          <div className="price1">18500</div>
        </div>
      </div>
      <div className="btns">
      <div className='main-btn'>
        <Filters/>
        <Basket />
      </div>
      <div className="twobutton">
        <Button variant="contained" className='buttons' >
          LTP
        </Button>
        <Button variant="contained" className='buttons1'>
          Greeks
        </Button>
      </div>
    </div>
    </div>
   
      </>
  );
}

export default Search;
