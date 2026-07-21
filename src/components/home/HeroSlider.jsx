import { useState,useEffect } from "react";
import "./HeroSlider.css";
import dzcCoin from "../../assets/dzc-coin.svg";

const slides=[
{
title:"Trade DZC Today",
text:"Fast • Secure • Low Fees",
button:"Trade Now",
bg:"linear-gradient(135deg,#1b1f27,#0b0f14)"
},
{
title:"EL WAFAA Futures",
text:"Up to 125x Leverage",
button:"Open Futures",
bg:"linear-gradient(135deg,#2a1d00,#11161d)"
},
{
title:"Welcome Rewards",
text:"Complete tasks and earn bonuses",
button:"Claim Reward",
bg:"linear-gradient(135deg,#143329,#11161d)"
}
];

export default function HeroSlider(){

const [index,setIndex]=useState(0);

useEffect(()=>{
const timer=setInterval(()=>{
setIndex(i=>(i+1)%slides.length);
},5000);

return()=>clearInterval(timer);
},[]);

const slide=slides[index];

return(

<div className="hero-slider">

<div
className="hero-card"
style={{background:slide.bg}}
>

<h2>{slide.title}</h2>

<p>{slide.text}</p>

<button>{slide.button}</button>

<img
src={dzcCoin}
alt="DZC"
className="hero-coin"
/>

</div>

<div className="hero-dots">

{slides.map((_,i)=>(
<span
key={i}
className={i===index?"dot active":"dot"}
></span>
))}

</div>

</div>

);

}
