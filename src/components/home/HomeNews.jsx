import "./Home.css";

const news=[
{
title:"إطلاق تحديث جديد لمنصة EL WAFAA",
time:"منذ 10 دقائق"
},
{
title:"إدراج عملات رقمية جديدة قريبًا",
time:"منذ ساعة"
},
{
title:"انطلاق مكافآت التداول الأسبوعية",
time:"منذ 3 ساعات"
}
];

export default function HomeNews(){

return(

<div className="home-news">

<div className="news-header">

<h3>آخر الأخبار</h3>

<span>عرض الكل</span>

</div>

{news.map((item,index)=>(

<div key={index} className="news-card">

<div>

<h4>{item.title}</h4>

<p>{item.time}</p>

</div>

</div>

))}

</div>

);

}
