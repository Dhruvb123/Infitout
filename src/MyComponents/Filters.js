import React, { useState } from 'react';
import './Filters.css'
import { Button } from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'; 
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';

function FiltersComponent() {
    const CustomADDI = styled(ArrowDropDownIcon)({
        fontSize: '22px',
        width: '22px',
        fontWeight:'bold',
        color:'black',
        height:'18px'
      });

  const [isFiltersOpen, setFiltersOpen] = useState(false);

  const handleFiltersClick = () => {
    setFiltersOpen(!isFiltersOpen);
  };

  return (
    <div>
      <Button variant="contained" className='f-button' onClick={handleFiltersClick}>
        <TuneRoundedIcon />
        Filters
      </Button>
      {isFiltersOpen && (
        <div className="filters-content">
            <div className="t1">
            <div className="title">Filters</div>
            <CloseIcon onClick={handleFiltersClick}/>
            </div>
            <div className="title2">LTP Range</div>
            <div className="t2">
            <div className="boxx">
                <div className="namef">Maximum LTP</div>
            </div>
            <div className='dash'>-</div>
            <div className="boxx">
                <div className="namef">Minimum LTP</div>
            </div>
            </div>
            <div className="t3">
            <div className="tilte3">LTP Change% by</div>
            <div className="boxx">
                <div className="namef">Today Open</div>
                <CustomADDI />
            </div>
            </div>
            <div className="t3">
            <div className="ss">Specific Strike</div>
            <div className="boxx">
                <div className="namef"></div>
            </div>
            </div>
            <div className="t4">
            <div className="display">Display</div>
            <div className="rb">
            <div className="ipc">
            <div className="ip">
            <input type="checkbox" id="squareCheckbox" class="square-checkbox" />
            <label for="squareCheckbox">Calls</label>
            </div>
            <div className="ip">
            <input type="checkbox" id="squareCheckbox" class="square-checkbox" />
            <label for="squareCheckbox">Puts</label>
            </div>
            </div>
            </div>
            </div>
            <div className='line'></div>
            <div className="t5">
            <Button
                variant="contained"
                className='filter-button'
            >
            Reset
      </Button>
      <Button
        variant="contained"
        className='filter-button1'
      >
        Apply
      </Button>
            </div>
        </div>
      )}
    </div>
  );
}

export default FiltersComponent;
