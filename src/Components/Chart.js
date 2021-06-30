import {SearchContext} from '../App'
import React, {useContext,useState,useEffect} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const  Chart=()=> {

const {ChartData} = useContext(SearchContext) 

// const [chartData,setchartData] = useState()


useEffect(()=>{

    //  setchartData(ChartData)

},[])

//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.ChartData
//     }
//   }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }




    return (
      <div className="chart">
        <Bar
          data={ChartData}
          options={{
            title:{
              display:'ll',
              text:'Largest Cities In ',
              fontSize:25
            },
            legend:{
              display:'jj',
              position:''
            }
          }}
        />
      </div>
    )
  
}

export default Chart;