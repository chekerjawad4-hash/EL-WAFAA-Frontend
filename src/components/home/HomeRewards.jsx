import "./Home.css";

const rewards=[
{
title:"مكافأة الترحيب",
desc:"احصل على 100 USDT عند إكمال المهام."
},
{
title:"مكافأة التداول",
desc:"تداول واربح نقاط EL WAFAA."
}
];

export default function HomeRewards(){

return(

<div className="home-rewards">

<div className="rewards-header">

<h3>المكافآت</h3>

<span>عرض الكل</span>

</div>

<div className="reward-list">

{rewards.map((item,index)=>(

<div className="reward-card" key={index}>

<h4>{item.title}</h4>

<p>{item.desc}</p>

<button>استلام</button>

</div>

))}

</div>

</div>

);

}
