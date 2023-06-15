import React, { useState } from 'react';
import './Basket.css';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Basket() {
    const [isFiltersOpen, setFiltersOpen] = useState(false);

    const handleFiltersClick = () => {
      setFiltersOpen(!isFiltersOpen);
    };
    const CustomIcon = styled(AddCircleOutlineIcon)({
        fontSize: '22px',
        width: '20px',
        fontWeight:'bold',
        color:'black',
        height:'16px'
      });
      const tableData = [
        ['Instrument', 'B/S', 'Type', 'Qty', 'Price', 'Trigger', '', ''],
        ['Instrument 1', 'B', 'Type 1', 10, 100, 'Trigger 1', '', ''],
        ['Instrument 2', 'S', 'Type 2', 5, 200, 'Trigger 2', '', ''],
        ['Instrument 3', 'B', 'Type 1', 8, 150, 'Trigger 3', '', ''],
        ['Instrument 4', 'S', 'Type 2', 12, 180, 'Trigger 4', '', ''],
        ['Instrument 5', 'B', 'Type 1', 15, 120, 'Trigger 5', '', ''],
      ];
  return (
    <div className='basket-container'>
    <Button variant="contained" className='b-button' onClick={handleFiltersClick}>
      Basket
    </Button>
    {isFiltersOpen && (
      <div className="basket-content">
        <div className="b-header">
            <div className="h-data">
                <div>Max Profit</div>
                <div>24,000/-</div>
            </div>
            <div className="h-data">
                <div>Max Loss</div>
                <div>Unlimited</div>
            </div>
            <div className="h-data">
                <div>Risk-Reward</div>
                <div>NA</div>
            </div>
            <div className="h-data">
                <div>Probability</div>
                <div>32%</div>
            </div>
            <div className="h-data">
                <div>Breakeven</div>
                <div> &gt; 38124.2</div>
            </div>

        </div>
        <table className="table-borderless">
      <thead>
        <tr>
          {tableData[0].map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <hr />
        <div className="b-footer">
            <div className="f-data">
            <div className="fd">
                <div className="fd1">Margin required :</div>
                <div className="fd1">&euro; 2,43,630.3</div>
            </div>
            <div className="fd">
                <div className="fd1">Available funds :</div>
                <div className="fd1">&euro; 12,00,000.0</div>
            </div>
            </div>
            <div className="fbox1">
                <button className="btn1"><CustomIcon/>
                    <div className="n">Auto hedge</div>
                </button>
            </div>
            <div className="fBox">
                <div className="fbox2">
                    <button className='btn2' onClick={handleFiltersClick}>Close Basket</button>
                </div>
                <div className="fbox3">
                    <button className='btn3'>Place Order</button>
                </div>
            </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Basket;
