import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getCandles } from "../../services/api";

function TradingChart({ symbol }) {

  const [candles,setCandles] = useState([]);

  useEffect(()=>{

    async function load(){

      const binanceSymbol = symbol.replace("/", "");
      const result = await getCandles(binanceSymbol);

      if(result.success){
        setCandles(result.candles);
      }

    }

    load();

  },[symbol]);


  const option = {

    backgroundColor:"#171b22",

    tooltip:{
      trigger:"axis",
      axisPointer:{
        type:"cross"
      }
    },

    grid:{
      left:10,
      right:80,
      top:20,
      bottom:50
    },

    xAxis:{
      type:"category",
      data:candles.map(c=>new Date(c.time * 1000).toLocaleDateString()),
      axisLabel:{
        color:"#ccc"
      }
    },

    yAxis:{
      scale:true,
      position:"right",
      axisLabel:{
        color:"#ccc",
        margin:15
      }
    },

    series:[
      {
        type:"candlestick",
        data:candles.map(c=>[
          Number(c.open),
          Number(c.close),
          Number(c.low),
          Number(c.high)
        ])
      }
    ]

  };


  return (

    <ReactECharts
      option={option}
      style={{
        width:"100%",
        height:"420px",
        marginBottom:"20px"
      }}
    />

  );

}

export default TradingChart;
