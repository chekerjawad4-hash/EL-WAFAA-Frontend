import "../styles/NewsSection.css";

function NewsSection(){

  const news = [
    {
      type:"MARKET",
      title:"بيتكوين يواصل ارتفاعه",
      text:"الأسواق تشهد نشاطًا قويًا خلال آخر 24 ساعة.",
      date:"اليوم"
    },
    {
      type:"EL WAFAA",
      title:"تحديث جديد للمنصة",
      text:"سيتم إطلاق مزايا جديدة داخل منصة EL WAFAA Exchange.",
      date:"اليوم"
    },
    {
      type:"DZC",
      title:"DZC Coin",
      text:"نعمل على تجهيز إطلاق عملة DZC بشكل رسمي.",
      date:"قريباً"
    }
  ];

  return(
    <section className="news-section">

      <h2>📰 آخر الأخبار</h2>

      {news.map((item,index)=>(
        <div className="news-card" key={index}>

          <small>{item.type} • {item.date}</small>

          <h3>{item.title}</h3>

          <p>{item.text}</p>

        </div>
      ))}

    </section>
  );
}

export default NewsSection;
