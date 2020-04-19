import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountryData} from '../../api'
const CountryPicker=(props)=>{
const [countryData,setCountryData]=useState([])
useEffect(()=>{
    const fetchCountry=async ()=>{
        setCountryData(await fetchCountryData())
        
    }
    // console.log('countries',countryData)
    fetchCountry();
},[countryData]);
// const countryName=countryData.map(cdata=>cdata.countries[0])
// console.log("props",props)
return(
    <FormControl className="styles.formControl">
        <NativeSelect defaultValue="" onChange={(e)=>props.handleCountryChange(e.target.value)}>
            <option value="globel">Global</option>
                {countryData.map((country,i)=><option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
)
}
export default CountryPicker;