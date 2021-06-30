import './App.css';
import React,  {useEffect,useState} from 'react'
import Chart from './Components/Chart';
import Brand from './brand.svg'
import $ from 'jquery'

const SearchContext=React.createContext()


function App() {

  const [ChartData,setChartData] = useState({})


 function getChartData(){
    // Ajax calls here
    setChartData(
      {
        labels: ['', '', '', '', '', '','', '', '', ''],
        datasets:[
          {
            label:'TPS history',
            data:[
              700,
              400,
              300,
              700,
              500,
              950,
              600,
              800,
              950
            ],
            backgroundColor:[
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0',
              '#42e8e0'
            ]
          }
        ]
      }
    )  };


 


useEffect(()=>{


  getChartData()

  $('.hamburger-menu').on('click',function(){

    console.log('h')

    $('.links').toggleClass('show')
    $('.section-main').toggleClass('margin-top')


  })


},[])

  return (

    <SearchContext.Provider value={{ChartData}} >
    <div className="App">
         <div className="navigation-wrapper">
             <div className="navigation">
                <div className="brand-icon"><a href="">  <img src={Brand} width="250" alt="Solana Explorer"/> </a> </div>
                <div className="hamburger-menu">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="links">
                   <a href="" className="active">Cluster Stats</a><a href="">Supply</a><a href="">inspector</a> <button>Mainnet Beta</button>
                </div>
             </div>
         
         </div> 

        <div className="section-main">
              <div className="search-bar">
                <input type="text" name="" id=""  placeholder="search for blocks accounts,transactions,programs,and tokens" />
              </div>

               <div className="heading">

           
                 <div className="box-wrapper">
                 <div className="box">
                 <h4>Circulating  Supply</h4>
                 <h1>   <span className="green-color"> 276.8M /</span>   <small>498.5M </small> </h1>
                 <h5><span className="green-color"> 55.5%</span>  is Circulating</h5>
              </div>
              <div className="box">
                 <h4>Active Stake</h4>
                 <h1> <span className="green-color">337.8M /</span> <small>498.5M </small> </h1>
                 <h5> Delinquent stake: <span className="green-color">0.2%</span>
                </h5>
              </div>
              <div className="box">
                 <h4>price</h4>
                 <h1> <span className="green-color">$32.91 </span><small>9999 </small> </h1>
                 <h5>4h Vol: $735.5M MCap: $9B</h5>
              </div>
                 </div>

                 <p>updated at 16:10:03 GMT+5:30</p>
                 
               </div>


               <table>
                  <tbody>
                     <tr>
                       <td>live Cluster Stats</td>
                   
                     </tr>
                     <tr>
                       <td>slot</td>
                       <td><span className="green-color">  85,063,875  </span> </td>
                     </tr>
                     <tr>
                       <td>Block height</td>
                       <td>76,655,188</td>
                     </tr>
                     <tr>
                       <td>cluster Time</td>
                       <td>June 30, 2021 at 10:32:32 Coordinated Universal Time</td>
                     </tr>
                     <tr>
                       <td>Slot time (1min average)</td>
                       <td>667ms</td>
                     </tr>
                     <tr>
                       <td>Slot time (1hr average)</td>
                       <td>613ms</td>
                     </tr>
                     <tr>
                       <td>Epoch</td>
                       <td>196</td>
                     </tr>
                     <tr>
                       <td>Epoch progress</td>
                       <td>90.7%</td>
                     </tr>
                     <tr>
                       <td>Epoch time remaining (approx.)</td>
                       <td>~6h 49m 57s</td>
                     </tr>
                  </tbody>
               </table>



               <table>
                  <tbody>
                  <tr>
                  <td>Live Transaction Stats</td>
               
                </tr>
                  <tr>
                  <td>Transaction count</td>
                  <td>20,431,344,673</td>
                </tr>
                <tr>
                <td>Transactions per second (TPS)</td>
                <td>388</td>
              </tr>
                <tr>
                <td>TPS history
                </td>
                <td>30m 2h 6h</td>
              </tr>
                <tr>
                <td className="full-width">       <Chart  location="Massachusetts" legendPosition="bottom"/>
                </td>
              
              </tr>
                  </tbody>
               </table>



        </div>
    </div>
    </SearchContext.Provider>
  );
}


export {SearchContext}

export default App;
