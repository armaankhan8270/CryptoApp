import "./App.css";
import axios from "axios";
import { useEffect,useState } from "react";

function App() {
  const [Coins, setCoins] = useState([])
  const [searchword, setsearchword] = useState("");
  
useEffect(()=>{
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false')
  .then((response)=>{
    setCoins(response.data)
   
  })
},[])
 const fileter=Coins.filter((coin)=>{
  return coin.name.toLowerCase().includes(searchword.toLowerCase())

  
})




  return (

<>
    <div className="text-light  header mx-auto   container">
    <h1 className="text-white display-4 fw-bolder bg-dark rounded-pill">Crypto Sector</h1>
    </div>
    <div className="my-5 aa">
  <input  value={searchword} onChange={(e)=>setsearchword(e.target.value)} type="text" className=" col-3 fs-3 ies my-1 py-1 bg-transparent obrder-b-2 hover:border-black outline-none focus:outline-none text-black " placeholder="Serach currency" aria-label="Serach" aria-describedby="basic-addon2"/>
  {/* <button onClick={fileter} className="fs-2 fs-bold" id="basic-addon2">Search</button> */}
</div>
    <div>
      
    </div>

    <div>
     <div className="row armaan">
    {
      fileter.map((coin,id)=>{
        return(
          <div key={id} className="col-md-3     col-sm-6 aam col-xs-12 ">
            <div className="card bor bod  ">
              <div className="card-body armaan  hover:bg-white hover:shadow-lg ">
                
                <img  src={coin.image} className="card-img-top img" alt="..."/>
                <h5 className=" text-li txxt32 ght fs-1">{coin.name}</h5>
                <p className="txxt2 ">{coin.symbol}</p>
                {/* <p className="t">{coin.market_cap}</p> */}
                <p className="txxt ">Price  : ${coin.current_price}</p>
               
               
               
                <p className="txxt3 text-light">price_change_percentage:  {coin.price_change_percentage_24h}</p>
               

              </div>
            </div>
          </div>
        )})



      }
      </div>

    </div>
  </>
  );


    }
   
export default App;


