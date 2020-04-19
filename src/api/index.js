import axios from 'axios';

const url='https://covid19.mathdro.id/api'

export const fetchData=async (country)=>{
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }
    try {
        const { data:{ confirmed,recovered,deaths,lastUpdate} } =await axios.get(changeableUrl)
        
        // response.data
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
         
    } catch (error) {
        console.log("error")
    }
    }

export const fetchDailyDate=async()=>{
    try {
        const {data}=await axios.get(`${url}/daily`);
        // console.log(data)
        const ModifiedData=data.map(dailydata=>({
            confirmed:dailydata.confirmed.total,
            // recovered:dailydata.recovered.value,
            deaths:dailydata.deaths.total,
            // recovered:dailydata.recovered.value,
            date:dailydata.reportDate

        }))
        return ModifiedData
    } catch (error) {
        console.log("error")
    }
    }

const countryUrl="https://covid19.mathdro.id/api/countries"
export const fetchCountryData=async()=>{
    try {
        const {data :{ countries }}=await axios.get(`${url}/countries`)
        // console.log(data[0])
        return countries.map((country)=>country.name)
    } catch (error) {
        console.log("error")
    }
}