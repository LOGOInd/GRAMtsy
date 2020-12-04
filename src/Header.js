import React, { Component } from 'react'
import './styles/Header.css'
import { CountryDropdown } from 'react-country-region-selector';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: "yellow"
    },
    clearIndicator: {
      backgroundColor: "gray",
      "& span": {
        "& svg": {
          backgroundColor: "red"
        }
      }
    },
    popupIndicator: 'SearchIcon'
  }));

function Header() {
    const classes = useStyles();
    return (
        <div className="header" >

            <p className="header__brand">GRAMtsy</p> 

            <CountryDropdown className="header__countryDropdown" 
            defaultOptionLabel="India"  />
            {/* value={country} */}
            {/* onChange={(val) => this.setState({ country: val }) } */}
            
            <div>
                <Autocomplete
                    id="combo-box-demo"
                    className="header__search--autocomplete"
                    options={countries}
                    openOnClick={false}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} label="Search for a product" variant="outlined" />}
                    classes={{
                        clearIndicatorDirty: {SearchIcon},
                        popupIndicator: {SearchIcon}
                    }}
                />
                {/* <SearchIcon className="header__search--searchicon"
                /> */}
            </div>
            <div className="header__nav" >

                <div className="header__nav--option">
                    <span className="header__nav--option--lineOne">Hello </span> 
                    <span className="header__nav--option--lineTwo">User</span>
                </div>

                <div className="header__nav--option">
                    <span className="header__nav--option--lineOne">Rent </span>
                    <span className="header__nav--option--lineTwo">History</span>
                </div>
                
                <div className="header__nav--option">
                    <span className="header__nav--option--lineTwo">
                        <ShoppingCartIcon className="header__nav--option--shopping-cart-icon" 
                        fontSize="large"/>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Header

const countries = [
    { code: 'AD', label: 'MacBook Air 13in'},
    { code: 'AD', label: 'MacBook Pro 15in'},
    { code: 'AD', label: 'Lenovo Ideapad 13in'},
    { code: 'AD', label: 'Sony PS4 '},
    { code: 'AD', label: 'Avon Cycle 26inch'},
    { code: 'AD', label: 'Philips Iron'},
    
  ];