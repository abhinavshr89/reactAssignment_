import React from 'react'
import "./Header.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import FormComponent from '../form/form';
import { Link } from 'react-router-dom';
import Options from '../Options/Options';
function Header() {
    const [open, setOpen] = useState(false);
   const handleFormButton =()=>{
        setOpen(!open);
    }
    return (
        <>
        
        <div className="header">
           
            <div className="header-left">
                <div className="header-left-icon">
                <ArrowBackIosIcon className='icon'></ArrowBackIosIcon>

                </div>
                <div className="header-left-content">

                Create Workorder
                </div>
            </div>

            <div className="header-right">
                <button className="save-button" onClick={handleFormButton}>
                    Save
                </button>
            </div>
        </div>
        {
            open &&
            <FormComponent open={open}/>
        }
            <Options/>
        </>
    );
}


export default Header