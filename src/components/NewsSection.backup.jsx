import "../styles/NewsSection.css";

function NewsSection(){

  const news = [
    {
      title:"بيتكوين يواصل ارتفاعه",
      text:"الأسواق تشهد نشاطًا قويًا خلال آخر 24 ساعة."
    },
    {
      title:"الإعلان عن تحديث EL WAFAA",
      text:"سيتم إطلاق مزايا جديدة قريبًا داخل المنصة."
    },
    {
      title:"DZC Coin",
      text:"نعمل على تجهيز إطلاق عملة DZC بشكل رسمي."
    }
  ];

  return(
    <div className="news-section">

      <h2>📰 آخر الأخبار</h2>

      {news.map((item,index)=>(
        <div className="news-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

    </div>
  );

}

export default NewsSection;
