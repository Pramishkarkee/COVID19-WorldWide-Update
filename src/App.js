import React from 'react'

import {Cards,Chart,CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component{

    state={
        data: {},
        country:'',
    }

    async componentDidMount(){
        const fetchDatapi = await fetchData();
        // console.log("fetch data",fetchDatapi)
        this.setState({data:fetchDatapi})
    }
    handleCountryChange=async (countrydata)=>
    {
        const fetchDat = await fetchData(countrydata);
        console.log("fetch data",countrydata)
        this.setState({data:fetchDat,country:countrydata})
    }
    render(){
        const { data,country }=this.state
        // const c=typeof(this.state.country)
        // console.log(c)
        return(
            <div className={styles.container}>
                <h1>COVIED19 MEATER </h1>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={ data } countryName={country}/>
                
            </div>
        )
    }
}
export default App;