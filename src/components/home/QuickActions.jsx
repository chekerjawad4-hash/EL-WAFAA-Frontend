import "./QuickActions.css";

import {
Wallet,
ArrowDownToLine,
ArrowLeftRight,
CandlestickChart,
ChartNoAxesCombined,
Gift
} from "lucide-react";

const actions=[
{icon:<Wallet size={28}/>,name:"إيداع"},
{icon:<ArrowDownToLine size={28}/>,name:"سحب"},
{icon:<ArrowLeftRight size={28}/>,name:"تحويل"},
{icon:<CandlestickChart size={28}/>,name:"تداول"},
{icon:<ChartNoAxesCombined size={28}/>,name:"Futures"},
{icon:<Gift size={28}/>,name:"المكافآت"}
];

export default function QuickActions(){

return(

<div className="quick-actions">

{actions.map((item,index)=>(

<div key={index} className="quick-item">

<div className="quick-icon">
{item.icon}
</div>

<span>{item.name}</span>

</div>

))}

</div>

);

}
