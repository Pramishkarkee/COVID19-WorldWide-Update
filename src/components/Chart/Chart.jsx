import React,{useState,useEffect} from 'react';
import {fetchDailyDate} from '../../api';
import {Line,Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart=({data:{confirmed,recovered,deaths},countryName})=>{
    // const data=props.data
    // console.log("this is data",data.confirmed.value)
    // const countryName=props.countryName
    const [dailyData,setDailyData]=useState([])
    useEffect(()=>{
        const fetchApi=async ()=>{
            setDailyData(await fetchDailyDate());
            
        }
        // console.log("fetch dailydata",dailyData)
        fetchApi();
    },[]);
    console.log("Values of confirmed data",confirmed,recovered,deaths)
    const lineChart=(
        dailyData.length ?<Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                fill:true,
                borderColor:'#3333ff'
            },
            {
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                fill:true,
                backgroundColor:"rgba(255, 0, 0, 0.6)"
            }],
        }}
        />:null
    );
    const barChart=(
        confirmed ?(<Bar
        data={{
                labels:['infected','Recovared','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['#001affe3',
                    'rgb(24, 199, 47)',
                    'rgba(255, 0, 0, 0.938)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }],
                
            }}
        options={{
            legend:{display:false},
            title:{display:true,text:`current state in ${countryName}`}
        }}
        />):null
    )
    
return(
    <div className={styles.container}>
        {countryName ? barChart :lineChart}
        {/* {lineChart} */}
    </div>
)
}
export default Chart;