import ReactECharts from "echarts-for-react";

export default function Sparkline({data=[],color="#0ecb81"}){

const option={

animation:false,

grid:{
left:0,
right:0,
top:0,
bottom:0
},

xAxis:{
type:"category",
show:false,
data:data.map((_,i)=>i)
},

yAxis:{
type:"value",
show:false,
scale:true
},

series:[
{
type:"line",
data,
smooth:true,
showSymbol:false,
lineStyle:{
width:2,
color
},
areaStyle:{
opacity:.15,
color
}
}
]

};

return(
<ReactECharts
option={option}
style={{
width:"110px",
height:"42px"
}}
/>
);

}
